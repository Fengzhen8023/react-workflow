import * as React from 'react'
import { IConfig, ILink, INode, IOnLinkClick, IOnLinkMouseEnter, IOnLinkMouseLeave, IOnLabelDoubleClick } from '../../'
import { noop } from '../../utils'
import { ILinkDefaultProps, LinkDefault } from './Link.default'
import { getLinkPosition } from './utils'

export interface ILinkWrapperProps {
  config: IConfig,
  link: ILink
  linkLabel: string
  isSelected: boolean
  isHovered: boolean
  isAllowAddLinkLabel: boolean
  fromNode: INode
  toNode: INode | undefined
  onLinkMouseEnter: IOnLinkMouseEnter
  onLinkMouseLeave: IOnLinkMouseLeave
  onLabelDoubleClick: IOnLabelDoubleClick
  onLinkClick: IOnLinkClick
  Component?: React.FunctionComponent<ILinkDefaultProps>
}

export const LinkWrapper = React.memo(({
  config,
  Component = LinkDefault,
  link,
  onLinkMouseEnter,
  onLinkMouseLeave,
  onLinkClick,
  onLabelDoubleClick,
  isAllowAddLinkLabel,
  isSelected,
  isHovered,
  fromNode,
  toNode,
}: ILinkWrapperProps) => {
  const startPos = getLinkPosition(fromNode, link.from.portId)

  const endPos = toNode && link.to.portId
    ? getLinkPosition(toNode, link.to.portId)
    : link.to.position

  // Don't render the link yet if there is no end pos
  // This will occur if the link was just created
  if (!endPos) {
    return null
  }

  return (
    <Component
      config={config}
      link={link}
      startPos={startPos}
      endPos={endPos}
      onLinkMouseEnter={config.readonly ? noop : onLinkMouseEnter}
      onLinkMouseLeave={config.readonly ? noop : onLinkMouseLeave}
      onLabelDoubleClick={onLabelDoubleClick}
      onLinkClick={config.readonly ? noop : onLinkClick}
      isSelected={isSelected}
      isHovered={isHovered}
      isAllowAddLinkLabel={isAllowAddLinkLabel}
    />
  )
})
