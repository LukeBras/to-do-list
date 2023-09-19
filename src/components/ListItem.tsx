'use client'

import { ListType } from "@/app/types/listItem"
import { useState } from "react"

type ListItemProps = {
    item:ListType
    
}

export const ListItem =({item}:ListItemProps)=>{
    const [isChecked,setIsChecked] = useState(item.done);

    return(
        <div   className="flex bg-[#20212c] p-3 rounded-md mb-3">
            
            <input className="w-6 h-6 mr-2" type="checkbox" onChange={e=>setIsChecked(e.target.checked)} checked={isChecked} />
            <label className={`${isChecked===true? 'line-through':'normal'}`}>
                {item.label}
            </label>
           
        </div>
    )
}