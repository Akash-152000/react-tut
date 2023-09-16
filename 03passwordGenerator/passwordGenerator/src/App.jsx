import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)


  const handleCopyfromClipboard =useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+~{}<>?:|"

    for (let i = 0; i < length; i++) {
      let randChar = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(randChar)
      
    }
    setPassword(pass)


  },[length, numAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed])

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: '#000' }}>
        <div className="flex items-center justify-center px-[300px] pt-[100px]">
          <div className="w-full h-full bg-gray-800">
            <h1 className="text-3xl px-5 py-5 text-center text-white">Password Generator</h1>
            <div className="px-8 py-2">
              <div className="flex">
                <input className="rounded-l-lg w-full py-2 px-2 text-xl text-yellow-800" 
                type="text" 
                ref={passwordRef}
                value={password}
                readOnly
                placeholder="Password"
                />
                <button className="text-lg text-white px-5 bg-blue-500 hover:bg-blue-950 rounded-r-lg" onClick={handleCopyfromClipboard}>Copy</button>
              </div>

              <div className="flex gap-8">

              <div className="flex mt-8 w-[250px] gap-3 text-white text-xl px-2">
                <input className="cursor-pointer" type="range" min={4} max={20} value={length} onChange={(e)=>setLength(e.target.value)}/>
                <label>Length({length})</label>
              </div>

              <div className="flex mt-8 gap-3 text-white text-xl">
                <input type="checkbox" onChange={()=>setNumAllowed(prev=>!prev)} />
                <label>Numbers</label>
              </div>

              <div className="flex mt-8 gap-3 text-white text-xl">
                <input type="checkbox" onChange={()=>setCharAllowed(prev=>!prev)}/>
                <label>Characters</label>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
