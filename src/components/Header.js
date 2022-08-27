import React from 'react'
import styled from 'styled-components'


function Header() {
    return (
        <Container>
          <InsideContainer>
            <div className="logo-div">
              <img src="/images/earth.png"/>
            </div>
            <div className="title-div">
              <p>my travel journal.</p>
            </div>
          </InsideContainer>
        </Container>
    )
}

export default Header

const Container=styled.div`
  position: sticky;
  height:62px;
  background-color: rgb(245, 90, 90);
  display:flex;
  justify-content: center;
  align-items:center;
  width:100%;
`

const InsideContainer=styled.div`
  width: 190px;
  height: 30px;
  display: flex;
  align-items: center;

  .logo-div {
    flex:1;
    display:flex;
    justify-content: center;
  }

  .title-div {
    flex:4.5;
    p {
      margin:0;
      margin-left: 3px;
      font-family: Inter;
      color: white;
    }
  }
`
