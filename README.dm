Graph Traversal Algorithms
This repository contains a JavaScript implementation of graph traversal algorithms, specifically Breadth-First Search (BFS) and Depth-First Search (DFS). The code defines a graph using an adjacency list and provides a traverse function to explore the graph starting from a given node, using either BFS or DFS based on the input parameters.

Description
The repository offers a straightforward implementation of graph traversal, useful for educational purposes and small-scale projects requiring graph exploration. It includes:

An adjacency list representation of a graph.
A traversal function capable of performing BFS and DFS.
Console logs to track the traversal process step-by-step.
Test cases

Code Details
Graph Representation
The graph is represented using an adjacency list as follows:

const graph = {
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E'],
};

Traverse Function
The traverse function explores the graph using either BFS or DFS based on the type parameter.

Parameters
graph (object): The graph to traverse, represented as an adjacency list.
start (string): The starting node for the traversal.
type (string): The type of traversal, either "bfs" for Breadth-First Search or any other value for Depth-First Search.

Returns
result (array): An array of nodes in the order they were visited.

console.log(traverse(graph, "A", "bfs"));

This will output the nodes visited in BFS order starting from node "A".

This example demonstrates how the graph traversal function can be used and provides insights into its inner workings through the console log outputs.

