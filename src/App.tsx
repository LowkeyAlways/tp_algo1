import './App.css'
import DeuxiemePlusGrandNb from './components/2emePlusGrandNb'
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
      <section className=''>
      <DeuxiemePlusGrandNb />
      </section>
    </div>
  )
}

export default App
