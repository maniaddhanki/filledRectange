const lineOfPattern = function (count, symbol) {
  return symbol.repeat(count);
}

const filledRectangle = function (height, width) {
  let pattern = "";
  for (i = 1; i <= height;i++){
    pattern = pattern + lineOfPattern(width, "*") + "\n";
  }
  return pattern;
}

const main = function () {
  const height = 15;
  const width = 4;
  console.log(filledRectangle(height, width));
}

main();