import * as core from "@actions/core";
import { createGreeting, createRepeater, createUppercase } from "shared";

async function run() {
  try {
    const action = core.getInput("action") || "greet";
    const legacyRepeatInput = core.getInput("repeat");
    
    // Handle legacy backward compatibility
    if (legacyRepeatInput && action === "greet") {
      core.warning("Using deprecated 'repeat' input. Please use 'action: repeat' and 'message' instead.");
      const repeated = createRepeater(legacyRepeatInput);
      core.info(repeated);
      core.setOutput("repeated", repeated);
      return;
    }
    
    switch (action.toLowerCase()) {
      case "greet": {
        const name = core.getInput("name") || "world";
        const greeting = createGreeting(name);
        core.info(greeting);
        core.setOutput("greeting", greeting);
        break;
      }
      
      case "repeat": {
        const message = core.getInput("message");
        if (!message) {
          throw new Error("Message input is required when action is 'repeat'");
        }
        const repeated = createRepeater(message);
        core.info(repeated);
        core.setOutput("repeated", repeated);
        break;
      }
      
      case "uppercase": {
        const message = core.getInput("message");
        if (!message) {
          throw new Error("Message input is required when action is 'uppercase'");
        }
        const uppercase = createUppercase(message);
        core.info(uppercase);
        core.setOutput("uppercase", uppercase);
        break;
      }
      
      default:
        throw new Error(`Unknown action: ${action}. Supported actions: greet, repeat, uppercase`);
    }
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    core.setFailed(msg);
  }
}

run();
