import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
import type { Gif } from './giphy' // ajuste o caminho conforme sua estrutura

interface FavoritesState {
    favorites: Gif[]
}

export const useFavoritesStore = defineStore('favorites', {
    state: (): FavoritesState => ({
        favorites: LocalStorage.getItem('favorites') as Gif[] || []
    }),
    actions: {
        addFavorite(gif: Gif): void {
            if (!this.favorites.find(f => f.id === gif.id)) {
                this.favorites.push(gif)
                LocalStorage.set('favorites', this.favorites)
            }
        },
        removeFavorite(id: string): void {
            this.favorites = this.favorites.filter(f => f.id !== id)
            LocalStorage.set('favorites', this.favorites)
        }
    }
})