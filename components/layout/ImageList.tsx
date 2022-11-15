import Image from 'next/image'
import MuiImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import { UnsplashImage } from '@/types'

interface ImageListProps {
  width: number,
  height: number,
  images: UnsplashImage[],
}

const ImageList = ({ width, height, images }: ImageListProps) => {
  if (images.length === 0) return (
    <Typography color="grey.400" px={1}>
      No Images Found
    </Typography>
  )

  return (
    <MuiImageList cols={5}>
      {images.map(image => (
        <ImageListItem key={image.id}>
          <Image
            src={image.url}
            alt={image.alt}
            width={width}
            height={height}
            loading="lazy"
            objectFit="cover"
          />
        </ImageListItem>
      ))}
    </MuiImageList>
  )
}

export default ImageList