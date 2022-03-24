import React from 'react';
import logo from './logo.svg';
import FadeIn from 'react-fade-in';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>

                <img src={logo} className='App-logo' alt='logo' />

                <h1 id='title'>
                    welcome to <span>*</span><a
                        className='App-link App-link-title'
                        href=''
                        //   target='_blank'
                        rel='noopener noreferrer'
                    >
                        .noahbay<span>.</span>io
                    </a>
                </h1>
                <p id='disclaimer'>...my <span>frontend</span> personality</p>

                <FadeIn>
                    <div>
                        <p>
                            available subdomains:
                        </p>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://greet.noahbay.io'
                                //   target='_blank'
                                rel='noopener noreferrer'
                            >
                                greet.<span className='link-wildcard'>*</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <p>
                            additional websites:
                        </p>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.samcap.ltd/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                samcap.ltd
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.justwalkout.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                justwalkout.com
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://developer.amazon.com/alexa/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                developer.amazon.com/alexa
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.pawzone.io/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                pawzone.io
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.pawzaar.io/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                pawzaar.io [coming soon]
                            </a>
                        </div>
                    </div>

                    <div>
                        <p>
                            other links:
                        </p>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://github.com/nbayindirli'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                github
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.linkedin.com/in/noahbay/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                linkedin
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://twitter.com/Noah_Bayindirli'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                twitter
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </header>
        </div>
    );
}

export default App;
