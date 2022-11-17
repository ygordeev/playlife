export const capitalize = (str: string) => str ? str[0].toUpperCase() + str.slice(1) : ''

export const convertRgbToHex = (r: number, g: number, b: number) => {
  return [r, g, b].reduce((acc, color) => {
    acc += color.toString(16).padStart(2, '0')
    return acc
  }, '#')
}
