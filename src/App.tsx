import React from 'react';
import logo from './logo.svg';
import FadeIn from 'react-fade-in';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>

                {/* <img src={logo} className='App-logo' alt='logo' /> */}

                <h1 id='title'>
                    <span>*</span><a
                        className='App-link App-link-title'
                        href=''
                        //   target='_blank'
                        rel='noopener noreferrer'
                    >
                        .noahbay<span>.</span>io
                    </a>
                </h1>
                <p id='disclaimer'>enhanced descriptions & photography coming soon</p>

                <p id='about' className='small'>hi, i'm Noah</p>
                <p id='about' className='small'>i spend my time making life safer and easier for humans through the use of software, hardware, machine intelligence, and decentralized engineering</p>
                <p></p>
                <p id='about'>i currently work on <a
                                className='App-link'
                                href='https://www.primeprotocol.xyz/'
                                  target='_blank'
                                rel='noopener noreferrer'
                            >Prime Protocol</a> as a senior blockchain and founding engineer</p>
                <p id='about'>i previously worked on Amazon Go & Alexa as a senior fullstack software engineer</p>
                <p id='about'>my technical passions lie with decentralized engineering and machine intelligence</p>
                <p id='about'>otherwise, i spend my time skiing, climbing, hiking, and playing guitar</p>
                <p></p>
                <p id='quote'>"<i>Any sufficiently advanced technology is indistinguishable from magic.</i>"<br></br><i><span>- Arthur C. Clarke</span></i></p>
                <p></p>

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
                            additional work:
                        </p>
                        {/* <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.pawzaar.io/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                pawzaar.io [coming soon]
                            </a>
                        </div>
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.pawfi.io/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                pawfi.io [coming soon]
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
                        </div> */}
                        <div className='linkHover'>
                            <a
                                className='App-link'
                                href='https://www.primeprotocol.xyz/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                primeprotocol.xyz
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
                                href='https://www.samcap.ltd/'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                samcap.ltd
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
