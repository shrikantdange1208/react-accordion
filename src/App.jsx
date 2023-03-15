import { useState } from 'react'
import SingleQuestion from './components/SingleQuestion'
import questions from './data'

function App() {
  const [toggle, setToggle] = useState(0)

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            const { id, title, info } = question
            return <SingleQuestion key={id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
