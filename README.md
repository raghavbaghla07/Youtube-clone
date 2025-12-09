# step 1: Requirement clarifications (5 mins)

-> Features
-> Tech stack: (Proper justification for why we are choosing every damn thing)

1. with react we will use tailwind to customize the application.
2. Typescript or javascript?
3. Redux or contextAPIs?
4. if our app use forms. (we will be using formic or other library.)
5. react-router-dom for routing
6. what Bundler are we choosing?
7. jest for testing

# step 2: Planning (5-7 mins)

1. Header
   -> hamburger icon to open the side pannel.
   -> YouTube logo
   -> search bar
   -> user icon
2. Side panel.
   ->Home
   ->shorts
   ->subscription
   ->playlist.
3. Body.
   -> Button list
   -> video container
   -> video card
   -> video page
   if we click on video: we will go to a new page
4. /watch
   -> Header
   -> ViewVideo component
   -> comments
   -> Recommendation

when we click on hamburger menu => An action is dispatched which calls the reducer function.
which modifies the slice of our redux store, and our sidebar menu component has subscribed to our redux store

and it automagically updates
