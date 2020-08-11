// @flow

import React from 'react'
import Images from '../../Theme/Buttons'
import '../Styles/Buttons/ButtonStyles.css'

type Props = {
  disabled: boolean,
  filled: boolean
}

function CircleEllipse(props: Props) {
  const { disabled, filled } = props

  let styleType
  let ImgType

  if (disabled === true) {
    styleType = 'disabled'
    ImgType = Images.RightArrowUncoloured
  } else if (filled === true) {
    styleType = 'filled'
    ImgType = Images.RightArrowUncoloured
  } else {
    styleType = 'default'
    ImgType = Images.RightArrowColoured
  }

  return (
    <div className={styleType}>
      <img src={ImgType} alt="Greater than symbol" className="arrowFix" />
    </div>
  )
}

CircleEllipse.defaultProps = {
  disabled: false,
  filled: false
}

export default CircleEllipse
