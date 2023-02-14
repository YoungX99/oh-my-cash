import tw from 'twin.macro'
import Button from '@mui/material/Button'

const Tip = tw.div`text-3xl  text-blue-300 mb-2`

function App() {
  return (
    <div className="App">
      <Tip>Twin Test</Tip>
      <Button variant="contained">Material UI</Button>
    </div>
  )
}

export default App
