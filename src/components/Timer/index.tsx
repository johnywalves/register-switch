import { useEffect, useState, useRef } from 'react'

import * as S from './styles'

interface SwitchProps {
  on: boolean
}

const Timer = ({ on }: SwitchProps) => {
  const intervalRef = useRef<NodeJS.Timeout>()

  const [clock, setClock] = useState(0)

  useEffect(() => {
    if (intervalRef && on) {
      intervalRef.current = setInterval(() => {
        setClock(clock + 1)
      }, 10)
    }

    return () => intervalRef.current && clearInterval(intervalRef.current)
  }, [intervalRef, on, clock])

  const decaseconds = ((clock % 100) + '').padStart(2, '0')
  const seconds = (Math.trunc(clock / 100) + '').padStart(2, '0')
  const minutes = (Math.trunc(clock / (60 * 100)) + '').padStart(2, '0')

  return (
    <S.Wrapper on={on}>
      <S.Numbers>{minutes}</S.Numbers>:<S.Numbers>{seconds}</S.Numbers>.
      <S.Numbers>{decaseconds}</S.Numbers>
    </S.Wrapper>
  )
}

export default Timer
