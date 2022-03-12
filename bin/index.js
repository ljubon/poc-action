"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const github = require("@actions/github");
try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('ime');
    console.log(`Cao ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("Vreme", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);
}
catch (error) {
    console.log("Ne radi");
    core.setFailed(error);
}
//# sourceMappingURL=index.js.map