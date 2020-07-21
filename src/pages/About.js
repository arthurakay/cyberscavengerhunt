import React from 'react';

const About = () => (
    <div class="modal fade" tabindex="-1" role="dialog" id="aboutModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Cyber Scavenger Hunt</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>
                        <em>Cyber Scavenger Hunt</em> is an interactive website that challenges you
                        to think like a web application penetration tester.
                    </p>

                    <p>
                        The project code is 100% open source
                        and <a href="https://github.com/arthurakay/cyberscavengerhunt" target="_blank" rel="noopener noreferrer">available on GitHub</a>.
                        If you have any suggestions, questions, or are interested in helping support the project please let us know!
                    </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
);

export default About;