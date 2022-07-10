/**
 * 
 * @param {Object} graph 
 * @param {Node} source 
 */
const depthFirstPrint = (graph, source) => {
  const stack = [ source ];
  while(stack.length > 0) {
    const current = stack.pop();
    // do stuff
    console.log(current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

const depthFirstPrintRecursive = (graph, source) => {
  //  do stuff
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor)
  }
}

const breadthFirstPrint = (graph, source) => {
  const queue = [ source ];
  while (queue.length > 0) {
    const current = queue.shift();
    // do stuff
    console.log(current);
    for(let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
}

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

depthFirstPrint(graph, 'a');
depthFirstPrintRecursive(graph, 'a');
breadthFirstPrint(graph, 'a');