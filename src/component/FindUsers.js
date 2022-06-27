import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { LOAD_USERS } from '../graphql/Queries';

function FindUsers() {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      if (data) {
        console.log(data)
        setUsers(data.getAllUsers);
      }
    }, [data]);
  return (
    <div>
      {users.map((val) => {
        return <h1 key={val.id}> {val.firstName}</h1>;
      })}
    </div>
  )
}

export default FindUsers;