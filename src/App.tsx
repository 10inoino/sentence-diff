import Diff from './Diff'
import './App.css'
import { useState } from 'react'

function App() {
  const [baseText, setBaseText] = useState<string>('')
  const [targetText, setTargetText] = useState<string>('')

  return (
    <div>
      <main>
        <div>base</div>
        <textarea
          value={baseText}
          onChange={(v) => setBaseText(v.target.value as string)}
        ></textarea>
        <div>target</div>
        <textarea
          value={targetText}
          onChange={(v) => setTargetText(v.target.value as string)}
        ></textarea>
        <h1>Text diff</h1>
        <Diff string1={baseText} string2={targetText} mode="words" />
      </main>
    </div>
  )
}

export default App
