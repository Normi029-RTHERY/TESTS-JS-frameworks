import * as React from 'react'
import './App.css'
import BasicTable from './BasicTable'

import { useQuery } from '@tanstack/react-query'


function App() {

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:8000/api/rooms/').then(res => res.json())

  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + JSON.stringify(error)


  return (
    <>
      <BasicTable db={data}></BasicTable>
    </>
  )
}

export default App
