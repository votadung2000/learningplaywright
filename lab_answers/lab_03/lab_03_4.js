const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const merged = [];

const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;
let mergedPosition = 0;

while (fooPosition < fooLength && barPosition < barLength){
  const fooValue = foo[fooPosition];
  const barValue = bar[barPosition];
  if (fooValue <= barValue) {
    merged[mergedPosition] = fooValue;
    fooPosition++;
  } else {
    merged[mergedPosition] = barValue;
    barPosition++;
  }
  mergedPosition++;
}
while (fooPosition < fooLength) {
  merged[mergedPosition] = foo[fooPosition];
  fooPosition++;
  mergedPosition++;
}
while (barPosition < barLength) {
  merged[mergedPosition] = bar[barPosition];
  barPosition++;
  mergedPosition++;
}

console.log(merged);