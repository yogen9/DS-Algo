"use strict";

class Graph {
  constructor() {
    this.AdjList = new Map();
  }

  addVertex(vertex) {
    if (!this.AdjList.has(vertex)) {
      this.AdjList.set(vertex, []);
    } else {
      throw "Already Exist!!!";
    }
  }

  addEdge(vertex, node) {
    if (this.AdjList.has(vertex)) {
      if (this.AdjList.has(node)) {
        let arr = this.AdjList.get(vertex);
        if (!arr.includes(node)) {
          arr.push(node);
        } else {
          throw `Can't add '${node}', it already exists`;
        }
      } else {
        throw `Can't add non-existing vertex ->'${node}'`;
      }
    } else {
      throw `You should add '${vertex}' first`;
    }
  }

  print() {
    console.log(this.AdjList);
    for (let [key, value] of this.AdjList) {
      console.log(key, value);
    }
  }

  createVisitedObject() {
    let arr = {};
    for (let key of this.AdjList.keys()) {
      arr[key] = false;
    }
    return arr;
  }

  bfs(startingNode) {
    let visited = this.createVisitedObject();
    let q = [];

    visited[startingNode] = true;
    q.push(startingNode);

    while (q.length) {
      let current = q.pop();
      let arr = this.AdjList.get(current);
      for (let elem of arr) {
        if (!visited[elem]) {
          visited[elem] = true;
          q.unshift(elem);
        }
      }
    }
  }

  dfs(startingNode) {
    console.log("\nDFS");
    let visited = this.createVisitedObject();
    this.dfsHelper(startingNode, visited);
  }

  dfsHelper(startingNode, visited) {
    visited[startingNode] = true;
    let arr = this.AdjList.get(startingNode);
    for (let elem of arr) {
      if (!visited[elem]) {
        this.dfsHelper(elem, visited);
      }
    }
  }
}
