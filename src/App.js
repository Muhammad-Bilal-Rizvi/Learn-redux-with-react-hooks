import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterDisplay from './components/CounterDisplay';

// Using Redux with React Hooks ( Documentation Link )
// https://thoughtbot.com/blog/using-redux-with-react-hooks
// Commands to Install
//	npx create-react-app my-app
//	cd my-app
//	yarn add redux react-redux
//	npm start / yarn start


function App() {
  return (
    <div >
      <Counter/>
      <CounterDisplay />
    </div>
  );
}

export default App;
