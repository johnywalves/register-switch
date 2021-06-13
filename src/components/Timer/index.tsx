import OnProps from '../../types/onProps'
import * as S from './styles'

interface TimerProps extends OnProps {
  clock: Date
}

const Timer = ({ on, clock }: TimerProps) => (
  <S.Wrapper on={on}>
    <S.Numbers>{clock.getUTCHours().toString().padStart(2, '0')}</S.Numbers>:
    <S.Numbers>{clock.getUTCMinutes().toString().padStart(2, '0')}</S.Numbers>:
    <S.Numbers>{clock.getUTCSeconds().toString().padStart(2, '0')}</S.Numbers>.
    <S.Numbers>
      {clock.getUTCMilliseconds().toString().padStart(3, '0')}
    </S.Numbers>
  </S.Wrapper>
)

export default Timer
