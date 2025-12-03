import { useState, } from "react";
import run from "../config/gemini";
import  { Context } from './kon'



const ContextProvider = (props) => {

    const [input,setInput]= useState("");
    const [recentPrompt,setRecentPrompt]= useState("");
    const [prevPrompt,setPrevPrompt]= useState([]);
    const [showResult,setShowResult] =useState(false);
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState([])


    const delayPara= (index,nextWord)=> {
        setTimeout (function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)
    }

    const newChat = ()=> {
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {


    setResultData("");
    setLoading(true);
    setShowResult(true);
    let res;
    if (prompt !== undefined){
        res = await run(prompt)
        setRecentPrompt(prompt)

    }else{
        setPrevPrompt(prev=>[...prev,input])
        setRecentPrompt(input)
        res = await run(input)
    }

    try {
        const response = await run(prompt ?? input);             // panggil API
        const parts = String(response || "").split("**");        // aman jika null/undefined
        const html = parts
        .map((chunk, i) => (i % 2 === 1 ? `<b>${chunk}</b>` : chunk))
        .join("");


        let newRes = html.split("*").join("</br>")
        let newRespon = newRes.split(" ");

        for(let i = 0; i < newRespon.length;i++)
        {
            const nextWord = newRespon[i];
            delayPara(i,nextWord +" ")
        }                                    // simpan HTML hasil format
        setInput("");
    } finally {
        setLoading(false);
    }
    };

 

    const ContextValue = {
        input,setInput,prevPrompt,setPrevPrompt,
        setRecentPrompt,recentPrompt,showResult,
        loading,resultData,onSent,newChat,

    }
    return(
        <Context.Provider value={ ContextValue}>
           {props.children}
        </Context.Provider>
    )
}

export default ContextProvider