import React from 'react'
import styled from 'styled-components'
import Card from './Card'

function Home() {
    return (
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
