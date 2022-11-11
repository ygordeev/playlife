export const getLineClampStyle = (linesToShow: number) => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: linesToShow.toString(),
  WebkitBoxOrient: 'vertical',
})
