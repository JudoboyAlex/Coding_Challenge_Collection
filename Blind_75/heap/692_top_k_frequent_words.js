var topKFrequent = function (words, k) {
  let hash = {};

  words.forEach((word, idx) => {
    hash[word] = hash[word] + 1 || 1;
  });

  let sortedArr = Object.keys(hash).sort();
  let sorted = sortedArr.sort((a, b) => hash[b] - hash[a]);

  return sorted.slice(0, k);
};

/*
Complexity Analysis
let N be the length of words.

Time Complexity: O(Nlog⁡N). We count the frequency of each word in O(N) time, and then we sort the given words in O(Nlog⁡N) time.

Space Complexity: O(N), the space used to store frequencies in a HashMap and return a slice from a sorted list of length O(N).
*/


// Min Heap Solution
// Whenever I have an interview and the problem requires a heap, I always use this mockup. I let the interviewer know that there is no native priority queue in javascript so I use that simulation. Then I can focus on the algorithm iteself, which is what matters.
// What do you usually do in javascript algo interviews where a p.queue is required ?

const topKFrequent = (words, k) => {
    if(!words || words.length === 0) return [];
    
    const freq = getFrequencies(words);
    const minHeap = new Heap(compareFunc);
    
    for(const word of freq.keys()) {
        const tuple = [word, freq.get(word)];
        minHeap.insert(tuple);
        if(minHeap.size > k) minHeap.extract();
    }
    
    const ans = new Array();
    while(minHeap.size > 0) ans.unshift(minHeap.extract()[0]);
          
    return ans;
};

const compareFunc = (a, b) => {
    if(a[1] === b[1]) {
        if(a[0] === b[0]) return 0;
        if(a[0] < b[0]) return 1;
        return -1;
    }
    
    return a[1] - b[1];
};

const getFrequencies = (words) => {
    const freq = new Map();
    words.forEach(word => {
        if(!freq.has(word)) freq.set(word, 0);
        freq.set(word, freq.get(word) + 1);
    });
    
    return freq;
};

class Heap {
    constructor(compareFunc) {
        this.compareFunc = compareFunc;
        this.heap = new Array();
    }
    
    insert(val) {
        this.heap.push(val);
        this.heap.sort(this.compareFunc);
    }
    
    extract() {
        return this.heap.shift();
    }
    
    peek() {
        return this.heap[0];
    }
    
    get size() {
        return this.heap.length;
    }
}