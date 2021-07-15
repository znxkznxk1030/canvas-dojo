let fs = require('fs');

try {
  let code = fs.readFileSync('in.txt', 'utf8');
  // console.log(code);

  let codelines = code.split("\n").map(codeline => {
    return "\"" + codeline.replace("\r","") + "\""
  }).join(",\n");

  console.log(codelines)

  fs.writeFileSync('out.txt', codelines)

} catch (e) {
  console.error('Error: ', e.stack);
}