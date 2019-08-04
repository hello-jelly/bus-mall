Create an index.html for layout, a main.css for design, a tests.js to load tests in the browser, and an items.js that describes the proucts w/ an id, image, and name property. I'll also need a store.js to store the items in local.storage and an app.js to be scripted to the html.

PROCESS:

Reset user data when page loads

Get items, store in local storage
- items.js (set up items w/ id, image and name properties)
- store.js (bootstrap items in local storage)

Get Random Imgs X3 from Store: 
- Set up arrays for variables randomImgA, randomImgB, randomImgC

Display items side-by-side in browser
- remove hidden on random items generated

Set up tests for random items where they are not duplicating

Set up click function for items
- click should update display and add a turn

Track Clicks and # of Times Displayed for each item
- track number of sessions
- calculate % for number of times same img is clicked
- calculate number of times img is clicked

Upon click (user choice), 3 new non-duplicating items will auto display - 
** Cannot be duplicates from prior selections

Set up for 25 selections -- then hide imgs to prevent add'l voting

List products with resulting data: calculate number of times clicked, percentage of times clicked when shown
- chart results

** Each individual session should restart on each page load