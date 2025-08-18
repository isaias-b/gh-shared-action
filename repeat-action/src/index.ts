import * as core from "@actions/core";
import { createRepeater } from "../../shared/src";

async function run() {
  try {
    const message = core.getInput("message");
    if (!message) {
      throw new Error("Message input is required");
    }
    
    const repeated = createRepeater(message);
    core.info(repeated);
    core.setOutput("repeated", repeated);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    core.setFailed(msg);
  }
}

run();
