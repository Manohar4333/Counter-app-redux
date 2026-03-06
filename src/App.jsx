import './index.css'
import './App.css'
import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement, incrementByValue } from './slices/counterSlice'


function App() {
  // selector to get the current count value from the store
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  console.log(count);
  

  return (
    <>
    <div className="App">
      <h1>Counter App</h1>
      
    <p>{count}</p>
    <div>
      <button onClick={()=> dispatch(increment())}>Increment by one</button>
      <button onClick ={() => dispatch(decrement())}>Decrement by one</button>
      <button onClick={()=> dispatch(incrementByValue(5))}>Increment by 5</button>

    </div>
    </div>
    </>
  )
}

export default App

