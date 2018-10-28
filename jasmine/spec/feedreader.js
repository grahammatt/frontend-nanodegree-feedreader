 /*jshint esversion: 6*/
 /* feedreader.js
  *
  * This is the spec file that Jasmine will read and contains
  * all of the tests that will be run against your application.
  */

 /* We're placing all of our tests within the $() function,
  * since some of these tests may require DOM elements. We want
  * to ensure they don't run until the DOM is ready.
  */

 $(function() {
   /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   describe('RSS Feeds', () => {
     /* This is our first test - it tests to make sure that the
      * allFeeds variable has been defined and that it is not
      * empty. Experiment with this before you get started on
      * the rest of this project. What happens when you change
      * allFeeds in app.js to be an empty array and refresh the
      * page?
      */
     it('are defined', () => {
       expect(allFeeds).toBeDefined();
       expect(allFeeds.length).not.toBe(0);
     });


     /* TODO: Write a test that loops through each feed
      * in the allFeeds object and ensures it has a URL defined
      * and that the URL is not empty.
      */
     it('feed URLs are deffined and not empty', () => {
       for (let feed of allFeeds) { //for each feed
         expect(feed.url).toBeDefined(); //url is defined
         expect(feed.url.length).not.toBe(0); //url is not empty
       }
     });

     /* TODO: Write a test that loops through each feed
      * in the allFeeds object and ensures it has a name defined
      * and that the name is not empty.
      */
     it('feed names are deffined and not empty', () => {
       for (let feed of allFeeds) { //for each feed
         expect(feed.name).toBeDefined(); //name is defined
         expect(feed.name.length).not.toBe(0); //name isnt empty
       }
     });

   });

   /* TODO: Write a new test suite named "The menu" */
   describe('The Menu', () => {

     /* TODO: Write a test that ensures the menu element is
      * hidden by default. You'll have to analyze the HTML and
      * the CSS to determine how we're performing the
      * hiding/showing of the menu element.
      */

     it('is hidden by default', () => {
       //the body element should initially have the class menu-hidden
       expect($('body').hasClass('menu-hidden')).toBe(true);
     });
     /* TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
     it('changes visibility when the menu icon is clicked', () => {
       //setting a boolean value for the initial state of the Menu
       //this way the spec will still be accurate if the manu is not hidden by default
       let hidden = ($('body').hasClass('menu-hidden') ? true : false);
       //trigger click
       $('.menu-icon-link').trigger('click');
       //the menu should change classes when clicked
       expect($('body').hasClass('menu-hidden')).not.toBe(hidden);
       //trigger click
       $('.menu-icon-link').trigger('click');
       //the menu should revert back to initial class
       expect($('body').hasClass('menu-hidden')).toBe(hidden);
     });
   });
   /* TODO: Write a new test suite named "Initial Entries" */
   describe('Initial Entries', () => {
     /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */
     beforeEach(done => {
       try {
         //PASS DONE AS CALLBACK FUNCTION
         loadFeed(0, done);
       } catch (e) {
         //throw error if something goes wrong while loading the feed
         console.log(e);
         done.fail(e);
       }
     });
     //runs only after done is called in beforeEach
     it('contains at least a single entry within the feed', () => {
       //if there are any elements with the 'entry' class than $('.entry') will have a length greater than 0
       expect($(".feed .entry").length).toBeGreaterThan(0);
     });
   });

   /* TODO: Write a new test suite named "New Feed Selection" */

   describe('New Feed Selection', () => {
     /* TODO: Write a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */
     //instantiate variable to hold the values of a feeds markup
     let feedOne,
       feedTwo;
     beforeEach(done => {
       try {
         //loading the first feed and passing a callback
         loadFeed(0, () => {
           //set the first feeds markup to a variable
           feedOne = $(".feed").html();
           //load second feed and pass a callback
           loadFeed(1, () => {
             //set the second feeds markup to a variable
             feedTwo = $(".feed").html();
             //call done so the tests can begin
             done();
           });
         });
       } catch (e) {
         //throw error if something goes wrong while loading the feeds
         console.log(e);
         done().fail(e);
       }
     });

     it('Content changes', () => {
       //for testing purposes
       console.log(feedOne);
       console.log(feedTwo);
       //if the content changes and the loadFeed functions run succesfully
       // then the variables should not be equal.
       // if there are duplicates within allFeeds this will also fail.
       expect(feedOne == feedTwo).not.toBe(true);
     });
   });
 }());