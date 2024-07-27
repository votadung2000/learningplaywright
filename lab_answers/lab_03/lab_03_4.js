const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const merged = [];

const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;
let mergedPosition = 0;

for (; fooPosition < fooLength && barPosition < barLength; mergedPosition++){
  const fooValue = foo[fooPosition];
  const barValue = bar[barPosition];
  if (fooValue <= barValue) {
    merged[mergedPosition] = fooValue;
    fooPosition++;
  } else {
    merged[mergedPosition] = barValue;
    barPosition++;
  }
}

for (; fooPosition < fooLength; fooPosition++, mergedPosition++) {
  merged[mergedPosition] = foo[fooPosition];
}
for (; barPosition < barLength; barPosition++, mergedPosition++) {
  merged[mergedPosition] = bar[barPosition];
}

console.log(merged);