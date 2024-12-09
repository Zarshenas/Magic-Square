function magicSquare(n) {
  if (n % 2 === 0) {
    return console.log("Even Number");
  }
  const limit = n ** 2;
  let tempPosition = [];
  let nextTempPosition = [];

  const array = [];
  for (let i = 0; i < n; i++) {
    array.push([]);
    for (let j = 0; j < n; j++) {
      array[i].push(0);
    }
  }

  const middleFirstRowIndex = (0 + array[0].length - 1) / 2;
  array[0][middleFirstRowIndex] = 1;
  tempPosition.push(0);
  tempPosition.push(middleFirstRowIndex);

  for (let i = 1; i < limit; i++) {
    nextTempPosition = [...tempPosition];
    if (nextTempPosition[0] === 0) {
      nextTempPosition[0] = array.length - 1;
    } else {
      nextTempPosition[0] -= 1;
    }
    if (nextTempPosition[1] === 0) {
      nextTempPosition[1] = array.length - 1;
    } else {
      nextTempPosition[1] -= 1;
    }
    if (array[nextTempPosition[0]][nextTempPosition[1]] !== 0) {
      tempPosition[0] += 1;
      array[tempPosition[0]][tempPosition[1]] = i + 1;
    } else {
      array[nextTempPosition[0]][nextTempPosition[1]] = i + 1;
      tempPosition = [...nextTempPosition];
    }
  }
  console.table(array);
}

magicSquare(3);