import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {

  const [color,setColor] = useState("yellow")
  
  const handleChangeColor =(color)=>{
    setColor(color)
  }

  return (
    <>
      <div className='h-screen' style={{backgroundColor:color}}>
        <div className='flex flex-wrap justify-center fixed bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center bg-white px-5 py-2 rounded-2xl shadow-lg'>
            <Button bgColor="red" handleChangeColor ={handleChangeColor} />
            <Button bgColor="blue" handleChangeColor ={handleChangeColor} />
            <Button bgColor="green" handleChangeColor ={handleChangeColor}/>
            <Button bgColor="orange" handleChangeColor ={handleChangeColor} />
            <Button bgColor="grey" handleChangeColor ={handleChangeColor}/>
            <Button bgColor="purple" handleChangeColor ={handleChangeColor}/>
            <Button bgColor="pink" handleChangeColor ={handleChangeColor}/>
            <Button bgColor="lavender" handleChangeColor ={handleChangeColor}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
