import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

import data from './data'

function App() {
  const cards = data.map((item) => {
    return (
      <>
        <Card item={item} />
        <hr />
      </>
    )
  })

  return (
    <>
      <Navbar />
      <main>{cards}</main>
    </>
  )
}

export default App
