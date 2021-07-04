

const Check = (palyerArr) => {
    const gameArr = [
      [1, 2, 3], [4, 5, 6],
      [7, 8, 9], [1, 4, 7],
      [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]
    ]
    first: for (const arr of gameArr) {
      for (const item of arr) {
        if (!(palyerArr.includes(item))) {
          continue first
        }
      }
      return true;
    }
    return false;
}

export default Check;