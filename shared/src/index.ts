export function createGreeting(name: string = "world"): string {
  return `FANCY GREETER: hello, ${name}!`;
}

export function createRepeater(input: string): string {
  return `REPEATER: I repeat what you say... "${input}"`;
}

export function createUppercase(input: string): string {
  return `UPPERCASE: ${input.toUpperCase()}`;
}
