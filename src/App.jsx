import { useState } from 'react'
import ProductTab from "./ProductTab.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Blockbuster deals | shop now</h2>
      <ProductTab />
    </>
  )
}

export default App
