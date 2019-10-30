import { IPosition } from '../../../'

const generateArrowPath = (startPos: IPosition, endPos: IPosition): string => {
  console.log("----startPos: ", startPos)
  console.log("----endPos: ", endPos)

  if (!endPos.portType) {
    return ""
  }
  if (endPos.portType === "top") {
    return `M ${endPos.x} ${endPos.y} L ${endPos.x - 10} ${endPos.y - 20} L ${endPos.x + 10 } ${endPos.y - 20} Z`
  }
  if (endPos.portType === "right") {
    return `M ${endPos.x} ${endPos.y} L ${endPos.x + 20} ${endPos.y - 10} L ${endPos.x + 20 } ${endPos.y + 10} Z`
  }
  if (endPos.portType === "bottom") {
    return `M ${endPos.x} ${endPos.y} L ${endPos.x - 10} ${endPos.y + 20} L ${endPos.x + 10 } ${endPos.y + 20} Z`
  }
  if (endPos.portType === "left") {
    return `M ${endPos.x} ${endPos.y} L ${endPos.x - 20} ${endPos.y - 10} L ${endPos.x - 20 } ${endPos.y + 10} Z`
  }
}

export default generateArrowPath;