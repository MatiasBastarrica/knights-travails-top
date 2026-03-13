import { getValidMoves, knightMoves, getPositionsToAvoid } from "./knight.js";

// console.log(getValidMoves([3, 3]));
// console.log(getValidMoves([4, 5]));
// console.log(getValidMoves([2, 4]));

// console.log(knightMoves([3, 3], [3, 6]));
console.log(getPositionsToAvoid(getValidMoves([3, 3])));
