class Observable {
  constructor(setup) {
    this._setup = setup;
  }

  subscribe(subscriber) {
    // equivalent to fire
    // a wrapper function/ object
    // is used to share the closure of outer function and modify the logics
    const subscriberWrapper = {
      unsubscribed: false,
      next(value) {
        if (this.unsubscribed) return;
        // we are relying on the scope of subscriber
        if (subscriber instanceof Function) return subscriber(value);
        return subscriber.next ? subscriber.next(value) : null;
      },
      error(value) {
        if (this.unsubscribed) return;
        this.unsubscribe();
        return subscriber.error ? subscriber.error(value) : null;
      },
      complete() {
        if (this.unsubscribed) return;
        this.unsubscribe();
        return subscriber.complete ? subscriber.complete() : null;
      },
      unsubscribe() {
        this.unsubscribed = true;
      },
    };
    this._setup(subscriberWrapper);
    return subscriberWrapper;
  }
}
