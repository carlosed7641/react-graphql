import { useMutation } from "@apollo/client"
import { useState } from "react"
import { CREATE_PERSONS } from "./graphql/mutations"
import {  ALL_PERSONS } from './graphql/queries' 

export const PersonsForm = ({notifyError}:any) => {

    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [phone, setPhone] = useState('')

    const [ createPerson ] = useMutation(CREATE_PERSONS, {
        refetchQueries: [{query: ALL_PERSONS}],
        onError: (error) => {      
            notifyError(error?.graphQLErrors[0].message)
        }
    })


    
    const handleSubmit = (e: any) => {

        e.preventDefault()

        createPerson({variables: {name, phone, city, street}})

        setName('')
        setPhone('')
        setCity('')
        setStreet('')

    }


    return (
        <div>
            <div>Create new Person</div>
            <form onSubmit={handleSubmit}>

                <input placeholder="Nombre" type="text" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Teléfono" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
                <input placeholder="Ciudad" type="text" value={city} onChange={e => setCity(e.target.value)} />
                <input placeholder="Calle" type="text" value={street} onChange={e => setStreet(e.target.value)} />
                <button>Add Person</button>

            </form>
        </div>
    )
}
