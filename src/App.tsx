import './App.css'
import DeuxiemePlusGrandNb from './components/2emePlusGrandNb'
import CountInTab from './components/countInTab'
import Palindrome from './components/palindrome'
import SommeChiffresNb from './components/sommeschiffrenb'
import SommeUnChiffre from './components/sommesUnChiffre'

function App() {

  return (
    <div className='App'>
      <section className='count'>
        <CountInTab />
      </section>
      <section className='palindrome'>
      <Palindrome />
      </section>
      <section className='second_largest_number'>
      <DeuxiemePlusGrandNb />
      </section>
      <section className='sommmes_nb'>
        <SommeChiffresNb />
      </section>
      <section className='un_restant'>
        <SommeUnChiffre />
      </section>

    </div>
  )
}

export default App
