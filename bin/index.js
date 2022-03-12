"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const github = require("@actions/github");
try {
    // `who-to-greet` input defined in action metadata file


    console.log(`Publish chart for ${inputs.owner}/${inputs.repo} with tag ${inputs.ref}`);

    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);
    
    const time = (new Date()).toTimeString();

}
catch (error) {
    console.log("Ne radi");
    core.setFailed(error);
}
//# sourceMappingURL=index.js.map