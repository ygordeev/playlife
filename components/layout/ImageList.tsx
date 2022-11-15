import Image from 'next/image'
import MuiImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

interface ImageListProps {
  width: number,
  height: number,
  images: Array<{
    id: string,
    url: string,
    alt: string,
  }>
}

const ImageList = ({ width, height, images }: ImageListProps) => {
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