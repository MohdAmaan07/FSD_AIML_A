import './App.css'
import './index.css' 
import qBank from './qbank'
function App() {
  return (
    <>
      <h1>My quiz Application</h1>
      <br />
      Question {qBank.id}. {qBank.question} <br />
      <input type="radio" name="opt" />{qBank.option1} <br />
      <input type="radio" name="opt" />{qBank.option2} <br />
      <input type="radio" name="opt" />{qBank.option3} <br />
      <input type="radio" name="opt" />{qBank.option4} <br />
      <button onClick={() => {
        document.querySelector('.div').classList.toggle('hidden');
      }}>
        Ans
      </button>
      <br />
      <div className='div hidden'>{qBank.answer}</div>
      <br />

      <button>Previous</button>
      <button>Next</button>
    </>
  )
}

export default App
