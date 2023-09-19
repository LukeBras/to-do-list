'use client'

import { useState } from "react";
import { ListType } from "./types/listItem";
import { ListItem } from "@/components/ListItem";
import { AddArea } from "@/components/AddArea";



const Page   = ()=>{

  const [list,setList] = useState<ListType[]>([
    {id:1,label:'fazer café',done:false},
    {id:2,label:'comprar bolo',done:true},
  ]);

  const handleAddTask = (taskName:string)=>{
    let newList = [...list];
    newList.push({
      id:list.length+1,
      label:taskName,
      done:false
    })
    setList(newList)
  }

  return(
    <div className="bg-[#17181f] min-h-screen">
      <h1 className="text-4xl text-center p-4 mb-5 border-b border-[#444] text-white">Lista de Tarefas</h1>
      <div className="m-auto max-w-[980px] text-white">
      <AddArea onEnter={handleAddTask}/>
         {list.map((item)=>(
            <ListItem key={item.id} item={item}/>
         ))}
      </div>
    </div>
  )
}
export default Page;