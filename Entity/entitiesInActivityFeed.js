// @flow

import React from 'react'
import '../Styles/Entity/EntityTypes.css'
import Images from '../../Theme/Entity'
import pxTOvw from '../../Transforms/Convert_px_to_vw'
import pxTOvh from '../../Transforms/Convert_px_to_vh'

type Props = {
  userName: string,
  userProfileImage: string,
  time: string,
  followingEntityImages: Array<string>,
  followingEntityNames: Array<string>,
  leftStartPoint: number,
  topStartPoint: number
}

function EntitiesInActivityFeed(props: Props) {
  const {
    userName,
    userProfileImage,
    time,
    followingEntityImages,
    followingEntityNames,
    leftStartPoint,
    topStartPoint
  } = props

  const left = pxTOvw(leftStartPoint)
  const top = pxTOvh(topStartPoint)

  const entitiesInActivityFeedStyle = {
    top: `${top}vh`,
    left: `${left}vw`
  }

  let leftposition = pxTOvw(32)

  const entityImage = followingEntityImages.map((Image, i) => {
    leftposition += pxTOvw(60)
    return (
      <div key={i}>
        <img
          style={{ left: `${leftposition}vw` }}
          className="EntityImageInActivityFeed"
          src={Image}
          alt="EntityImageInActivityFeed"
        />
      </div>
    )
  })

  const followingNumber = followingEntityImages.length
  let followingNumberText = ''

  switch (followingNumber) {
    case 1:
      ;[followingNumberText] = followingEntityNames
      break
    case 2:
      followingNumberText = `${followingEntityNames[0]} and ${followingEntityNames[1]}`
      break
    case 3:
      followingNumberText = `${followingEntityNames[0]}, ${followingEntityNames[1]} and ${followingEntityNames[2]}`
      break
    default: {
      const leftOverNames = followingEntityImages.length - 3
      followingNumberText = `${followingEntityNames[0]}, ${followingEntityNames[1]}, ${followingEntityNames[2]} and ${leftOverNames} more`
      break
    }
  }

  return (
    <div>
      <div className="EntitiesInActivityFeedSection" style={entitiesInActivityFeedStyle}>
        <div className="PointerWhenOnHover">
          <img className="UserImage" src={userProfileImage} alt="User" />
        </div>
        <div className="UserContent">
          <div className="UserName PointerWhenOnHover">{userName} </div> &nbsp;
          <div className="MiddleText">started following </div> &nbsp;
          <div className="UserFollowingNames PointerWhenOnHover">{followingNumberText}</div>
        </div>
        <div className="PointerWhenOnHover">
          <img className="elipsis" src={Images.Elipsis} alt="elipsis" />
        </div>
        <div>
          <p className="Friends">Friends</p>
        </div>
        <div className="period" />
        <div>
          <p className="Time">{time}</p>
        </div>
        <div>{entityImage}</div>
      </div>
    </div>
  )
}

EntitiesInActivityFeed.defaultProps = {
  userName: 'Amanda Will ',
  userProfileImage: Images.User,
  time: '4:45 pm',
  followingEntityNames: [
    'India',
    'ONU',
    'Donald Trump',
    'Donald Trump',
    'Donald Trump',
    'Donald Trump'
  ],
  followingEntityImages: [
    Images.Trump,
    Images.Trump,
    Images.Trump,
    Images.Trump,
    Images.Trump,
    Images.Trump
  ],
  leftStartPoint: 0,
  topStartPoint: 0
}

export default EntitiesInActivityFeed
