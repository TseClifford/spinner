const lines = ['|', '/', '-', '\\'];

const spinner = totalSpins => {
  let time = 100;
  for (let spins = 0; spins < totalSpins; spins++) {
    for (let i = 0; i < lines.length; i++) {
      setTimeout(() => {
        process.stdout.write(`\r${lines[i]}   `);
      }, time);
      time += 200;
    }
  }
  // Reset to initial state and force new line
  setTimeout(() => {
    process.stdout.write(`\r|   \n`);
  }, time);
};

spinner(3);