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
  entityIsFollowing: Array<boolean>,
  leftStartPoint: number,
  topStartPoint: number
}

function SimilarEntityCard(props: Props) {
  const { entityName, entityImg, entityIsFollowing, leftStartPoint, topStartPoint } = props

  // Carousel function starts from here

  function scrollLeft() {
    const card = document.getElementsByClassName('row_entities')[0]
    const step = window.outerWidth / 2
    card.scrollLeft -= step
  }

  function scrollRight() {
    const card = document.getElementsByClassName('row_entities')[0]
    const step = window.outerWidth / 2
    card.scrollLeft += step
  }

  function getScrollVal() {
    setTimeout(() => {
      const card = document.getElementsByClassName('row_entities')[0]
      const element = document.getElementsByClassName('left_arrow')[0]
      if (card.scrollLeft === 0) {
        element.style.display = 'none'
      } else {
        element.style.display = 'flex'
      }
      const element2 = document.getElementsByClassName('right_arrow')[0]
      const right = card.scrollWidth - (card.scrollLeft + card.clientWidth) + 1
      if (right <= 2) {
        element2.style.display = 'none'
      } else {
        element2.style.display = 'flex'
      }
    }, 550)
  }

  getScrollVal()

  // Carousel function ends here

  const left = pxTOvw(leftStartPoint)
  const top = pxTOvh(topStartPoint)

  const similarEntityCardStyle = {
    top: `${top}vh`,
    left: `${left}vw`
  }

  let buttonInnerText = ''
  let isBordered = false

  const similarCard = entityName.map((card, i) => {
    isBordered = false
    if (entityIsFollowing[i] === true) {
      buttonInnerText = 'Following'
    } else {
      buttonInnerText = 'Follow'
      isBordered = true
    }
    return (
      <div className="wrap" key={i}>
        <div className="entity_card">
          <div>
            <img className="similarEntityImage" src={entityImg[i]} alt="Entity" />
          </div>
          <div>
            <p className="similarEntityName">{card}</p>
          </div>
          <div className="PointerWhenOnHover similarIsfollowing">
            <RectangleButton
              title={buttonInnerText}
              height={35}
              width={112}
              radius={38.5}
              fontSize={15}
              bordered={isBordered}
            />
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="SimilarEntityCardContainer" style={similarEntityCardStyle}>
      <div>
        <p className="SimilarEntityCardContainerHeading">Similar Entities</p>
      </div>
      <div className="PointerWhenOnHover">
        <p className="SimilarEntityViewAll">View all</p>
      </div>
      <div className="Left30pxSpace" />
      <div className="Right30pxSpace" />
      <div className="row_entities" onScroll={getScrollVal}>
        <div className="ExtraSpace1">
          <div className="ExtraSpace2" />
        </div>
        {similarCard}
        <div className="ExtraSpace1">
          <div className="ExtraSpace2" />
        </div>
      </div>
      <div
        className="left_arrow scroll_button"
        role="button"
        tabIndex="0"
        onClick={scrollLeft}
        onKeyUp={scrollLeft}>
        <i className="arrow left" />
      </div>
      <div
        className="right_arrow scroll_button"
        role="button"
        tabIndex="0"
        onClick={scrollRight}
        onKeyDown={scrollRight}>
        <i className="arrow right" />
      </div>
    </div>
  )
}

SimilarEntityCard.defaultProps = {
  entityName: [
    'India',
    'United States of America',
    'India',
    'United States of America',
    'India',
    'Trump',
    'India',
    'United States of America',
    'India',
    'United States of America',
    'India',
    'Trump'
  ],
  entityImg: [
    Images.India,
    Images.USA,
    Images.India,
    Images.USA,
    Images.India,
    Images.Trump,
    Images.India,
    Images.USA,
    Images.India,
    Images.USA,
    Images.India,
    Images.Trump
  ],
  entityIsFollowing: [false, false, true, true, true, false, false, false, true, true, true, false],
  leftStartPoint: 0,
  topStartPoint: 0
}

export default SimilarEntityCard
