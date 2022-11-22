import { useState, useMemo } from 'react'
import debounce from 'lodash/debounce'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import { fetchUnsplashImages } from '@/api/actions'
import { ImageContainer, ImageList, Spinner } from '@/components/layout'
import { debounceInterval } from '@/constants'
import { UnsplashImage } from '@/types'

interface ImagePickerProps {
  imageAlt: string,
  onChange: (url?: string) => void,
  imageUrl?: string,
  errorMessage?: string,
}

const ImagePicker = ({ imageUrl, imageAlt, errorMessage, onChange }: ImagePickerProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<UnsplashImage[]>([])
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
  const [previewImage, setPreviewImage] = useState<UnsplashImage | null>(null)

  const handleSearchDebounced = useMemo(() => debounce(async (query: string) => {
    if (!query) return
    try {
      setIsLoadingSuggestions(true)
      const images = await fetchUnsplashImages(query)
      setSuggestions(images)
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoadingSuggestions(false)
    }
  }, debounceInterval), [])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    handleSearchDebounced(query)
  }

  const handleSelectImage = (image: UnsplashImage | null) => {
    setPreviewImage(image)
    onChange(image?.url)
  }

  return (
    <Stack component="article" spacing={2}>
      <Stack spacing={0.5}>
        <Typography variant="subtitle2" color="grey.400">
          Task image (preview)
        </Typography>

        <ImageContainer
          src={previewImage?.url || imageUrl}
          alt={imageAlt}
          width={240}
          height={200}
          flexShrink={0}
        />
      </Stack>

      <TextField
        value={searchQuery}
        label="Search for image on Unsplash"
        error={Boolean(errorMessage)}
        helperText={errorMessage}
        onChange={e => handleSearch(e.target.value)}
        fullWidth
      />

      {isLoadingSuggestions ? <Spinner /> : (
        <ImageList
          width={300}
          height={300}
          images={suggestions}
          onImageSelect={handleSelectImage}
        />
      )}
    </Stack>
  )
}

export default ImagePicker