import * as React from 'react'
import { generateLinkPath, IConfig, ILink, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLabelDoubleClick, IPosition } from '../../'
import generateArrowPath from './utils/generateArrowPath'

export interface ILinkDefaultProps {
  config: IConfig
  link: ILink
  startPos: IPosition
  endPos: IPosition
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLinkClick: IOnLinkClick
  onLabelDoubleClick: IOnLabelDoubleClick
  isHovered: boolean
  isSelected: boolean
}

export const LinkDefault = ({
  config,
  link,
  startPos,
  endPos,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLabelDoubleClick,
  onLinkClick,
  isHovered,
  isSelected,
}: ILinkDefaultProps) => {
  const points = generateLinkPath(startPos, endPos)
  const arrow = generateArrowPath(startPos, endPos)

  console.log("arrow: ", arrow)

  return (
    <svg style={{ overflow: 'visible', position: 'absolute', cursor: 'pointer', left: 0, right: 0 }}>
      <circle
        r="4"
        cx={startPos.x}
        cy={startPos.y}
        fill="cornflowerblue"
      />
      {/* Main line */}
      <path
        d={points}
        stroke="cornflowerblue"
        strokeWidth="3"
        fill="none"
      />
      {/* Arrow */}
      <path
        d={arrow}
        stroke="cornflowerblue"
        strokeWidth="3"
        fill="cornflowerblue"
      />
      {/* Thick line to make selection easier */}
      <path
        d={points}
        stroke="cornflowerblue"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
        strokeOpacity={(isHovered || isSelected) ? 0.1 : 0}
        onMouseEnter={() => onLinkMouseEnter({ config, linkId: link.id })}
        onMouseLeave={() => onLinkMouseLeave({ config, linkId: link.id })}
        onDoubleClick={() => onLabelDoubleClick({linkId: link.id})}
        onClick={(e) => {
          onLinkClick({ config, linkId: link.id })
          e.stopPropagation()
        } }
      />
      <circle
        r="4"
        cx={endPos.x}
        cy={endPos.y}
        fill="cornflowerblue"
      />
    </svg>
  )
}
