import { Queue } from "./queue.js";

export function getValidMoves(startVertex) {
  let queue = new Queue();
  // let validMoves = [];
  let x = startVertex[0];
  let y = startVertex[1];

  if (x + 2 <= 7) {
    if (y + 1 <= 7) {
      // validMoves.push([x + 2, y + 1]);
      queue.enqueue([x + 2, y + 1]);
    }
    if (y - 1 >= 0) {
      // validMoves.push([x + 2, y - 1]);
      queue.enqueue([x + 2, y - 1]);
    }
  }

  if (x - 2 >= 0) {
    if (y + 1 <= 7) {
      // validMoves.push([x - 2, y + 1]);
      queue.enqueue([x - 2, y + 1]);
    }
    if (y - 1 >= 0) {
      // validMoves.push([x - 2, y - 1]);
      queue.enqueue([x - 2, y - 1]);
    }
  }

  if (y + 2 <= 7) {
    if (x + 1 <= 7) {
      // validMoves.push([x + 1, y + 2]);
      queue.enqueue([x + 1, y + 2]);
    }
    if (x - 1 >= 0) {
      // validMoves.push([x - 1, y + 2]);
      queue.enqueue([x - 1, y + 2]);
    }
  }

  if (y - 2 <= 7) {
    if (x + 1 <= 7) {
      // validMoves.push([x + 1, y - 2]);
      queue.enqueue([x + 1, y - 2]);
    }
    if (x - 1 >= 0) {
      // validMoves.push([x - 1, y - 2]);
      queue.enqueue([x - 1, y - 2]);
    }
  }

  // return validMoves;
  return queue;
}

export function knightMoves(start, end, visited = []) {
  let validMoves = getValidMoves(start);

  let paths = [];

  // if (start[0] === end[0] && start[1] === end[1]) {
  //   visited.push(start);
  //   return visited;
  // }

  while (!validMoves.isEmpty()) {
    let move = validMoves.dequeue();
    if (!visited.includes(String(move))) {
      let path = [];
      // paths.push(path);
      visited.push(String(move));
      path.push(move);
      if (move[0] === end[0] && move[1] === end[1]) {
        return path;
      }
      let nextMoves = knightMoves(move, end, visited);
      path = [...path, ...nextMoves];
      // paths.push(path);
      // visited = [];
      return path;
    }
  }

  return paths;
  // return visited;
}
