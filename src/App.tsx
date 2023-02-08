import React  from 'react';
import Heading from './components/Heading';
import Section from './components/Section';
import Counter from './components/Counter';
import { useState } from 'react';
import { List } from './components/List'; 


function App() {
  const[count, setCount]=useState<number>(1)

  return (
    <div className="App">
      <Heading title={"hello"}/>
      <Section title='Different title'>This is my section</Section>
      <Counter setCount={setCount}>this is my { count}  </Counter>
      <List items={["coffee", "Tea", "whiskey"]} render={(item:string)=>
      <span className='gold'>{item}</span>}/>

    </div>
  );
}

export default App;
