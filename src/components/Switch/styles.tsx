import styled from 'styled-components'

import OnProps from '../../types/onProps'

export const Wrapper = styled.div`
  border-radius: 50%;
  border: 1rem #ffffff33 solid;
  cursor: pointer;
`

export const Border = styled.div<OnProps>`
  background-color: ${({ on }) => (on ? '#ff2838' : '#b3464e')};
  transition: all 0.3s;

  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 0.5rem #ffffff22 solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Symbol = styled.div<OnProps>`
  width: 10rem;
  height: 10rem;
  transition: all 0.3s;

  opacity: ${({ on }) => (on ? 1 : 0.6)};
`
