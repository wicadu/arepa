
import React from 'react'

import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'

import Row from '../../layout/Row'
import Typography from '../../atoms/Typography'
import Icon from '../../atoms/Icon'
import { hexToRGBA } from '../../../utils'

export enum Types {
  Success = 'SUCCESS',
  Error = 'ERROR',
  Info = 'INFO',
  Warning = 'WARNING'
}

const _types = {
  [Types.Success]: 'check_circle',
  [Types.Error]: 'cancel',
  [Types.Info]: 'watch_later',
  [Types.Warning]: 'watch_later',
}

interface Props {
  type?: Types
  text?: string
  textColor?: string
  textSize?: number
}

const defaultProps: Partial<Props> = {
  type: Types.Info,
  textSize: 14
}

function StatusChip({ type, text, textColor, textSize }: Props) {
  const { colors } = useTheme()

  return (
    <Row gap={5}>
      <CheckIcon name={_types?.[type]} type={type} size={18} />
      <Typography
        color={textColor || colors.MAIN?.[String(type).toUpperCase()]}
        weight={700}
        size={textSize}
      >
        {text}
      </Typography>
    </Row>
  )
}

const CheckIcon = styled(Icon)`
  ${({ theme, type }) => {
    const mainColor = theme.colors.MAIN?.[String(type).toUpperCase()]

    return `
      border-radius: 25px;
      padding: 3px;
      background: ${hexToRGBA(mainColor, 0.15)};
      border: 1px solid ${mainColor};
      color: ${mainColor};
    `
  }}
`

StatusChip.defaultProps = defaultProps

export default StatusChip
