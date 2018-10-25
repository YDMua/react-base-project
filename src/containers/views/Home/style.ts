import styled, { keyframes } from 'styled-components'

const homeLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const HomeWrap = styled.div`
  text-align: center;
`
export const HomeHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  .home-header-logo {
    animation: ${homeLogoSpin} infinite 20s linear;
    height: 80px;
  }
  .home-header-title {
    color: white;
  }
`
export const HomeIntro = styled.p`
  font-size: large;
`
