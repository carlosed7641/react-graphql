import { useMutation } from "@apollo/client"
import { useState } from "react"
import { EDIT_NUMBERS } from "./graphql/mutations"

export const PhoneForm = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

   
    const [changeNumber ] = useMutation(EDIT_NUMBERS)

    
    const handleSubmit = (e: any) => {

        e.preventDefault()

        changeNumber({variables: {name, phone}})

        setName('')
        setPhone('')
    }


    return (
        <div>
            <div>Edit Phone Number</div>
            <form onSubmit={handleSubmit}>

                <input placeholder="Nombre" type="text" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Teléfono" type="text" value={phone} onChange={e => setPhone(e.target.value)} />
    
                <button>Change Phone</button>

            </form>
        </div>
    )
}
