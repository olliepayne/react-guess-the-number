import React, { useState, useEffect } from 'react'

function App() {
  const [name, setName] = useState('mario')
  const [age, setAge] = useState(30)

  const changeName = () => {
    setName('luigi')
  }

  const changeAge = () => {
    setAge(40)
  }

  useEffect(() => {
    console.log('use effect ran')
  }, [name])

  return (
    <div id="app">
      <p>Name: {name}, Age:{age}</p>
      <button onClick={changeName}>Change name</button>
      <button onClick={changeAge}>Change age</button>
    </div>
  )
}

export default App