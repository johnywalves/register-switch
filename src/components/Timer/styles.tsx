import styled from 'styled-components'

interface OnProps {
  on: boolean
}

export const Wrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 3rem;

  font-size: 5rem;
  font-weight: 600;
  color: ${({ on }: OnProps) => (on ? '#000000' : '#ffffff')};

  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Numbers = styled.div`
  width: 6.5rem;
`
