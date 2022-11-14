import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { ImageContainer } from '@/components/layout' 

interface ImagePickerProps {
  currentImageUrl?: string,
  imageAlt: string,
}

const UnsplashImagePicker = ({ currentImageUrl, imageAlt }: ImagePickerProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Box component="article">
      <Typography
        variant="subtitle2"
        color="grey.400"
        mb={0.5}
      >
        Task image
      </Typography>

      <Stack direction="row" spacing={2}>
        <ImageContainer
          src={currentImageUrl}
          alt={imageAlt}
          width={240}
          height={200}
          flexShrink={0}
        />
  
        <TextField
          value={searchQuery}
          label="Enter image description"
          fullWidth
          onChange={e => setSearchQuery(e.target.value)}
        />
      </Stack>
    </Box>
  )
}

export default UnsplashImagePicker