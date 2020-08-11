// @flow

import React from 'react'
import Images from '../../Theme/Buttons'
import '../Styles/Buttons/ButtonStyles.css'

type Props = {
  activityType: string
}

function ActionBubble(props: Props) {
  const { activityType } = props

  let text

  if (activityType === 'Share') {
    text = Images.Share
  } else if (activityType === 'React') {
    text = Images.React
  } else {
    text = Images.Raven
  }

  return (
    <div className="activityButtonBorder">
      <img className="activityButton" src={text} alt="ActionButton" />
    </div>
  )
}

ActionBubble.defaultProps = {
  activityType: 'Share'
}

export default ActionBubble
