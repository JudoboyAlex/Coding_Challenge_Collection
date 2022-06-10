import React from "react";

function useStateWithHistory(initialState) {
  const [state, setStateInternal] = useState(initialState);
  const history = useRef([state]);
  const historyIndex = useRef(0);

  const setState = (newState) => {
    history.current.push(newState);
    historyIndex.current = history.current.length - 1;
    setStateInternal(newState);
  };

  const goBack = () => {
    if (historyIndex.current === 0) return;

    historyIndex.current--;
    setStateInternal(history.current[historyIndex.current]);
  };

  const goForward = () => {
    if (historyIndex.current >= history.current.length - 1) return;

    historyIndex.current++;
    setStateInternal(history.current[historyIndex.current]);
  };

  return [state, setState, goBack, goForward, history.current];
}

/*
Usage:

const [
    value, // 10
    setValue, // function
    goBack, // function
    goForward, // function
    history // [10]
] = useStateWithHistory(10);

setValue(15); // value=15, history=[10, 15]
setValue(20); // value=20, history=[10, 15, 20]
goBack(); // value=15, history=[10, 15, 20]
goBack(); // value=10, history=[10, 15, 20]
goBack(); // value=10, history=[10, 15, 20]
goForward(); // value=15, history=[10, 15, 20]
setValue(25); // value=25, history=[10, 15, 20, 25]
setValue(30); // value=25, history=[10, 15, 20, 25, 30]
goBack(); // value=25, history=[10, 15, 20, 25, 30]
goForward(); // value=30, history=[10, 15, 20, 25, 30]
goForward(); // value=30, history=[10, 15, 20, 25, 30]
*/