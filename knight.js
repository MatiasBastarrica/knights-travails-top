import { Queue } from "./queue.js";

export function getValidMoves(startVertex) {
  // let queue = new Queue();
  let validMoves = [];
  let x = startVertex[0];
  let y = startVertex[1];

  if (y + 2 <= 7) {
    if (x - 1 >= 0) {
      validMoves.push([x - 1, y + 2]);
      // queue.enqueue([x - 1, y + 2]);
    }
    if (x + 1 <= 7) {
      validMoves.push([x + 1, y + 2]);
      // queue.enqueue([x + 1, y + 2]);
    }
  }

  if (x + 2 <= 7) {
    if (y + 1 <= 7) {
      validMoves.push([x + 2, y + 1]);
      // queue.enqueue([x + 2, y + 1]);
    }
    if (y - 1 >= 0) {
      validMoves.push([x + 2, y - 1]);
      // queue.enqueue([x + 2, y - 1]);
    }
  }

  if (y - 2 <= 7) {
    if (x + 1 <= 7) {
      validMoves.push([x + 1, y - 2]);
      // queue.enqueue([x + 1, y - 2]);
    }
    if (x - 1 >= 0) {
      validMoves.push([x - 1, y - 2]);
      // queue.enqueue([x - 1, y - 2]);
    }
  }

  if (x - 2 >= 0) {
    if (y - 1 >= 0) {
      validMoves.push([x - 2, y - 1]);
      // queue.enqueue([x - 2, y - 1]);
    }
    if (y + 1 <= 7) {
      validMoves.push([x - 2, y + 1]);
      // queue.enqueue([x - 2, y + 1]);
    }
  }

  return validMoves;
  // return queue;
}

export function getPositionsToAvoid(queue) {
  let arr = Object.values(queue.items).map((item) => String(item));
  return arr;
}

export function knightMoves(start, end, visited = [String(start)], avoid = []) {
  let movesQueue = getValidMoves(start);
  // avoid = [...avoid, ...getPositionsToAvoid(movesQueue)];

  // if (avoid.includes(end)) {
  //   return end;
  // }

  let pathways = [];

  while (!movesQueue.isEmpty()) {
    let move = movesQueue.dequeue();
    avoid = [...avoid, ...getPositionsToAvoid(movesQueue)];
    if (avoid.includes(end)) {
      return end;
    }
    if (!avoid.includes(String(move))) {
      let path = [];
      let visitedNew = [...visited, String(move)];
      // visited.push(String(move));
      path.push(move);
      if (move[0] === end[0] && move[1] === end[1]) {
        return path;
      }
      let nextMove = knightMoves(move, end, visitedNew, avoid);
      if (nextMove) {
        pathways.push([...path, ...nextMove]);
      }
      // visited = [String(move)];
    }
  }
  let shortestPath;
  if (pathways.length) {
    shortestPath = pathways.reduce((acc, curr) => {
      if (acc.length <= curr.length) {
        return acc;
      } else {
        return curr;
      }
    });
  }

  return shortestPath;
  // return visited;
}
