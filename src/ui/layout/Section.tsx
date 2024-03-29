import React, { ReactNode, ReactElement } from 'react'

import Typography from '../atoms/Typography'
import Row from './Row'
import { Button } from '..'

interface Props {
  children: ReactNode | ReactElement | ReactElement[]
  title: string
  description?: string
  rightChild?: string | ReactElement
}

function Section({ title, description, rightChild, children }: Props) {
  return (
    <section>
      <Row align='space-between'>
        <Typography type='title-3' size={16}>{title}</Typography>
        <div>{rightChild}</div>
      </Row>
      <Typography type='description'>{description}</Typography>

      {children}
    </section>
  )
}

interface RightChildAsButtonProps {
  onClick: () => void
  text: string
  hide?: boolean
}

function RightChildAsButton({ onClick, text, hide }: RightChildAsButtonProps) {
  if (hide) return

  return <Button type='link' onClick={onClick}>{text}</Button>
}

Section.RightChildAsButton = RightChildAsButton

export default Section
