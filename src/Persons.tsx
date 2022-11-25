import { gql, useLazyQuery } from "@apollo/client"
import { useEffect, useState } from "react"

const FIND_PERSONS = gql`
query findPerson($name: String!) {
  findPerson(name: $name) {
    name
    phone
  }
}`

export  const Persons = ({persons}: any | undefined) => {

  const [getPerson, {data, error, loading}] = useLazyQuery(FIND_PERSONS)

  const [person, setPerson] = useState<any>(null)

  const showPerson = (name : any) => {
    getPerson({variables: {name}})
  }

  useEffect(() => {
    if (data) {
        setPerson(data.findPerson)
    }
  }, [data])

  if (person) {
    return (   
        <div>
            <h2>{person.name}</h2>
            <p>{person.phone}</p>
            <button onClick={()=> {setPerson(null)}}>close</button>
        </div>
    )
  }

    if (persons === null) return <></>
    return (
        <div>
            <h2>Persons</h2>
            {
                persons.map((p: any) => 
                <div key={p.id} onClick={()=> {showPerson(p.name)}}>
                    {p.name} {p.phone}
                </div>)
            }
        </div>
    )
}

