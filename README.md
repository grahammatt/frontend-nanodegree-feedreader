# Feed Reader Testing

This is a web-based application that reads RSS feeds forked from a Udacity Lesson for the Front End Web Developer Nanodegree. It includes a Jasmine Testing suite.

## Using Feed Reader

The pre-existing feed reader is simple to use. When you load the index.html file in the browser it uses AJAX to load the initial feed and then show it in the DOM. Clicking on a link will redirect you to that article. Clicking the menu button in the top left corner will hide/show a list of RSS Feeds. Clicking one of these links will hide the menu and replace the current feed with the one chosen.

## Testing

There are a total of 7 specs that run when you load the application. The results of testing will display at the bottom of the screen.  

The firs spec tests weather the allFeeds variable within the app.js file is defined and populated. Deleting this or instantiating it without any values will cause the test fail.

The second Spec checks that the url of each object in allFeeds is defined an populated. an object without a url key will fail or if that keys value is "" it will fail.

the third spec checks for the feeds name in the same way that the second spec tests the URL.

Spec 4 checks that the Menu is hidden when the page loads by making sure it is assigned the correct class. Spec 5 fires a click action on the menu button twice and checks that this class changes after each triggered click.

Spec 6 checks that the feed displays article entries when a feed is loaded. Running this application without an internet connection will cause this test to fail.

Spec 7 checks that the feed actually changes when another feed is loaded. This will also fail while offline.

