import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let personalInfomation = {
    username: "Divine Daniel",
    post: "Software Engineer, Amazon",
    imgSrc: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
  }
  let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
    <Card username={personalInfomation.username} post={personalInfomation.post} imgSrc={personalInfomation.imgSrc} />
    </>
  )
}

export default App
