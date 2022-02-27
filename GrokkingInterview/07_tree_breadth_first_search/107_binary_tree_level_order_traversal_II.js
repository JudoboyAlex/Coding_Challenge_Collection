var levelOrderBottom = function(root) {
    if(!root) return []
       
       const queue = [root] // initialize the queue with root
       const levels = [] // declare output array
       
       while(queue.length > 0){
          const queueLength = queue.length // Get the length prior to dequeueing
          const currLevel = [] // Declare this level
          // loop through to exhaust all options and only to include nodes at currLevel
          for(let i = 0; i < queueLength; i++){
              // Get next node
              const current = queue.shift()
              
              if(current.left){
                  queue.push(current.left)
              }
              if(current.right){
                  queue.push(current.right)
              }
              // After we add left and right for current, we add to currLevel
              currLevel.push(current.val)
          }
          // Level has been finished. Push into output array
          levels.push(currLevel)
      }
       return levels.reverse();
   };

/*
Time complexity#

The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. 
This is due to the fact that we traverse each node once.

Space complexity#

The space complexity of the above algorithm will be O(N) as we need to return a list containing the 
level order traversal. We will also need O(N) space for the queue. Since we can have a maximum of N/2 nodes 
at any level (this could happen only at the lowest level), therefore 
we will need O(N) space to store them in the queue.
*/