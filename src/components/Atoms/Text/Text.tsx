import { HTMLProps } from 'react'

import { Paragraph } from './styles'

export const Text = ({
  children,
  style,
  ...props
}: HTMLProps<HTMLParagraphElement>) => {
  return (
    <Paragraph style={style} {...props}>
      {children}
    </Paragraph>
  )
}
