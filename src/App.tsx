import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />

                <h1 id="title">
                    welcome to <a
                        className="App-link App-link-title"
                        href=""
                        //   target="_blank"
                        rel="noopener noreferrer"
                    >
                        noahbay<span>.</span>io
                    </a>*
                </h1>
                <p id="disclaimer"><span>*</span>my <span>frontend</span> personality</p>

                <p>
                    Available subdomains:
                </p>
                <a
                    className="App-link"
                    href="https://greet.noahbay.io"
                    //   target="_blank"
                    rel="noopener noreferrer"
                >
                    greet.*
                </a>

                <p>
                    Additional websites:
                </p>
                <a
                    className="App-link"
                    href="https://www.samcap.ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    samcap.ltd
                </a>
                <a
                    className="App-link"
                    href="https://www.justwalkout.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    justwalkout.com
                </a>
                <a
                    className="App-link"
                    href="https://developer.amazon.com/alexa/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    developer.amazon.com/alexa
                </a>
                <a
                    className="App-link"
                    href="https://www.pawzone.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    pawzone.io
                </a>
                <a
                    className="App-link"
                    href="https://www.pawzaar.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    pawzaar.io [coming soon]
                </a>

                <p>
                    Other links:
                </p>
                <a
                    className="App-link"
                    href="https://github.com/nbayindirli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github
                </a>
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/noahbay/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin
                </a>
                <a
                    className="App-link"
                    href="https://twitter.com/Noah_Bayindirli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    twitter
                </a>
            </header>
        </div>
    );
}

export default App;
