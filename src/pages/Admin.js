import React from 'react';

console.log(`
    CONGRATULATIONS! You found the 3rd of 8 easter eggs in our scavenger hunt!

    Web developers are pretty lazy sometimes, and we sometimes forget to take out 
    messages that help us debug our code.

    For example...
`);

class Admin extends React.Component {
    state = {
        authenticated: false
    }

    componentDidMount() {
        const url = new URL(window.location);

        if (!url.searchParams.has('authenticated')) {
            window.location = '/admin?authenticated=false';
        } else if (url.searchParams.get('authenticated') === 'true') {
            this.setState({
                authenticated: true
            });
        } else {
            console.log('What happens if we change the URL parameter "authenticated" to true...');
        }
    }

    easterEgg2() {
        return (
            <div>
                <h1>Admin Page?</h1>

                <p>
                    CONGRATULATIONS! You found the 2nd of 8 easter eggs in our scavenger hunt!
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
    }

    easterEgg4() {
        return (
            <div>
                <h1>Admin Page!!!</h1>

                <p>
                    CONGRATULATIONS! You found the 4th of 8 easter eggs in our scavenger hunt!
                </p>

                <p>
                    The query string params...
                </p>

                <p>
                    Also known as priviledge escalation...
                </p>

                <p>
                    From here you'll be able to see <a href="/hidden.html">other pages</a> in the application you hadn't known about.
                </p>
            </div>
        );
    }

    render() {
        const { authenticated } = this.state;

        return (
            <>
                {authenticated ? this.easterEgg4() : this.easterEgg2()}
            </>
        );
    }
}

export default Admin;