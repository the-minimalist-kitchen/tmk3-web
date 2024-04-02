addEventListener("DOMContentLoaded", () => {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("registered /sw.js", reg))
    // chain progressive feature load
    // then load resources
    .catch((err) => console.log("failed to register /sw.js", err));
});
