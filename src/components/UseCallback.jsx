import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

//TODO:   Without useCallback
  const handleClick = (count) => {
    console.log('Button clicked!',count);
  };

//TODO:   With useCallback
//   const handleClick = useCallback(() => {
    
//     console.log('Button clicked!', count);
//   }, [count]); // Dependency: count


//   <h1 className="text-3xl font-bold underline  text-center p-4 font-serif text-sky-400 drop-shadow-2xl ">
//   Password Generator!
// </h1>
  return (
    <div className='bg-white p-4    '>
      <h1>Understanding <i>useCallback</i></h1>

      <p className='p-2 bg-red-500'>Count: {count}</p>

      <button className="p-2 bg-green-500" onClick={()=>{setCount(count+1)}}>Increment Count</button>
      <ChildComponent onClick={()=>handleClick(count)} />
    </div>
  );
};

const ChildComponent = ({onClick} ) => {
  return <button className='p-2 bg-purple-500' onClick={onClick}>Click me!</button>;
};

export default ParentComponent
