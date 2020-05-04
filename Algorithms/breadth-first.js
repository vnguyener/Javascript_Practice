const exampleGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0],
];

const bfs = (graph, start) => {
    let nodeLengths = {};

    // start all distances at infinity (or not reachable from the start node)
    for (i = 0; i < graph.length; i ++) {
        nodeLengths[i] = Infinity;
    }

    // the start node is 0 steps away form itself;
    nodeLengths[start] = 0;

    // simple queue for nodes to visit
    let queue = [start];
    // placeholder for the current node
    let current;

    // traverse each node (row of graph) from current to get neighboring nodes
    console.log('queue', queue)
    while (queue.length != 0) {
        let neighborNodeIndexes = [];
        // remove a node from the queue to traverse
        current = queue.shift();
        let currentConnectedNode = graph[current];
        console.log('current connected node', current, currentConnectedNode)
        // find first connected index
        let foundIndex = currentConnectedNode.indexOf(1);
        while (foundIndex != -1) {
            neighborNodeIndexes.push(foundIndex);
            // get next foundIndex after the current found index
            foundIndex = currentConnectedNode.indexOf(1, foundIndex + 1);
        }


        for (let j = 0; j < neighborNodeIndexes.length; j++) {
            // if we havent visited a row yet, but it is connected to our current node
            // we increment by the "place" of the current + 1
            if (nodeLengths[neighborNodeIndexes[j]] == Infinity) {
                nodeLengths[neighborNodeIndexes[j]] = nodeLengths[current] + 1;
                queue.push(neighborNodeIndexes[j]);
            };
        }
    }

    return nodeLengths;
};

console.log(bfs(exampleGraph, 1));
console.log(bfs(exampleGraph, 0));
console.log(bfs(exampleGraph, 4));
console.log(bfs(exampleGraph, 3));