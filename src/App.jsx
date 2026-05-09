import { useState, useRef, useEffect } from 'react'
import './App.css'
import { motion } from 'motion/react'
import { div, li } from 'motion/react-client'
// import { FirstComponent } from './components/FirstComponent';

function App() {
  // const [x, setX] = useState(0);

  // const btnClick = () => {
  //   console.log('clicked')
  //   setX((x) => x + 1);
  // }

  // return (
  //   <>
  //     <button onClick={() => { btnClick() }}>Click me</button>
  //     <FirstComponent data={x} fn={setX} />
  //   </>
  // )

  // const inputRef = useRef(null);
  // const [data, setData] = useState([]);

  // return (
  //   <div>
  //     <input ref={inputRef} type="text" />
  //     <button onClick={() => { setData([...data, inputRef.current.value]) }}>Submit</button>
  //     {data.map((item, index) => {
  //       return <h2 key={index}>{item} nr: {index}</h2>
  //     })}
  //   </div>
  // )

  // const [counter, setCounter] = useState(0)
  // const [error, setError] = useState(false);

  // const increment = () => {
  //   setCounter(c => c + 1)
  // }

  // const decrement = () => {
  //   if (counter === 0) {
  //     setError(true);
  //     setTimeout(() => {
  //       setError(false);
  //     }, 400);
  //   } else setCounter(c => c - 1)
  // }



  // return (
  //   <div className='flex gap-2 flex-col w-screen h-screen justify-center items-center'>
  //     <div>
  //       <motion.h1
  //         animate={
  //           error ? { x: [-5, 5, -5, 5, 0], color: 'red' } : { x: 0, color: '#00ffff' }
  //         }
  //         transition={{ duration: 0.3 }}
  //       >
  //         Counter: {counter}
  //       </motion.h1>
  //     </div>
  //     <div>
  //       <button onClick={increment} className='h-25 w-50 border-2 border-white'>+</button>
  //       <button onClick={() => setCounter(0)} className='w-50 h-25 border-2 border-white'>Reset</button>
  //       <button onClick={decrement} className='w-50 h-25 border-2 border-white'>-</button>
  //     </div>
  //   </div >
  // )

  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([])


  function addNote() {
    if (note.trim() === "") return;
    setNotes((prevNotes) => [...prevNotes, note]);
    setNote("");
  }

  function deleteNote(id) {
    if (notes.length === 0) return;
    setNotes(notes.filter((_, i) => i !== id))
  }

  return (
    <div className='flex flex-col gap-10'>
      <input className='w-fit h-fit border-2 border-white rounded-4xl p-5' type="text" placeholder='Dodaj notatke' onChange={(e) => setNote(e.target.value)} value={note} />
      <button className='w-fit h-fit border-2 border-white rounded-2xl px-15 py-5' onClick={addNote}>Dodaj</button>
      <ol>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button className='w-fit h-fit border-2 text-4xl px-10 py-5 mx-5 border-white rounded-2xl' onClick={() => deleteNote(index)}> Del</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
