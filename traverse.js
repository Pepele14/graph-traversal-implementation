const graph = {
  A: ["B", "D"],
  B: ["A", "C", "E"],
  C: ["B"],
  D: ["A", "E"],
  E: ["B", "D", "F"],
  F: ["E"],
};

function traverse(graph, start, type) {
  const processChain = [start];
  const visited = new Set();
  const result = [];
  let node;
  let counter = 0;

  while (processChain.length) {
    console.log(
      "counter: ",
      counter,
      "\n",
      "node: ",
      node,
      "\n",
      "processChain: ",
      processChain.join(", "),
      "\n",
      "result: ",
      result.join(", ")
    );

    if (type === "bfs") {
      node = processChain.shift();
    } else {
      node = processChain.pop();
    }

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (const neighbor of graph[node]) {
        processChain.push(neighbor);
      }
    }
    counter++;
  }
  return result;
}

module.exports = { graph, traverse };
