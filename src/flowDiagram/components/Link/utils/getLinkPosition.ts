import { INode, IPosition } from '../../../'

export const getLinkPosition = (node: INode, portId: string): IPosition => {
  const port = node.ports[portId]
  let nodeWidth = (!!node && !!node.size) ? node.size.width : 0
  let nodeHeight = (!!node && !!node.size) ? node.size.height : 0
  return {
    x: node.position.x + (port.position ? port.position.x : 0),
    y: node.position.y + (port.position ? port.position.y : 0),
    portType: port.type,
    nodeWidth,
    nodeHeight
  }
}