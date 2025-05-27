<template>
  <div class="bg-white rounded shadow m-2">
    <q-img :src="gif.images.fixed_height.url" :alt="gif.title" :ratio="1">
      <div
        class="absolute-bottom text-subtitle1 text-center transition-colors"
        :style="
          isFavorite
            ? 'background-color: rgb(220 38 38 / 0.5)'
            : 'background-color: rgb(0 0 0 / 0.8)'
        "
      >
        <q-btn
          @click="toggleFavorite"
          color="red"
          :icon="isFavorite ? 'favorite' : 'favorite_border'"
          flat
          round
          size="lg"
          class="mt-2"
        />
      </div>
    </q-img>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFavoritesStore } from 'stores/favorites';
import type { Gif } from 'stores/giphy';

const props = defineProps<{ gif: Gif }>();
const favorites = useFavoritesStore();

const isFavorite = computed(() => favorites.favorites.some((f) => f.id === props.gif.id));

function toggleFavorite() {
  if (isFavorite.value) favorites.removeFavorite(props.gif.id);
  else favorites.addFavorite(props.gif);
}
</script>
