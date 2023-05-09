let size = 8;
let row = 0;
for (let i = 1; i <= size; i++) {
  row += 1;
  let line = '';
  for (let j = 1; j <= size; j++) {
    if (row % 2 === 0) {
      if (j % 2 === 0) {
        line += '#';
      } else {
        line += ' ';
      }
    } else {
      if (j % 2 === 0) {
        line += ' ';
      } else {
        line += '#';
      }
    }
  }
  console.log(line);
}

// strighterline
// study.com
// math 103 pre
// math 104
// discrete math 1
// sophia
// calc 1
