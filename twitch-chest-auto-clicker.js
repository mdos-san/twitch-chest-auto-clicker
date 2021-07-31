// Twitch auto chest clicker

function twitchChestAutoClicker() {
	// Query the chest with the path attribute
  var path = document.querySelector("path[d=\"M16.503 3.257L18 7v11H2V7l1.497-3.743A2 2 0 015.354 2h9.292a2 2 0 011.857 1.257zM5.354 4h9.292l1.2 3H4.154l1.2-3zM4 9v7h12V9h-3v4H7V9H4zm7 0v2H9V9h2z\"]");

	// If chest is present in dom, click on it
  if (path) {
    path.ownerSVGElement.parentNode.click()
  }

	// Run this function once every 3 seconds
  window.setTimeout(twitchChestAutoClicker, 3 * 1000);
}

twitchChestAutoClicker();
