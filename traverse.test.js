const { graph, traverse } = require("./traverse");

test("BFS traversal starting from node A", () => {
  expect(traverse(graph, "A", "bfs")).toEqual(["A", "B", "D", "C", "E", "F"]);
});

test("DFS traversal starting from node A", () => {
  expect(traverse(graph, "A", "dfs")).toEqual(["A", "D", "E", "F", "B", "C"]);
});

test("BFS traversal starting from node B", () => {
  expect(traverse(graph, "B", "bfs")).toEqual(["B", "A", "C", "E", "D", "F"]);
});

test("DFS traversal starting from node B", () => {
  expect(traverse(graph, "B", "dfs")).toEqual(["B", "E", "F", "D", "A", "C"]);
});

test("BFS traversal starting from node E", () => {
  expect(traverse(graph, "E", "bfs")).toEqual(["E", "B", "D", "F", "A", "C"]);
});

test("DFS traversal starting from node E", () => {
  expect(traverse(graph, "E", "dfs")).toEqual(["E", "F", "D", "A", "B", "C"]);
});
