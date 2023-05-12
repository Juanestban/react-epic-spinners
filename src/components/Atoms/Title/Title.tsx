import { HTMLProps } from 'react'

import { H1 } from './styles'

export const Title = ({
  style,
  children,
  ...props
}: HTMLProps<HTMLHeadingElement>) => {
  return (
    <H1 style={style} {...props}>
      {children}
    </H1>
  )
}
