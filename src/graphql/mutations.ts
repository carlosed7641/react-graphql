import { gql } from "@apollo/client";

export const CREATE_PERSONS = gql`
mutation createPerson($name: String!, $phone: String, $city: String!, $street: String!) {
    addPerson(name: $name, phone: $phone,city: $city, street: $street) {
        name
        address {
            city
            street
        }
        phone
    }
  }
`

export const EDIT_NUMBERS = gql`
    mutation editNumber($name: String!, $phone: String!) {
        editNumber(name: $name, phone: $phone) {
            name
            phone
            id
        }
    }
`