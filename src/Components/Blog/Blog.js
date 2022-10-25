import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h2> What is cors?</h2>
                <p>CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests.It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
            <div>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>It’s easy to start a project with Firebase or add a Firebase to my project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so I don’t have to send requests to get new data, I only need to subscribe once. <br />
                Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.
                </p>
            </div>
            <div>
                <h2>How does the private route work?</h2>
                <p>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div>
                <h2> What is Node? How does Node work?</h2>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</p>
            </div>
        </div>
    );
};

export default Blog;