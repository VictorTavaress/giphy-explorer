<template>
  <div>
    <h2>Favoritos</h2>
    <div v-if="favorites.favorites.length === 0">Nenhum favorito.</div>
    <div class="grid grid-cols-4 md:grid-cols-4 gap-4">
      <GifCard v-for="gif in favorites.favorites" :key="gif.id" :gif="gif" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoritesStore } from 'stores/favorites';
import GifCard from 'src/components/GifCardItem.vue';

const favorites = useFavoritesStore();
</script>
