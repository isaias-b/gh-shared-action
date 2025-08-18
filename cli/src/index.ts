#!/usr/bin/env node

import { Command } from "commander";
import { createGreeting, createRepeater } from "shared";

const program = new Command();

program
  .name("greet")
  .description("Simple greeting CLI")
  .version("0.0.1");

program
  .command("hello")
  .description("Say hello to someone")
  .argument("[name]", "name to greet", "world")
  .action((name: string) => {
    const greeting = createGreeting(name);
    console.log(greeting);
  });

program
  .command("repeat")
  .description("Repeat what you say")
  .argument("<input>", "text to repeat")
  .action((input: string) => {
    const repeated = createRepeater(input);
    console.log(repeated);
  });

program.parse();
