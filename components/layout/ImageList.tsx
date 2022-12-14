import { memo, useState } from 'react'
import Image from 'next/image'
import MuiImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Typography from '@mui/material/Typography'
import { UnsplashImage } from '@/types'

interface ImageListProps {
  width: number,
  height: number,
  images: UnsplashImage[],
  onImageSelect: (image: UnsplashImage | null) => void,
}

const getListItemStyle = (highlighted: boolean) => ({
  border: highlighted ? 3 : 0,
  borderColor: 'success.dark',
  cursor: 'pointer',
})

const ImageList = ({ width, height, images, onImageSelect }: ImageListProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)  

  if (images.length === 0) return (
    <Typography color="grey.400" px={1}>
      No Images Found
    </Typography>
  )

  const handleImageSelect = (index: number) => {
    const isToggling = index === selectedIndex
    onImageSelect(isToggling ? null : images[index])
    setSelectedIndex(isToggling ? null : index)
  }

  return (
    <MuiImageList cols={5}>
      {images.map((image, index) => (
        <ImageListItem
          key={image.id}
          sx={getListItemStyle(index === selectedIndex)}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={width}
            height={height}
            loading="lazy"
            objectFit="cover"
            onClick={() => handleImageSelect(index)}
          />
        </ImageListItem>
      ))}
    </MuiImageList>
  )
}

export default memo(ImageList)
