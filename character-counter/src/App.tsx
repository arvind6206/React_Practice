import { useState } from "react"

const App = () => {
  const [text, setText] = useState("")
  function handleChange(e: any){
    setText(e.target.value)
  }
  return (
    <div>
      <h1>Character Counter</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2>Write Something:</h2>
      <br/>

      <input type="text"
      value={text}
      onChange={handleChange}
      maxLength={100}
      />
      <br/>
      <br/>

      <p>Character: {text.length}/100</p>
    </div>
  )
}

export default App
