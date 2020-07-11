import React from 'react';

console.log(`
    CONGRATULATIONS! You found the 3rd of 10 easter eggs in our scavenger hunt!

    Web developers are pretty lazy sometimes, and we sometimes forget to take out messages that help us debug our code.

    What else can you see in these nifty DevTools?

    Hint #1: Look in the JS file for another hidden page.

    Hint #2: Still can't find it? 
`);

const Admin = () => (
    <div>
        <h1>Admin Page?</h1>

        <p>
            CONGRATULATIONS! You found the 2nd of 10 easter eggs in our scavenger hunt!
        </p>

        <p>
            It's a good thing this website doesn't actually have an open administrator's dashboard!
        </p>

        <p>
            The developer who wrote this app definitely didn't think anyone would look here,
            but that's why robots.txt can be such a problem for security.
        </p>

        <p>
            Next thing I'd probably do is open my browser's DevTools (show image?) and see what I can find...
        </p>

        <p>
            Hint #1: How to open DevTools in the browser...
        </p>

        <p>
            Hint #2: JS Console!
        </p>
    </div>
);

export default Admin;