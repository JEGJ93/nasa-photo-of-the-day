import React from "react";
import styled from 'styled-components';

const TheNav = styled.div`
font-size: 50px;
`

const Nav = () => {
    return (
        <div className = "App-logo">
            <nav>
                <a className="App-link" href="#">BLAST OFF!</a>
            </nav>
            <TheNav>
            <p><span role="img" aria-label='go!'>🚀</span></p>
            </TheNav>
        </div>
    );
}

export default Nav;