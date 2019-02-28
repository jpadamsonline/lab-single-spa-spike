import { registerApplication, start } from 'single-spa';

registerApplication("cool-app", loadCoolApp, isCoolAppActive);
registerApplication("warm-app", loadWarmApp, isWarmAppActive);
registerApplication(
    "root", function loadRoot() {
        return import("./root-app.js");
    },
    (location) => location.hash.endsWith('#/')
);
start();


function isWarmAppActive() {
    return window.location.hash.startsWith("#/warm");
}
function loadWarmApp() {
    return import("../warm-app/warm.app.js");
}

function isWarmAppActive() {
    return window.location.hash.startsWith("#/warm");
}

function loadCoolApp() {
    return import("../cool-app/cool.app.js");
}

function isCoolAppActive() {
    return window.location.hash.startsWith("#/cool") ||window.location.hash.startsWith("/")
}
