// src/index.ts
function createGreeting(name = "world") {
  return `FANCY GREETER: hello, ${name}!`;
}
function createRepeater(input) {
  return `REPEATER: I repeat what you say... "${input}"`;
}
export {
  createRepeater,
  createGreeting
};
