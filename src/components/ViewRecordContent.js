import React from 'react'
import Typography from '@mui/material/Typography'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const ViewRecordContent = () => {
  const [users, setUsers] = useState([])
  const params = useParams()
  console.log(params)

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(
        (res) => {
          const result = res.data;
          // console.log(result[1].name);
          // setUsers(result.name)

        },
        (error) => {
          console.log(error);
        }
      );
  }, [])


  return (
    <div className='container' >
      <Typography variant="h5" gutterBottom align='center' marginTop={-6}>  View Record</Typography>
      <p></p>
    </div>
  )
}

export default ViewRecordContent
