import { defineStore } from 'pinia'
import { api } from 'boot/axios'

// Tipos para os dados do GIPHY
export interface GifImage {
  url: string
  width: string
  height: string
}

export interface GifImages {
  fixed_height: GifImage
  [key: string]: GifImage // agora cada chave é um GifImage, não any
}

export interface Gif {
  id: string
  title: string
  images: GifImages
  // adicione outros campos conhecidos se quiser, ou remova o [key: string]: any
}

export interface Category {
  name: string
  // adicione outros campos conhecidos se quiser, ou remova o [key: string]: any
}

interface GiphyState {
  gifs: Gif[]
  categories: Category[]
  loading: boolean
}

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const useGiphyStore = defineStore('giphy', {
  state: (): GiphyState => ({
    gifs: [],
    categories: [],
    loading: false,
  }),
  actions: {
    async fetchTrending(offset = 0): Promise<Gif[]> {
      this.loading = true;
      const res = await api.get('gifs/trending', {
        params: { api_key: API_KEY, limit: 25, offset }
      });
      this.loading = false;
      return res.data.data as Gif[];
    },
    async searchGifs(query: string, offset = 0): Promise<Gif[]> {
      this.loading = true;
      const res = await api.get('gifs/search', {
        params: { api_key: API_KEY, q: query, limit: 25, offset }
      });
      this.loading = false;
      return res.data.data as Gif[];
    },
    async fetchCategories(): Promise<void> {
      const res = await api.get('gifs/categories', {
        params: { api_key: API_KEY }
      })
      this.categories = res.data.data as Category[]
    },
    // Para carregar a primeira página (substitui os GIFs)
    // No store, já como sugerido antes:
    async fetchByCategory(category: string): Promise<void> {
      this.loading = true
      const res = await api.get('gifs/search', {
        params: { api_key: API_KEY, q: category, limit: 25, offset: 0 }
      })
      this.gifs = res.data.data as Gif[]
      this.loading = false
    },
    async fetchMoreByCategory(category: string, offset: number): Promise<Gif[]> {
      this.loading = true
      const res = await api.get('gifs/search', {
        params: { api_key: API_KEY, q: category, limit: 25, offset }
      })
      const newGifs = res.data.data as Gif[]
      this.gifs = [...this.gifs, ...newGifs]
      this.loading = false
      return newGifs
    }
  }
})