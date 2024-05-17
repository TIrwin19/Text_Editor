const butInstall = document.getElementById('buttonInstall')
let deferredPrompt
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault()
  // Stash the event so it can be triggered later
  deferredPrompt = event
  // Update UI to notify the user they can add to home screen
  butInstall.style.display = 'block'
})

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none'
  // Show the prompt
  deferredPrompt.prompt()
  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice
  // Handle the result if needed
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the install prompt')
  } else {
    console.log('User dismissed the install prompt')
  }
})

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', () => {
  // Log when the app is successfully installed
  console.log('App installed successfully')
})