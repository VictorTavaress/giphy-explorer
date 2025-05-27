<template>
  <div>
    <q-input
      v-model="search"
      standout
      @keyup.enter="onSearch"
      placeholder="Buscar GIFs..."
      class="input mb-4"
    />
    <q-inner-loading
      :showing="giphy.loading && gifs.length === 0"
      label="Carregando GIFs..."
      label-class="text-gray"
      label-style="font-size: 1.1em"
    />
    <q-infinite-scroll
      @load="loadMore"
      :offset="100"
      v-show="gifs.length > 0 && !giphy.loading"
      class="q-pt-md"
    >
      <div class="grid grid-cols-4 gap-6 m-4">
        <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif" />
      </div>
    </q-infinite-scroll>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGiphyStore } from 'stores/giphy';
import GifCard from 'src/components/GifCardItem.vue';
import type { Gif } from 'stores/giphy';

const giphy = useGiphyStore();
const search = ref('');
const gifs = ref<Gif[]>([]);
const offset = ref(0);
const limit = 25;

onMounted(async () => {
  gifs.value = [];
  offset.value = 0;
  await loadMore();
});

async function onSearch() {
  gifs.value = [];
  offset.value = 0;
  await loadMore();
}

async function loadMore(index?: number, done?: () => void) {
  let newGifs: Gif[] = [];
  if (search.value) {
    newGifs = await giphy.searchGifs(search.value, offset.value);
  } else {
    newGifs = await giphy.fetchTrending(offset.value);
  }
  gifs.value.push(...newGifs);
  offset.value += limit;
  if (done) done();
}
</script>
