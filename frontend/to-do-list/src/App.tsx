// import { useState } from 'react'

import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import ToDo from './components/to-do/to-do'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div>
   <Header />
    </div>


      <main style={{ padding: "20px" }}>
        <ToDo/>
      </main>
      <Footer />
    </>
  )
}

export default App
