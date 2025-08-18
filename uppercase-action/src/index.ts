import * as core from "@actions/core";
import { createUppercase } from "../../shared/src";

async function run() {
  try {
    const message = core.getInput("message");
    if (!message) {
      throw new Error("Message input is required");
    }
    
    const uppercase = createUppercase(message);
    core.info(uppercase);
    core.setOutput("uppercase", uppercase);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    core.setFailed(msg);
  }
}

run();
