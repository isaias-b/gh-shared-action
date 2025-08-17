// src/index.ts
function createGreeting(name = "world") {
  return `FANCY GREETER: hello, ${name}!`;
}
export {
  createGreeting
};
