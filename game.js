// Score 64 (simple game):
// const frames = [
//   [2, 0],
//   [4, 2],
//   [6, 0],
//   [2, 4],
//   [1, 5],
//   [7, 0],
//   [5, 2],
//   [7, 0],
//   [2, 6],
//   [8, 1],
// ]

function scoreFrame(frame) {
  return frame[0] + frame[1];
}

// function totalScore(framesArray) {
//   let total = 0
//   for (let i = 0; i < framesArray.length; i++) {
//     total += scoreFrame(framesArray[i])
//   }
//   return total
// }

// function returnFrameScoresArray(framesArray) {
//   const finalArray = []
//   for (let i = 0; i < framesArray.length; i++) {
//     finalArray.push(scoreFrame(framesArray[i]))
//   }
//   return finalArray
// }

// const total = returnFrameScoresArray(frames).reduce((acc, cur) => {
//   return acc + cur
// }, 0)

// ---------------------------------------------------------------------------------

// Score 71 (with spares):
// const frames = [
//   [6, 1],
//   [4, 0],
//   [6, 4],
//   [2, 7],
//   [3, 5],
//   [5, 0],
//   [5, 5],
//   [0, 0],
//   [1, 6],
//   [7, 2],
// ]

// PSEUDOCODE
// create a total variable
// loop through all the frames
// if scoreFrame === 10, add the next frame index 0 to the total
// run scoreFrame for everyframe
// return total

// function totalScore(framesArray) {
//   let total = 0
//   for (let i = 0; i < framesArray.length; i++) {
//     if (scoreFrame(framesArray[i]) === 10) {
//       total += scoreFrame(framesArray[i]) + framesArray[i + 1][0]
//     } else {
//       total += scoreFrame(framesArray[i])
//     }
//   }
//   return total
// }

// ---------------------------------------------------------------------------------

// Score 104 (with spares and strikes):
// const frames = [
//   [6, 4],
//   [8, 0],
//   [10, 0],
//   [2, 7],
//   [5, 5],
//   [4, 0],
//   [10, 0],
//   [2, 1],
//   [2, 6],
//   [4, 4],
// ]

// PSEUDOCODE
// create a total variable
// loop through all the frames
// if frames[i][0] === 10, add the next frame scoreFrame (which are the next 2 balls) to the total
// if scoreframe[i] === 10, add the next ball point to the total
// else scoreframe
// return total

// function totalScore(framesArray) {
//   let total = 0
//   for (let i = 0; i < framesArray.length; i++) {
//     if (framesArray[i][0] === 10) {
//       total += 10 + scoreFrame(framesArray[i + 1])
//     } else if (scoreFrame(framesArray[i]) === 10) {
//       total += scoreFrame(framesArray[i]) + framesArray[i + 1][0]
//     } else {
//       total += scoreFrame(framesArray[i])
//     }
//   }
//   return total
// }

// ---------------------------------------------------------------------------------

// Score 119 (with spares, strikes and a double strike):
// const frames = [
//   [1, 2],
//   [6, 4],
//   [5, 4],
//   [10, 0],
//   [7, 2],
//   [10, 0],
//   [10, 0],
//   [5, 2],
//   [7, 0],
//   [4, 4],
// ]

// function totalScore(framesArray) {
//   let total = 0
//   for (let i = 0; i < framesArray.length; i++) {
//     if (framesArray[i][0] === 10 && framesArray[i + 1][0] === 10) {
//       total += 20 + framesArray[i + 2][0]
//     } else if (framesArray[i][0] === 10) {
//       total += 10 + scoreFrame(framesArray[i + 1])
//     } else if (scoreFrame(framesArray[i]) === 10) {
//       total += scoreFrame(framesArray[i]) + framesArray[i + 1][0]
//     } else {
//       total += scoreFrame(framesArray[i])
//     }
//   }
//   return total
// }

// console.log(totalScore(frames))

// ---------------------------------------------------------------------------------

// Score 141 (includes a strike on the last frame):
const frames = [
  [1, 2],
  [6, 4],
  [5, 4],
  [10, 0],
  [7, 2],
  [10, 0],
  [10, 0],
  [5, 2],
  [7, 0],
  [10, 10, 10],
];

// PSEUDOCODE
// create a total variable
// loop through all the frames
// if frames[i][0] = 10 AND frames[i][1] = 10 AND frames[i][2] = 10, add 30 to the frame
// if frames[i][0] = 10 AND frames[i+1][0] = 10, add 20 + the first ball of frame[i + 2]
// if frames[i][0] = 10, add 10 + scoreFrame(frame[i+1])
// if scoreFrame(frame[i]) = 10, add frame[i+1][0]
// else scoreFrame
// return total

function totalScore(framesArray) {
  let total = 0;
  for (let i = 0; i < framesArray.length; i++) {
    // 3 strikes in a row (last frame)
    if (
      framesArray[i][0] === 10 &&
      framesArray[i][1] === 10 &&
      framesArray[i][2] === 10
    ) {
      total += 30;
      // 2 strikes in a row
    } else if (framesArray[i][0] === 10 && framesArray[i + 1][0] === 10) {
      total += 20 + framesArray[i + 2][0];
      // 1 strike
    } else if (framesArray[i][0] === 10) {
      total += 10 + scoreFrame(framesArray[i + 1]);
      // spare
    } else if (scoreFrame(framesArray[i]) === 10) {
      total += 10 + framesArray[i + 1][0];
    } else {
      total += scoreFrame(framesArray[i]);
    }
  }
  return total;
}

console.log(totalScore(frames));

// ---------------------------------------------------------------------------------

// ***** Still work in progress on this challenge

// Score 300 (perfect game):
// const frames = [
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 0],
//   [10, 10, 10],
// ]

// PSEUDOCODE
// create a total variable
// loop through the array
// if frame[i][0] = 10 AND frame[i][1] = 10 AND frame[i][2] = 10, add 30 to the frame
// if frame[i][0] = 10 AND frame[i+1][0] = 10, add 20 plus frame[i+2][0]

// function totalScore(framesArray) {
//   let total = 0
//   for (let i = 0; i < framesArray.length; i++) {
//     if (
//       framesArray[i][0] === 10 &&
//       framesArray[i][1] === 10 &&
//       framesArray[i][2] === 10
//     ) {
//       total += 30
//     } else {
//       total += 10 + framesArray[i + 1][0] + framesArray[i + 2][0]
//     }
//   }
//   return total
// }

// console.log(totalScore(frames))
