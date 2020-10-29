import React, { useState, useEffect} from 'react';
import Header from './components/Header.js';
import Card from './components/Card.js';
import listShuffle from './components/ListShuffle.js';

import photos from './components/photos.js';

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cards, setCards] = useState(photos);

    const findBestScore= (score) => {
        if (score > bestScore) {
            setBestScore(score);
        }
    };

    const startNewGame = () => {
        setScore(0);
        findBestScore(score);
        setCards(photos);
    };

    useEffect(() => {
        setCards(listShuffle(cards));
    }, [score]);

    const cardClicked = (id) => {
        const newCards = [];
        let gameContinue = true;
        cards.forEach(card => {
            if (id === card.id && !card.clicked) {
                newCards.push({
                    ...card,
                    clicked: true});
                setScore(score+1);
            } else if (id === card.id && card.clicked) {
                gameContinue = false;
            } else {
                newCards.push(card);
            }
        });
        if (gameContinue) {
            setCards(newCards);
        } else {
            startNewGame();
            console.log('Game ends');
        }
    };

    const readyCards = cards.map(card => {
        return (
            <Card card={card} onClick = {cardClicked} key={card.id}/>
        );
    });

    return (
        <div>
            <Header score={score} bestScore={bestScore}/>
            <div className='card-container'>
                {readyCards}
            </div>
            <footer>&copy; Olga Milczek</footer>
        </div>
    );
}

export default App;
