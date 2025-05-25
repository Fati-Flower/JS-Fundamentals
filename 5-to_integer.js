

const arg = Number.parseInt(process.argv[2]);

if (!Number.isNaN(arg)) {
  console.log(`My number: ${arg}`);
} else {
  console.log('Not a number');
}
