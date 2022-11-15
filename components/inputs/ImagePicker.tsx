import { useState, useMemo } from 'react';
import debounce from 'lodash/debounce'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { fetchUnsplashImages } from '@/api/actions'
import { ImageContainer, ImageList } from '@/components/layout'
import { debounceInterval } from '@/constants'

interface ImagePickerProps {
  currentImageUrl?: string,
  imageAlt: string,
}

interface UnsplashImage {
  id: string,
  url: string,
  alt: string,
}

const DatePicker = ({ currentImageUrl, imageAlt }: ImagePickerProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<UnsplashImage[]>([])

  const handleSearchDebounced = useMemo(() => debounce(async (query: string) => {
    const images = await fetchUnsplashImages(query)
    setSuggestions(images)
  }, debounceInterval), [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    handleSearchDebounced(query)
  }

  return (
    <Stack component="article" spacing={2}>
      <Stack spacing={0.5}>
        <Typography variant="subtitle2" color="grey.400">
          Task image (preview)
        </Typography>

        <ImageContainer
          src={currentImageUrl}
          alt={imageAlt}
          width={240}
          height={200}
          flexShrink={0}
        />
      </Stack>

      <TextField
        value={searchQuery}
        label="Search for image on Unsplash"
        fullWidth
        onChange={e => handleSearch(e.target.value)}
      />

      <ImageList
        width={300}
        height={300}
        images={suggestions}
      />
    </Stack>
  )
}

export default DatePicker