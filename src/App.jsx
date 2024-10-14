
import './App.css'
import Counter from './Counter'
import Users from "./Users.jsx";
import Friends from "./Friends.jsx";
import Posts from "./Posts.jsx";
function App() {
    const handel = () => {
        alert("Hello World!")
    }
  return (
    <>
      <h2>Explore React Core Concept</h2>
        <Counter/>
        <button onClick={()=>handel()}>Handel</button>
        <Users/>
        <Friends/>
        <Posts/>
    </>

  )
}

export default App
