import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_+"

    for(let i =1; i < length; i++){
      const Char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(Char)
    }
    setPassword(pass)
  }, [length, numberAllowed, characterAllowed])

  const passwordRef = useRef(null)

  const copyPasswordToClipboard =() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, characterAllowed])

  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className="text-3xl font-bold mb-2 text-center">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        type="text" 
        value ={password}
        className="outline-none w-full px-3 py-1" 
        placeholder='password' 
        readOnly 
        ref={passwordRef} 

        />

      <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input 
        type="range"
        min ={8}
        max= {100}
        value={length}
        className='cursor-pointer'
        onChange={(a) => setLength(a.target.value)}
        name=""
          id=""
          />
          <label htmlFor="length">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={() => setNumberAllowed((prev) => !prev)}
        name=""
        id=""
          />
          <label htmlFor="numbers">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={characterAllowed}
          onChange={() => setCharacterAllowed((prev) => !prev)}
          name=""
          id=""
        />
        <label htmlFor="character">Character</label>
      </div>
      </div>
  </div>
  )
}

export default App
