import { useState, useCallback, useEffect } from 'react'

import './App.css'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPass] = useState();

  const passGenerator = useCallback(() => {
    let pas = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+= "1234567890";
    if(charAllowed) str+= "~!@#$%^&**(){}";
    

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pas += str.charAt(char);
    }

    setPass(pas);


  }, [length, numAllowed, charAllowed])

  const handleCopy = useCallback( () => {
      // copying text to clip board
      window.navigator.clipboard.writeText(password);

      // printing 'text copied' for two seconds;
      copySuccess.innerText = 'Text Copied!';
      setTimeout(function() {
        copySuccess.innerText = ' ';
      }, 2000);
      
    }, [password]
  )

  // runs on redering on app each time
  useEffect(() => {
    passGenerator();
  }, [length, numAllowed, charAllowed])



  return (
    <>
      <h1>Password Generator</h1>
      <div className='generate'>
                <input type="text" value={password} id='passdone' readOnly/>
                <button onClick={handleCopy}>Copy</button>
                <p id='copySuccess'> </p>
                <div className='addons'>
                    <div id='len'>
                        <input type="range" min="8" max="16" value={length} onChange={(e) => setLength(e.target.value)} id='size'/>
                        <label htmlFor="size">Length ({length})</label>
                    </div>
                    <input type="checkbox" defaultChecked={numAllowed} onChange={() => {setNumAllowed((p) => !p); }}/>Numbers
                    <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((p) => !p); }}/>Special Characters
                </div>
            </div>
    </>
  )
}

export default App
