import { useState } from "react"

export const App = () => {
const [count, setCount] = useState(0)

const handleBtnClick = () => {
  setCount(count + 1)
  console.log("clicked");
  
}
return <>
          <h1>Hello</h1>
          <div>this is amazing!</div>
          <button className="btn-secondary"onClick={handleBtnClick}>
            click me
          </button>
          <div>count: {count}</div>
        </>}
  