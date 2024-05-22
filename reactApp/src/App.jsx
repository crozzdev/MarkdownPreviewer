import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {


  return (
    <>
      <header>Markdown Preview</header>
      <Header isExpanded={false} title="Editor" />
    </>
  )
}

export default App
