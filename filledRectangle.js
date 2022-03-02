const lineOfPattern = function(count, symbol) {
  return symbol.repeat(count);
}

const filledRectangle = function(height, width) {
  let pattern = "";
  for (i = height; i > 0 && width !== 0; i--){
    pattern = pattern + lineOfPattern(width, "*") + "\n";
  }
  return pattern;
}

const main = function() {
  const height = 3;
  const width = 0;
  console.log(filledRectangle(height, width));
}

main();