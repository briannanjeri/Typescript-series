import React, { ReactNode } from 'react'

type sectionprops={
    title?:string;
    children:ReactNode
}


const Section = ( {children, title="subheading"}:sectionprops) => {
  return (
    <div>
       <h2> {title}</h2>
        <p>{children}</p>
        
        </div>
    
  )
}

export default Section