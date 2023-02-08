import React from 'react'
interface Headingprops {
    title:string
}
  

const Heading = ({title}:Headingprops) => {
  return (
    <div>{title}</div>
  )
}

export default Heading