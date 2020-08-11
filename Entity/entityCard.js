// @flow

import React from 'react'
import '../Styles/Entity/EntityTypes.css'
import Images from '../../Theme/Entity'
import RectangleButton from '../Buttons/defaultButton'
import ActionBubble from '../Buttons/actionBubble'
import pxTOvw from '../../Transforms/Convert_px_to_vw'
import pxTOvh from '../../Transforms/Convert_px_to_vh'

type Props = {
  entityName: string,
  entityDescription: string,
  entityImg: string,
  entityNumFollowing: number,
  entityIsFollowing: boolean,
  entityDetail: string,
  leftStartPoint: number,
  topStartPoint: number
}

function EntityCard(props: Props) {
  const {
    entityName,
    entityDescription,
    entityImg,
    entityIsFollowing,
    entityNumFollowing,
    entityDetail,
    leftStartPoint,
    topStartPoint
  } = props

  const left = pxTOvw(leftStartPoint)
  const top = pxTOvh(topStartPoint)

  const entityCardStyle = {
    top: `${top}vh`,
    left: `${left}vw`
  }

  let buttonInnerText = ''
  let isBordered = false

  if (entityIsFollowing === true) {
    buttonInnerText = 'Following'
  } else {
    buttonInnerText = 'Follow'
    isBordered = true
  }

  return (
    <div className="entitycard" style={entityCardStyle}>
      <div>
        <img className="entityimg" src={entityImg} alt="Entity" />
      </div>
      <div>
        <p className="entityname">{entityName}</p>
      </div>
      <div>
        <img className="entitytrending" src={Images.TrendingIcon} alt="Trending Icon" />
      </div>
      <div>
        <p className="entitydescription">{entityDescription}</p>
      </div>
      <div>
        <p className="numFollowing">
          {entityNumFollowing < 1000
            ? `${entityNumFollowing} Following`
            : `${Math.floor(entityNumFollowing / 1000)}K Following`}
        </p>
      </div>
      <div className="PointerWhenOnHover share">
        <ActionBubble activityType="Share" />
      </div>
      <div className="PointerWhenOnHover react">
        <ActionBubble activityType="React" />
      </div>
      <div className="PointerWhenOnHover isfollowing">
        <RectangleButton
          title={buttonInnerText}
          height={50}
          width={204}
          radius={38.5}
          fontSize={20}
          bordered={isBordered}
        />
      </div>
      <div>
        <p className="DetailTitle">Details</p>
      </div>
      <div>
        <p className="entitydetail">{entityDetail}</p>
      </div>
    </div>
  )
}

EntityCard.defaultProps = {
  entityName: 'Donald Trump',
  entityDescription: 'President of the USA',
  entityImg: Images.Trump,
  entityNumFollowing: 54000,
  entityIsFollowing: false,
  entityDetail:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  leftStartPoint: 0,
  topStartPoint: 0
}

export default EntityCard
