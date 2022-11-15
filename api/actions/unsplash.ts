import { unsplashApi, paths } from '@/api'

interface UnsplashResponse {
  results: Array<{
    id: string,
    alt_description: string,
    urls: {
      small: string,
    }
  }>
}

export const fetchUnsplashImages = async (query: string) => {
  const { data }: { data: UnsplashResponse } = await unsplashApi.get(paths.searchPhotos, {
    params: { query }
  })

  return data.results?.map(image => ({
    id: image.id,
    url: image.urls?.small,
    alt: image.alt_description,
  })) || []
}
