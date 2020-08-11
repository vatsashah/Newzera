// @flow

import React from 'react'
import '../Styles/Buttons/ButtonStyles.css'
import pxTOvw from '../../Transforms/Convert_px_to_vw'
import pxTOvh from '../../Transforms/Convert_px_to_vh'

type Props = {
  title: string,
  disabled: boolean,
  bordered: boolean,
  filled: boolean,
  height: number,
  width: number,
  radius: number,
  fontSize: number
}

function RectangleButton(props: Props) {
  const { title, disabled, bordered, filled, height, width, radius, fontSize } = props

  let StyleTypeText
  let StyleTypeBackground
  let textFromTop = (height - fontSize) / 2
  const buttonHeight = pxTOvh(height)
  const buttonWidth = pxTOvw(width)
  const buttonFont = pxTOvh(fontSize)
  const buttonRadius = pxTOvh(radius)
  textFromTop = pxTOvh(textFromTop)

  const DefaultButtonOuterStyle = {
    height: `${buttonHeight}vh`,
    width: `${buttonWidth}vw`,
    borderRadius: `${buttonRadius}vh`
  }

  const DefaultButtonInnerStyle = {
    fontSize: `${buttonFont}vh`,
    top: `${textFromTop}vh`,
    width: `${buttonWidth}vw`,
    height: `${buttonFont}vw`
  }

  if (disabled) {
    StyleTypeText = 'RectangleDisabledText'
    StyleTypeBackground = 'RectangleDisabledBackground'
  } else if (bordered) {
    StyleTypeText = 'RectangleBorderedText'
    StyleTypeBackground = 'RectangleBorderedBackground'
  } else if (filled) {
    StyleTypeText = 'RectangleFilledText'
    StyleTypeBackground = 'RectangleFilledBackground'
  } else {
    StyleTypeText = 'RectangleDefaultText'
    StyleTypeBackground = 'RectangleDefaultBackground'
  }

  return (
    <div style={DefaultButtonOuterStyle} className={StyleTypeBackground}>
      <p style={DefaultButtonInnerStyle} className={StyleTypeText}>
        {title}
      </p>
    </div>
  )
}

RectangleButton.defaultProps = {
  title: 'Button',
  disabled: false,
  bordered: false,
  filled: false,
  height: 50,
  width: 300,
  radius: 0,
  fontSize: 18
}

export default RectangleButton
