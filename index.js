function clear() {
  process.stdout.write('\033[2J');
  process.stdout.write('\033[0f');
}
module.exports = clear;

if (require.main === module) {
  clear();
}
