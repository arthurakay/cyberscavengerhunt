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
            <div className="card mx-auto mt-2" style={{ width: '500px' }}>
                <div className="card-body">
                    <h1 className="card-title">
                        Admin Page?
                    </h1>

                    <h6 className="card-subtitle mb-2 text-muted">
                        CONGRATULATIONS!
                    </h6>

                    <h6 className="card-subtitle mb-2 text-muted">
                        You found the 2nd of 8 easter eggs in our scavenger hunt!
                    </h6>

                    <p className="card-text">
                        It's a good thing this website doesn't actually have an open administrator's dashboard!
                    </p>

                    <p className="card-text">
                        The developer who wrote this app definitely didn't think anyone would look here,
                        but that's why robots.txt can be such a problem for security.
                    </p>

                    <p className="card-text">
                        Normally an attacker would spend a lot more time enumerating pages on the website...
                        but this website doesn't have a whole lot more to it.
                    </p>

                    <p className="card-text">
                        The next thing an attacker would probably do is open their browser's DevTools
                        and see what's in there...
                    </p>

                    <button
                        className="btn btn-primary m-3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#hint1"
                        aria-expanded="false"
                        aria-controls="hint1"
                    >
                        Hint #1
                    </button>

                    <button
                        className="btn btn-primary m-3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#hint2"
                        aria-expanded="false"
                        aria-controls="hint2"
                    >
                        Hint #2
                    </button>

                    <div className="collapse" id="hint1">
                        <div className="card card-body m-3">
                            <h4 className="card-title">Hint #1</h4>

                            <p className="card-text">
                                Not familiar with your browser's DevTools? Try one of these links:
                            </p>

                            <ul>
                                <li><a href="https://developers.google.com/web/tools/chrome-devtools" target="_blank" rel="noopener noreferrer">DevTools in Google Chrome</a></li>
                                <li><a href="https://developer.mozilla.org/en-US/docs/Tools" target="_blank" rel="noopener noreferrer">DevTools in Mozilla Firefox</a></li>
                                <li><a href="https://developer.apple.com/safari/tools/" target="_blank" rel="noopener noreferrer">DevTools in Apple Safari</a></li>
                                <li><a href="https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide" target="_blank" rel="noopener noreferrer">DevTools in Microsoft Edge</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="collapse" id="hint2">
                        <div className="card card-body m-3">
                            <h4 className="card-title">Hint #2</h4>

                            <p className="card-text">
                                Once you have DevTools open in your browser, look for the JavaScript console...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    easterEgg4() {
        return (
            <div className="card mx-auto mt-2" style={{ width: '500px' }}>
                <div className="card-body">
                    <h1 className="card-title">
                        Admin Page!!!
                    </h1>

                    <h6 className="card-subtitle mb-2 text-muted">
                        CONGRATULATIONS!
                    </h6>

                    <h6 className="card-subtitle mb-2 text-muted">
                        You found the 4th of 8 easter eggs in our scavenger hunt!
                    </h6>

                    <p>
                        Query string params are one of the most common ways in which a web
                        application can be exploited.
                    </p>

                    <p>
                        In this case, we have executed an exploit generally known as
                        "privilege escalation" -- meaning we were able to trick the
                        application into thinking we have permissions (and the application
                        never double-checks).
                    </p>

                    <p>
                        Once an attacker escalates their privileges, they'll immediately begin
                        looking for <a href="/hidden.html">other pages</a> in
                        the application they hadn't known about.
                    </p>
                </div>
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