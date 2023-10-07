import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const initialFlashcards = [
    { question: 'What has to be broken before you can use it?', answer: 'An egg' },
    { question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?', answer: 'A candle' },
    { question: 'What month of the year has 28 days?', answer: 'All of them' },
    { question: 'What is full of holes but still holds water?', answer: 'A sponge'}, 
    { question: 'What goes up, but never comes down?', answer: 'age'}, 
    { question: 'If a zookeeper had 100 pairs of animals in her zoo, and two pairs of babies are born for each one of the original animals, then (sadly) 23 animals don’t survive, how many animals do you have left in total?', answer: '977'},
    { question: 'I am an odd number. Take away a letter and I become even. What number am I?', answer: 'Seven'},
    { question: 'What has hands but cannot clap?', answer: 'a clock'}, 
    { question: 'What gets broken without being held?', answer: 'a promise'}, 
    { question: 'I have no life, but I can die. What am I?', answer: 'a battery'}
  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputText, setInputText] = useState(''); 
  const [numCorrect, setNumCorrect] = useState(0); 
  const [currentStreak, setCurrentStreak] = useState(0); 

  const checkAnswer = () => {
    const ans = inputText.toLowerCase();
    if (ans === flashcards[currentIndex].answer.toLowerCase()) {
      setNumCorrect(numCorrect + 1);
      setCurrentStreak(currentStreak + 1);
    } else {
      setCurrentStreak(0);
    }
  };
  

  const showNextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };
  const showPreviousFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="App">
      <div className='header'>
        <h1>Riddles</h1>
        <h3>Total riddles: {initialFlashcards.length}</h3>
        <h3>Total Correct: {numCorrect}</h3>
        <h3>Current Streak: {currentStreak}</h3>
      </div>
      <div className='card'>
        <Flashcard question={flashcards[currentIndex].question}
          answer={flashcards[currentIndex].answer}>
        </Flashcard>
      </div>
      <div className='guess'>
        Guess the answer:  
        <input
          type="text"
          placeholder="Guess the answer"
          onChange={(e) => setInputText(e.target.value)}
          className="textbox"
        />
        <button onClick={checkAnswer}>Check Answer</button>
      </div>
      <div className="buttons">
        <button className="navButtons" onClick={showPreviousFlashcard}>Previous</button>
        <button className="navButtons" onClick={showNextFlashcard}>Next</button>
      </div>
    </div>
  )
}

export default App
