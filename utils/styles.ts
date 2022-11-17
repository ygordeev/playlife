export const getLineClampStyle = (linesToShow: number) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: linesToShow.toString(),
  WebkitBoxOrient: 'vertical',
})

export const getTextGradientStyle = (linearGradient: string) => ({
  background: `linear-gradient(${linearGradient})`,
  backgroundClip: 'text',
  textFillColor: 'transparent',
})
