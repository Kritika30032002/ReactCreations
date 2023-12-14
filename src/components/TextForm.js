import React, { useState } from 'react'
export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.ShowAlert("Converted to uppercase.","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.ShowAlert("Converted to lowercase.","success");

    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const handleClearClick = () => {
        let newText='';
        setText(newText)
        props.ShowAlert("Text cleared!","success");

    }
    
    const handleExtaSpaces = () =>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
        props.ShowAlert("Extra spaces removed","success");

    } 
    const handleListen = ()=>{
        if(text.length===0) props.showAlert("Enter something!","warning");
        else{
            if ( 'speechSynthesis' in window ) {
                var to_speak = new SpeechSynthesisUtterance(text);
                    window.speechSynthesis.speak(to_speak);
                  
              }
        }
        props.ShowAlert('Reading Texts', 'success')

      }
    const handleCopyClick =()=>{
        navigator.clipboard.writeText(text)
        props.ShowAlert("Text Copied to clipboard.","success");

    }
    const handleTalktoType = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const recognition = new SpeechRecognition()
        recognition.onstart = () => {
            console.log('voice is activated, you can to microphone')
        }
        
        recognition.onresult = (event) => {
            const current = event.resultIndex
            const transcript = event.results[current][0].transcript
            console.log(transcript)
            setText(text + transcript)
        
        }
        recognition.start()        
        props.ShowAlert('say to write text', 'success')
    }
    const handleWordReverse = () => {

        let words = text.split(" ");

        let newText = ""

        words.forEach(word => newText += word.split("").reverse().join("") + " ");

        setText(newText)

        props.ShowAlert("Words Are Reversed Successfully","success");

    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                    </div>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtaSpaces}>Remove Extra Space</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleWordReverse}>Reverse words</button>
                    <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleListen}> Listen</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleTalktoType}>Talk to Type</button>
        
        
            </div>
            <div className="conatainer my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
                <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length * 0.008} Minute to read</p>
                <h2>Preview</h2>
                <p>{text.length>0? text: "Write something in the textbox above to preview it here" }</p>
            </div>
        </>
    )
}
