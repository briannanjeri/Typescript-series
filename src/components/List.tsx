import React, { ReactNode } from 'react'

interface listprops <T> {  
    items:T[]
    render:(item:T)=>ReactNode
}

export const List=<T,>({items,render}:listprops<T>)=>{
    return(
       <ul>
        {items.map((item,i)=>(
            <li key={i}>
                {render(item)}
            </li>
        ))} 
       </ul>
    )
}  