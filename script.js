const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

class Node {
  constructor(row, column, distanceFromStart) {
    this.row = row;
    this.column = column;
    this.distanceFromStart = distanceFromStart;
  }
  getPositionString() {
    return `${this.row}, ${this.column}`;
  }
}

function getneighbors(row, column) {
  let neighbors = [];

  for (const direction of directions) {
    let [rowChange, columnChange] = direction;

    const neighborRow = row + rowChange;
    const neighborCol = column + columnChange;
    neighbors.push([neighborRow, neighborCol]);
  }
  return neighbors;
}

function knightMove(startRow, startColumn, targetRow, targetColumn) {
  let queue = [];
  let startNode = new Node(startRow, startColumn, 0);
  queue.unshift(startNode);

  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    const { row, column, distanceFromStart } = node;

    if (row === targetRow && column === targetColumn) {
      return distanceFromStart;
    }
    visited.add(node.getPositionString());

    for (const neighbor of getneighbors(row, column)) {
      const [neighborRow, neighborCol] = neighbor;
      const neighborNode = new Node(
        neighborRow,
        neighborCol,
        distanceFromStart + 1
      );
      if (visited.has(neighborNode.getPositionString())) continue;
      queue.push(neighborNode);
    }
  }
}

console.log(knightMove(0, 0, 2, 3));
console.log(knightMove(1, 1, 2, 3));
