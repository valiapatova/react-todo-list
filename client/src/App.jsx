import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <h1>Hello</h1>

      <Header />

      <main className="main">

        <TodoList />

      </main>

      <Footer />

    </>
  )
}

export default App
