let fs = require("fs");

try {
  let code = fs.readFileSync("gravity.js", "utf8");
  // console.log(code);

  let codelines = code
    .replace(/"/g, "\\\"")
    .split("\n")
    .map((codeline) => {
      return '"' + codeline.replace("\r", "") + '"';
    })
    .join(",\n");

  console.log(codelines);

  fs.writeFileSync("out.js", codelines);
} catch (e) {
  console.error("Error: ", e.stack);
}
