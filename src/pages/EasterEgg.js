import React from 'react';

window.localStorage.setItem('egg7', `
    CONGRATULATIONS! You found the 7th of 10 easter eggs in our scavenger hunt!

    LocalStorage is one of a number of places a developer might choose to store some application data. These values
    are normally injected somewhere in the user interface or used in the business logic for the application.

    An attacker might try to compromise these values...

    ...try looking in DevTools to inspect the cookies used by this application!
`);

const EasterEgg = () => (
    <div>
        <h1>Another Hidden Page!</h1>

        <p>
            CONGRATULATIONS! You found the 5th of 10 easter eggs in our scavenger hunt!
        </p>

        <p>
            Once again, we find that web developers can be very careless. Modern web applications
            like this one (built with lots of JavaScript) have a hard time concealing links to pages that
            should only be visible to authenticated/authorized users.
        </p>

        <p>
            The root of the problem is that the user interface is constructed at runtime -- and the process of
            "code splitting" based on user roles/permissions is complicated. Therefore many developers
            simply don't do it.
        </p>

        <p>
            If you still have your DevTools open, check out the HTTP headers...
        </p>
    </div>
);

export default EasterEgg;