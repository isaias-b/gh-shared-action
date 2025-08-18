import * as core from "@actions/core";
import { createGreeting, createRepeater } from "shared";

async function run() {
  try {
    const repeatInput = core.getInput("repeat");
    
    if (repeatInput) {
      // Use repeater mode
      const repeated = createRepeater(repeatInput);
      core.info(repeated);
      core.setOutput("repeated", repeated);
    } else {
      // Use greeter mode (default)
      const name = core.getInput("name") || "world";
      const greeting = createGreeting(name);
      core.info(greeting);
      core.setOutput("greeting", greeting);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    core.setFailed(msg);
  }
}

run();
