"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const config = require("./config.json");
try {
    // `who-to-greet` input defined in action metadata file
    const inputs = {
        owner: core.getInput('owner'),
        repo: core.getInput('repo'),
        ref: core.getInput('ref')
    };
    if (config.sources[0].owner == inputs.owner &&
        config.sources[0].repo == inputs.repo &&
        config.sources[0].refs[0].ref == `refs/heads/${inputs.ref}`) {
        console.log(`${inputs.owner} exist in source config`);
        console.log(`${JSON.stringify(config.sources[0])}`);
    }
    console.log(`Publish chart for ${inputs.owner}/${inputs.repo} with tag ${inputs.ref}`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);
}
catch (error) {
    console.log("Ne radi");
    core.setFailed(error);
}
//# sourceMappingURL=index.js.map