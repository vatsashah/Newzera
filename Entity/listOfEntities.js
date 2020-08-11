// @flow

import React from 'react'
import '../Styles/Entity/EntityTypes.css'
import Images from '../../Theme/Entity'
import RectangleButton from '../Buttons/defaultButton'
import pxTOvw from '../../Transforms/Convert_px_to_vw'
import pxTOvh from '../../Transforms/Convert_px_to_vh'

type Props = {
  entityName: Array<string>,
  entityImg: Array<string>,
  entityNumFollowing: Array<number>,
  entityIsFollowing: Array<boolean>,
  leftStartPoint: number,
  topStartPoint: number
}

function EntityList(props: Props) {
  const {
    entityName,
    entityImg,
    entityIsFollowing,
    entityNumFollowing,
    leftStartPoint,
    topStartPoint
  } = props

  let topPosition = pxTOvh(topStartPoint - 182)
  let buttonInnerText = ''
  let isBordered = false

  const left = pxTOvw(leftStartPoint)

  const listOfEntities = entityName.map((card, i) => {
    topPosition += pxTOvh(182)
    isBordered = false
    if (entityIsFollowing[i] === true) {
      buttonInnerText = 'Following'
    } else {
      buttonInnerText = 'Follow'
      isBordered = true
    }
    return (
      <div
        key={i}
        className="EntityListCard"
        style={{ left: `${left}vw`, top: `${topPosition}vh` }}>
        <div>
          <img className="EntityListImage" src={entityImg[i]} alt="Entity" />
        </div>
        <div>
          <p className="EntityListName">{card}</p>
        </div>
        <div>
          <p className="EntityListNumFollowing">
            {entityNumFollowing[i] < 1000
              ? `${entityNumFollowing[i]} Following`
              : `${Math.floor(entityNumFollowing[i] / 1000)}K Following`}
          </p>
        </div>
        <div className="PointerWhenOnHover EntityInListIsfollowing">
          <RectangleButton
            title={buttonInnerText}
            height={35}
            width={160}
            radius={38.5}
            fontSize={18}
            bordered={isBordered}
          />
        </div>
      </div>
    )
  })

  return <div>{listOfEntities}</div>
}

EntityList.defaultProps = {
  entityName: ['India', 'United States of America'],
  entityImg: [Images.India, Images.USA],
  entityNumFollowing: [52000, 52000],
  entityIsFollowing: [false, true],
  leftStartPoint: 0,
  topStartPoint: 0
}

export default EntityList
