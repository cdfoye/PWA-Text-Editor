const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //store the event
  window.deferredPrompt = event;
  //   removes the 'hidden' class from the button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  // store event, or return if no event
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  //   show the prompt
  promptEvent.prompt();

  //   reset deferred prompt variable
  window.deferredPrompt = null;

  //   add hidden class to the button
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // clear the prompt
  window.deferredPrompt = null;
});
