'use client';

import { useState,KeyboardEvent } from "react"

type Props ={
    onEnter:(taskName:string)=>void
}



export const AddArea = ({onEnter}:Props)=>{
    const [inputText,setInputText] = useState("");

    const handleKeyUp = (e:KeyboardEvent)=>{
        if(e.code==='Enter' && inputText!==''){
            onEnter(inputText)
            setInputText('');
        }
        
        
    }


    return(
        <div className=" flex items-center border border-[#555] rounded-md p-3 mb-5 mt-5">
            <div className="mr-2 cursor-pointer">➕</div>
            <input
            className="border-none bg-transparent outline-none text-white text-lg"
             type="text"
             placeholder="Adicione um tarefa" 
             value={inputText}
             onChange={e=>setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
             />
        </div>
    )
}