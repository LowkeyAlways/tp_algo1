import './App.css'
import CountInTab from './components/countInTab'
import Palindrome from './components/palindrome'

function App() {

  return (
    <div className='App'>
      <section className='count'>
        <CountInTab />
      </section>
      <section className='palindrome'>
      <Palindrome />
      </section>
    </div>
  )
}

export default App
