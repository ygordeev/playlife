export const capitalize = (str: string) => str ? str[0].toUpperCase() + str.slice(1) : ''

export const convertRgbToHex = (r: number, g: number, b: number) => {
  return [r, g, b].reduce((acc, color) => {
    acc += color.toString(16).padStart(2, '0')
    return acc
  }, '#')
}

export const padArrayStart = (arr: any[], length?: number, placeholder?: any) => {
  const arrCopy = [...arr]
  const currentLength = arrCopy.length
  if (!length || length <= currentLength) return arrCopy
  const lengthDifference = length - currentLength
  arrCopy.splice(0, 0, ...Array(lengthDifference).fill(null).map(() => placeholder))
  return arrCopy
}
