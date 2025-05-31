// Twitch auto chest clicker

function twitchChestAutoClicker() {
  // Query the chest with the path attribute
  var path = document.querySelector("path[d=\"M2 6v11h16V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm10-1H8v2h4V5Zm2 0v2h2V6a1 1 0 0 0-1-1h-1ZM4 9v6h12V9H4Zm1-4h1v2H4V6a1 1 0 0 1 1-1Z\"]");

  // If chest is present in dom, click on it
  if (path) {
    path.ownerSVGElement.parentNode.click()
  }

  // Run this function once every 3 seconds
  window.setTimeout(twitchChestAutoClicker, 3 * 1000);
}

twitchChestAutoClicker();
