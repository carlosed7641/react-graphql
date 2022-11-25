import './App.css'
import { Persons } from './Persons'
import { PersonsForm } from './PersonsForm'
import { usePersons } from './hooks/custom-hooks'
import { useState } from 'react'
import { Notify } from './Notify'
import { PhoneForm } from './PhoneForm'

  
const App = () => {

  const { data, loading, error } = usePersons()
  const [errorMessage, setErrorMessage] = useState(null)


  const notifyError = (message:any) => {
    setErrorMessage(message)
    setTimeout(()=> setErrorMessage(null), 5000)
  }

  // useEffect(() => {
  //   fetch('http://localhost:4000', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({ query: `
  //           query {
  //             allPersons {
  //               name
  //               phone          
  //             }
  //           }
  //     `})
  //   })
  //   .then(res=> res.json())
  //   .then(res=> {
  //     console.log(res.data);
  //   })
  // })


  if (loading) return <div>Cargando...</div>

  return (
    <>
      <Notify errorMessage={errorMessage} />
      <Persons persons={data?.allPersons} />
      <PhoneForm />
      <PersonsForm notifyError={notifyError}/>
    </>

  )

}

export default App
