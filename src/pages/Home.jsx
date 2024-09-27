import React from 'react'
import Hero from '../components/Hero'
import BelgeSorgula from '../components/BelgeSorgula'
import Yeterliliklerimiz from '../components/Yeterliliklerimiz'
import TrainingSection from '../components/TrainingSection'
import CardContainer from '../components/CardContainer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <br />
      <br />
      <BelgeSorgula/>
      <br />
      <br />
      <Yeterliliklerimiz/>
      <br />
      <br />
      <CardContainer/>
      <br />
      <br />
      <TrainingSection/>
    </div>
  )
}

export default Home