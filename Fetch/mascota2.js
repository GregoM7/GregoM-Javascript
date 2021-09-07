const readline = require("readline");
const mascota = require(__dirname + "/tamagochi")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.setPrompt('comer: c, status: s > ');
rl.prompt();

rl.on("line", function (line) {
  //setInterval( .... mascota.vivir()  ..... )

  switch (line.trim()) {
    case 's':
      console.log(mascota.status());
      break;
    case 'c':
      mascota.comer();
      break;
    case 'v':
      mascota.vivir();
      break;
    default:
      console.log('Say what? I might have heard `' + line.trim() + '`');
      rl.close();
      break;
  }
  rl.prompt();
}).on('close', function () {
  console.log('Have a great day!');
  process.exit(0);
});