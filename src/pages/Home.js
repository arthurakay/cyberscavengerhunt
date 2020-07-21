import React from 'react';
import About from './About';

const Home = () => (
    <div className="card mx-auto mt-2" style={{ width: '500px' }}>
        <div className="card-body">
            <h1 className="card-title">
                Cyber Scavenger Hunt
                <i className="fa fa-question-circle text-right aboutModal" data-toggle="modal" data-target="#aboutModal" />
            </h1>

            <h6 className="card-subtitle mb-2 text-muted">
                Welcome to step one of this 8-step scavenger hunt!
            </h6>

            <p className="card-text">
                Reconnassaince against a web application begins with the text on the website itself.
                The better you understand the company, and who the developers behind the code are...
                the better the conclusions you can infer.
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

            <button
                className="btn btn-primary m-3"
                type="button"
                data-toggle="collapse"
                data-target="#hint3"
                aria-expanded="false"
                aria-controls="hint3"
            >
                Hint #3
            </button>

            <div className="collapse" id="hint1">
                <div className="card card-body m-3">
                    <h4 className="card-title">Hint #1</h4>

                    <p className="card-text">
                        If I were a search engine, I'd look here to make sure I don't index any content I'm not supposed to.
                    </p>
                </div>
            </div>

            <div className="collapse" id="hint2">
                <div className="card card-body m-3">
                    <h4 className="card-title">Hint #2</h4>

                    <img src="/robots-meme.jpg" alt="robots.txt - I'm a sign, not a cop!" />
                </div>
            </div>

            <div className="collapse" id="hint3">
                <div className="card card-body m-3">
                    <h4 className="card-title">Hint #3</h4>

                    <p className="card-text">
                        Most websites have a <a href="/robots.txt">robots.txt</a> file. Take a look to see what's in there!
                    </p>
                </div>
            </div>
        </div>

        <About />
    </div>
);

export default Home;