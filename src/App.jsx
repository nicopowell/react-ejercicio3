import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button } from "react-bootstrap"

function App({nombre}) {
  const [msj, setMsj] = useState("");
  return (
    <main className='text-center p-5'>
      <h1>Hello {nombre}<span>{msj}</span>!</h1>
      <Button onClick={() => setMsj(" (from changed state)")}>Clickeame</Button>
    </main>
  )
}

export default App
