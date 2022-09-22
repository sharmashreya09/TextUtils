import React ,{useState} from 'react'
export default function TextForm(props) {
    
    const [text, setText] = useState("Enter text")
    const [modetxt, setmodetxt] = useState("Light")
    const [mode, setmode] = useState(
         {
            color:'white',
            backgroundColor:'black'
          })

    const handlemode=()=>
    {
        if(mode.color==='white')
       {
        setmode({
            color:'black',
            backgroundColor:'white'
            
        })
        setmodetxt("Dark")
       }
       else{
        setmode({
            color:'white',
            backgroundColor:'black'

        })
        setmodetxt(" Light")
       }
    }
    const handleonChange=(event)=>
    {
          setText(event.target.value);
    }
    const  handleupbtn=()=>
    {
        let newtxt=text.toUpperCase();
        setText(newtxt);
    }
    const  handlelowbtn=()=>
    {
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleondel=()=>
    {
        let newt="";
        setText(newt);
    }
   
    const handleCopy=()=>
    {
        document.querySelector('textarea').select();
        document.execCommand('copy');
        
    }
    
    return (
        
        <div className="Textbox">
            <h1 className="hding">Enter Your Text</h1>
            <form action="">
                <textarea className="w3review" name="w3review" rows="14" cols="90" value={text} onChange={handleonChange} style={mode}></textarea>
            </form>
            <div className="button">
                 <button className="btn success sg" onClick={handleupbtn}>{props.upbtn}</button>
                 <button className="btn success mg" onClick={handlelowbtn}>{props.lowbtn} </button>
                 <button className="btn  dg" onClick={handleondel}>Clear Text</button>
                 <button className="btn " onClick={handlemode}>Enable {modetxt} mode</button>
                 <button className="btn " onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="summary">
                <h2>Text Summary</h2>
                <p className="count">No of Words are {text.split(" ").length -1} and No of Characters are {text.length}</p>
                <p className="count">Time to read text ::{text.split(" ").length *0.008} minutes</p>
            </div>
           

        </div>
        

                
            

)

}
