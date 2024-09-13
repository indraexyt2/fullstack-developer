import FormDisplay from './components/FormDisplay'
import FormInput from './components/FormInput'
import { useState } from 'react'
import './index.css'
import Accordion from './components/accordion'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submit, setSubmit] = useState(false)

  function HandSubmit() {
    if (name.length > 5 && setEmail) {
      setSubmit(true)
    }
  }

  return (
    <>
      <div className='p-20'>
        < FormInput onChangeName={setName} onChangeEmail={setEmail} onSubmit={HandSubmit}/>
        {submit && < FormDisplay nama={name} email={email}/>}
      </div>
      < Accordion />
    </>
  )
}

export default App
