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

  if (y - 2 >= 0) {
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

function getMovesQueue(validMoves, avoidList) {
  let queue = new Queue();

  validMoves.forEach((validMove) => {
    if (!avoidList.includes(String(validMove))) {
      queue.enqueue(validMove);
    }
  });

  return queue;
}

// export function getPositionsToAvoid(queue) {
//   let arr = Object.values(queue.items).map((item) => String(item));
//   return arr;
// }params

// function getNextMoves(queue) {
//   let arr = Object.values(queue.items).map((item) => String(item));
//   return arr;
// }

function getArrItems(queue) {
  let arr = Object.values(queue.items).map((item) => String(item));
  return arr;
}

export function knightMoves(start, end, skip = [String(start)]) {
  if (skip.includes(String(end))) {
    return end;
  }

  let pathways = [];

  let movesQueue = getMovesQueue(getValidMoves(start), skip);

  while (!movesQueue.isEmpty()) {
    let move = movesQueue.dequeue();

    let path = [];

    path.push(start);

    let skipList = [...skip, ...[String(move)], ...getArrItems(movesQueue)];

    let nextPath = knightMoves(move, end, skipList);

    if (nextPath) {
      path.push(nextPath);
      pathways.push(path);
    }
  }

  if (pathways.length) {
    let shortestPath;
    shortestPath = pathways.reduce((acc, curr) => {
      if (acc.length <= curr.length) {
        return acc;
      } else {
        return curr;
      }
    });

    return shortestPath;
  }
}

// export function knightMoves(start, end, visited = [String(start)], avoid = []) {
//   let movesQueue = getMovesQueue(getValidMoves(start), avoid);

//   let pathways = [];

//   while (!movesQueue.isEmpty()) {
//     let move = movesQueue.dequeue();
//     let avoidNew = [...avoid, ...getPositionsToAvoid(movesQueue)];
//     if (avoidNew.includes(end)) {
//       return end;
//     }
//     if (!avoidNew.includes(String(move))) {
//       let path = [];
//       let visitedNew = [...visited, String(move)];
//       path.push(move);
//       if (move[0] === end[0] && move[1] === end[1]) {
//         return path;
//       }
//       let nextMove = knightMoves(move, end, visitedNew, avoidNew);
//       if (nextMove) {
//         pathways.push([...path, ...nextMove]);
//       }
//     }
//   }
//   let shortestPath;
//   if (pathways.length) {
//     shortestPath = pathways.reduce((acc, curr) => {
//       if (acc.length <= curr.length) {
//         return acc;
//       } else {
//         return curr;
//       }
//     });
//   }

//   return shortestPath;
// }
