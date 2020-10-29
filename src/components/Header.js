import React from 'react';

const Header = (props) => {
    return (
        <header >
            <h2>Memory Game</h2>
            <h3>Get points by clicking on an image but don't click on any more than once!</h3>
            <h4>Current score: {props.score}</h4>
            <h4>Your the best score: {props.bestScore}</h4>
        </header>
    );
};

export default Header;