import styled from 'styled-components'

interface WrapperProps {
  on: boolean
}

export const Wrapper = styled.main`
  background-color: ${({ on }: WrapperProps) => (on ? '#dfdfdf' : '#2d2838')};
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`
