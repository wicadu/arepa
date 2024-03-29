import React from 'react'
import styled from '@emotion/styled'

type ItemsAlign = 'top' | 'center' | 'bottom' | 'space-between'

interface Props {
  children: React.ReactNode
  align?: ItemsAlign
  gap: number
  onClick?: () => void
  flex?: number
}

const defaultProps: Partial<Props> = {
  children: 'div',
  gap: 0
}

function Column({
  children,
  align,
  gap,
  flex,
  onClick
}: Props) {
  return (
    <Container
      align={align}
      gap={gap}
      flex={flex}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

const Container = styled.div<Partial<Props>>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ gap }) => gap ? `gap: ${gap}px;` : ''}

  ${({ flex }) => flex ? `flex: ${flex};` : ''}

  ${({ align }) => {
    let styles: string = ''

    if (align === 'top') styles += 'justify-content: flex-start;'
    if (align === 'center') styles += 'justify-content: center;'
    if (align === 'bottom') styles += 'justify-content: flex-end;'
    if (align === 'space-between') styles += 'justify-content: space-between;'

    if (styled.length === 0) styles += 'flex: 1;'

    return styles
  }}
`



Column.defaultProps = defaultProps

export default Column
