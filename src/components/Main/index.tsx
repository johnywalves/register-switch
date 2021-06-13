import { useState, useEffect, useCallback, useRef } from 'react'

import Switch from '../Switch'
import Timer from '../Timer'
import * as S from './styles'

const Main = () => {
  const intervalRef = useRef<NodeJS.Timeout>()

  const [on, setOn] = useState<boolean>(false)
  const [clock, setClock] = useState<Date>(new Date(0))

  useEffect(() => {
    if (localStorage.getItem('register')) {
      const register = JSON.parse(String(localStorage.getItem('register')))

      if (register.on) {
        const datetime: string = register.datetime
        const time: Date = new Date(
          new Date().getTime() -
            new Date(datetime).getTime() +
            new Date(register.tick).getTime()
        )
        setClock(time)
      } else {
        setClock(new Date(new Date(register.tick).getTime()))
      }

      setOn(register.on)
    }
  }, [])

  const toggleSwitch = useCallback(() => {
    localStorage.setItem(
      'register',
      JSON.stringify({ datetime: new Date(), tick: clock, on: !on })
    )

    setOn(!on)
  }, [clock, on, setOn])

  useEffect(() => {
    if (on) {
      intervalRef.current = setInterval(() => {
        setClock(new Date(clock.getTime() + 10))
      }, 10)
    }

    return () => intervalRef.current && clearInterval(intervalRef.current)
  }, [intervalRef, on, clock, setClock])

  return (
    <S.Wrapper on={on}>
      <Switch on={on} toggleSwitch={toggleSwitch} />
      <Timer on={on} clock={clock} />
    </S.Wrapper>
  )
}

export default Main
