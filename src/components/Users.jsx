import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom'

const Users = () => {
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams, searchParams.entries(), searchParams.get('filters'))
    for(let key of searchParams.entries()){
        console.log(key)
    }

  return (
    <>
    <div>Users - {id}</div>
    <button onClick={() => setSearchParams({filters: 'inactive'})}> Inactive</button>
    </>
  )
}

export default Users