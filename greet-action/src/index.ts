import * as core from "@actions/core";
import { createGreeting } from "../../shared/src";

async function run() {
  try {
    const name = core.getInput("name") || "world";
    const greeting = createGreeting(name);
    core.info(greeting);
    core.setOutput("greeting", greeting);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    core.setFailed(msg);
  }
}

run();
