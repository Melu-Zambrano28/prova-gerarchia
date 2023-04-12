import { useState } from 'react'
import { NodoForm } from '../NodoForm'

export type NodoT = {
  id: number
  descrizione: string
}

const Nodo: React.FunctionComponent<NodoT> = ({ id, descrizione }) => {
  const [sottoNodi, setSottoNodi] = useState<NodoT[]>([])
  const [showForm, setShowForm] = useState(true)

  const handleForm = () => {
    setShowForm(false)
  }

  return (
    <div>
      <div>
        {id} - {descrizione}
        <ul>
          {sottoNodi &&
            sottoNodi.map((_, index) => (
              <li key={`${index}`}>{`${_.id} - ${_.descrizione}`}</li>
            ))}
          {showForm && <NodoForm handleForm={handleForm}></NodoForm>}
        </ul>
      </div>
    </div>
  )
}

export { Nodo }
