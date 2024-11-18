import { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = () => {

    const {doctors} = useContext(AppContext)

    const [relDoc, setRelDoc] = useState([])

  return (
    <div>

    </div>
  )
}

export default RelatedDoctors