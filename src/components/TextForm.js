import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    
    const handlechange = (event) => {
        setText(event.target.value)
    }
    const handleUpclick =() => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handlelowclick =() => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convertes to LowerCase", "success");
    }
    const invertandclick =() => {
        let newText = "";
        for(let i=text.length - 1; i>=0; i--){
            newText += text[i];
            props.showAlert("Inverted", "success");
        }
        setText(newText)
    }
    return (
        <>
        <div>
            <div className="mb-3" style ={{color : props.mode==='dark'?'white':'black'}}>
            <label htmlFor="box" className="form-label" style ={{color : props.mode==='dark'?'white':'black'}}>{props.title}</label>
            <textarea className="form-control" style ={{backgroundColor : props.mode==='dark'?'#1A374D':'white', color : props.mode==='dark'?'white':'black' }} value = {text} onChange = {handlechange} id="box" rows="8" placeholder="Enter text here"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpclick}>Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handlelowclick}>Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={invertandclick}>Invert</button>
            
        </div>
        
        <div className='container' style ={{color : props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p> No. of words = {(text.split(/\s+/).filter((el) =>{return el.length !==0})).length}</p>
            <p> No. of letters = {text.length}</p>
            <p> Minutes required for reading = {0.008 * (text.split(/\s+/).filter((el) =>{return el.length !==0})).length}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
