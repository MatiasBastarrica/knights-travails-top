export function getValidMoves(startVertex) {
  let validMoves = [];
  let x = startVertex[0];
  let y = startVertex[1];

  if (x + 2 <= 7) {
    if (y + 1 <= 7) {
      validMoves.push([x + 2, y + 1]);
    }
    if (y - 1 >= 0) {
      validMoves.push([x + 2, y - 1]);
    }
  }

  if (x - 2 >= 0) {
    if (y + 1 <= 7) {
      validMoves.push([x - 2, y + 1]);
    }
    if (y - 1 >= 0) {
      validMoves.push([x - 2, y - 1]);
    }
  }

  if (y + 2 <= 7) {
    if (x + 1 <= 7) {
      validMoves.push([x + 1, y + 2]);
    }
    if (x - 1 >= 0) {
      validMoves.push([x - 1, y + 2]);
    }
  }

  if (y - 2 <= 7) {
    if (x + 1 <= 7) {
      validMoves.push([x + 1, y - 2]);
    }
    if (x - 1 >= 0) {
      validMoves.push([x - 1, y - 2]);
    }
  }
}
