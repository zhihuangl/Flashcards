import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flashcard from './components/Flashcard'

function App() {
  const initialFlashcards = [
    { question: 'What has to be broken before you can use it?', answer: 'An egg' },
    { question: 'I’m tall when I’m young, and I’m short when I’m old. What am I?', answer: 'A candle' },
    { question: 'What month of the year has 28 days?', answer: 'All of them'},
    { question: 'What is full of holes but still holds water?', answer: 'A sponge'}, 
    { }
  ];

  const [flashcards, setFlashcards] = useState(initialFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);

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
      </div>
      <div className='card'>
        <Flashcard question={flashcards[currentIndex].question} 
            answer={flashcards[currentIndex].answer}>
        </Flashcard>
      </div>
      <div className="buttons">
        <button onClick={showPreviousFlashcard}>Previous</button>
        <button onClick={showNextFlashcard}>Next</button>
      </div>
    </div>
  )
}

export default App
