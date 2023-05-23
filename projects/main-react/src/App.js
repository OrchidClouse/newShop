import React, {useState} from 'react'



function Counter({count, onIncrementClick}) {
  return <button onClick={onIncrementClick}>{count}</button>
}

function CountDisplay({count}) {
  return <div>The current counter count is {count}</div>
}


const App = () => {
  // const elements = [1,2,3,4,5]

  // const items = elements.map((item, index) => ({ item, id: index + 1 }));
  // const [element = items, isElement] = useState(0) 

  // const removeItem = (id) => (e) => {
  //   e.preventDefault();
  //   const newItems = element.filter((item) => item.id !== id);
  //   // this.setState({ items: newItems });
  //   isElement(newItems)
  //   console.log(newItems)
  // };



  // const renderItem = (elem) => {
  //   return(
  //     elem.map((el) => <li><a onClick={() => removeItem(el)}>{el}</a></li>)
  //   )
  // }
  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)

  return(
    // <div className='cont'>
    //   <h1>React Native</h1>
    //   <ul>
    //     {renderItem(elements)}
    //   </ul>
    // </div>
    <>
      <Counter count={count} onIncrementClick={increment}/>
      <CountDisplay count={count}/>
    </>
  )
}

export default App;