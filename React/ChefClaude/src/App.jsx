
import './App.css'
import Header from './cpt/Header'
import Main from './cpt/Main'
const huggingFaceAPIKey = import.meta.env.VITE_MOI_API;
;

console.log("Hugging Face API Key:", huggingFaceAPIKey); // For debugging purposes only
function App() {
  return (
    <>
    <Header/>
    <Main/>
    </>
    
  )
}

export default App
