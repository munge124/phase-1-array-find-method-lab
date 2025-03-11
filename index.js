// code your solution here

function superbowlWin(record) {
    const win = record.find(game => game.result === "W"); // Use find to locate a win
    return win ? win.year : undefined; // If win is found, return the year, else return undefined
  }
  
