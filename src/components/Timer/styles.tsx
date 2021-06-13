import styled from 'styled-components'

import OnProps from '../../types/onProps'

export const Wrapper = styled.div<OnProps>`
  position: absolute;
  bottom: 2.5rem;
  right: 5rem;

  font-size: 5rem;
  font-weight: 600;
  color: ${({ on }) => (on ? '#000000ac' : '#ffffffac')};

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Numbers = styled.div`
  width: 6.5rem;
`
