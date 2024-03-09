import { v4 as uuidv4 } from 'uuid';
import {useState} from "react"
import './App.css';

function App() {
  const [id, setId] = useState("")
  const handleClick = () => {
    setId(uuidv4())
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(id)
      .then(() => {
        console.log('ID copied to clipboard:', id);
        // Optionally, you can provide feedback to the user that the text was copied successfully.
        alert('ID copied to clipboard!');
      })
      .catch(err => {
        console.error('Unable to copy ID to clipboard.', err);
        // Provide error feedback to the user if copying fails.
        alert('Failed to copy ID to clipboard.');
      });
  };
  return (
    <div className="App">
      <h1>{id}</h1>
      {id && <button className='btn' onClick={handleCopyClick}>Copy ID</button>}
      <h2>Click the button to generate a verification ID</h2>
   <button className='btn' onClick={handleClick}>Generate ID</button>
    </div>
  );
}

export default App;
