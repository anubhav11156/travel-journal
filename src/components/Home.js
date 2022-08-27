import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import {data} from '../cardData'

function Home() {
  const cards = data.map((card)=>{
    return (
      <Card
        placeName={card.placeName}
        img={card.img}
        country={card.country}
        startDate={card.date.startDate}
        endDate={card.date.endDate}
        description={card.description}
        googlMapLink={card.googlMapLink}
      />
    )
  })
    return (
        <Container>
          {cards}
        </Container>
    )
}

export default Home

const Container=styled.div`
  height:650px;
  padding-top: 40px;
  padding-right: 40px;
  padding-left: 40px;
  overflow: scroll;
`
