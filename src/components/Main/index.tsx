import { useState } from 'react'

import Switch from '../Switch'
import Timer from '../Timer'
import * as S from './styles'

const Main = () => {
  const [on, SetOn] = useState(false)

  return (
    <S.Wrapper on={on}>
      <Switch on={on} SetOn={SetOn} />
      <Timer on={on} />
    </S.Wrapper>
  )
}

export default Main
