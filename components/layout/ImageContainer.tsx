import Image from 'next/image'
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type ImageContainerProps = BoxProps & {
  width: number,
  height: number,
  src?: string,
  alt?: string,
  rounded?: boolean,
}

const imageContainerStyle = (width: number, height: number, isFilled: boolean) => ({
  width,
  height,
  display: 'grid',
  placeItems: 'center',
  border: isFilled ? 0 : 1,
  borderRadius: '10px',
  borderColor: 'grey.400',
  flexShrink: 0,
})

const ImagePlaceholder = (props: ImageContainerProps) => {
  const { width, height, src, alt, ...boxProps } = props
  const isFilled = Boolean(src)
  const containerStyle = imageContainerStyle(width, height, isFilled)

  return (
    <Box sx={containerStyle} {...boxProps}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ borderRadius: '10px' }}
        />
      ) : <Typography color="grey.400">No Image Selected</Typography>}
    </Box>
  )
}

export default ImagePlaceholder