import React from 'react'
import styled from 'styled-components'

function Card() {
    return (
        <Container>
          <Image>
            <img src="https://source.unsplash.com/WLxQvbMyfas"/>
          </Image>

          <Text>
            <div className="country">
              <img src="images/map-pin.png"/>
              <p>australia</p>
              <a href="">View on Google Maps</a>
            </div>
            <p className="title">Mount Fuji</p>
            <p className="date">22 Jan, 2022 - 3 Feb 2022</p>
            <p className="description">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
            </p>

          </Text>
        </Container>
    )
}

export default Card

const Container=styled.div`
  height: 180px;
  width: 510px;
  margin-bottom: 30px;
  display:flex;
  overflow: hidden;
`

const Image=styled.div`
  width: 145px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 145px;
    height: 180px;
    object-fit: cover;
  }
`

const Text=styled.div`
  flex:1;
  padding-left: 20px;
  display:flex;
  flex-direction: column;

  .country {
    margin-top: 17px;
    margin-bottom: 4px;
    height: 20px;
    display: flex;
    align-items: center;

    img {
      display: inline-block;
      width: 10px;
      height: 10px;
    }

    p {
      margin-left: 6px;
      margin-right: 8px;
      flex:1
      font-family: Inter;
      font-size: 12px;
      letter-spacing:2.6px;
      text-transform: uppercase;
    }

    a {
      font-family: Inter;
      font-size: 11px;
      color: grey;
    }
  }

  .title {
    margin-top: 0px;
    margin-bottom: 0px;
    height: 40px;
    font-family: Inter;
    font-size: 25px;
    font-weight: 700;
    color: rgba(43, 40, 58, 1);
  }

  .date {
    margin-top: 10px;
    margin-bottom: 0px;
    height:13.2px;
    font-family: Inter;
    font-size: 11px;
    rgba(43, 40, 58, 1);
    font-weight: 700;
  }

  .description {
    margin-top: 10px;
    height:50px;
    font-family: Inter;
    font-size: 12px;
    color: rgba(43, 40, 58, 1);
  }

`
