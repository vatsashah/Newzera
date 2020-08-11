// @flow

import React from 'react'
import '../Styles/Entity/EntityTypes.css'
import Images from '../../Theme/Entity'
import pxTOvw from '../../Transforms/Convert_px_to_vw'
import pxTOvh from '../../Transforms/Convert_px_to_vh'

type Props = {
  entityThumbImg: Array<string>,
  leftStartPoint: number,
  topStartPoint: number
}

function Thumb(props: Props) {
  const { entityThumbImg, leftStartPoint, topStartPoint } = props

  let leftposition = 0
  const top = pxTOvh(topStartPoint)

  leftposition = pxTOvw(leftStartPoint - 35)

  const ThumbImage = entityThumbImg.map((Image, i) => {
    leftposition += pxTOvw(35)
    return (
      <div key={i}>
        <img
          style={{ top: `${top}vh`, left: `${leftposition}vw` }}
          className="ThumbImage"
          src={Image}
          alt="Thumb"
        />
      </div>
    )
  })

  return <div className="ThumbContainer">{ThumbImage}</div>
}

Thumb.defaultProps = {
  entityThumbImg: [Images.Thumb1, Images.Thumb2, Images.Thumb3, Images.Thumb4],
  leftStartPoint: 0,
  topStartPoint: 0
}

export default Thumb
