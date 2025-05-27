<template>
  <div>
    <h2>Categorias</h2>
    <div class="row q-gutter-x-sm q-gutter-y-sm">
      <q-btn
        v-for="cat in giphy.categories"
        :key="cat.name"
        @click="selectCategory(cat.name)"
        :outline="!selectedCategory || selectedCategory !== cat.name"
        :color="selectedCategory === cat.name ? 'primary' : 'primary'"
      >
        {{ cat.name }}
      </q-btn>
    </div>
    <q-infinite-scroll @load="loadMore" :offset="100" v-if="selectedCategory" class="q-mt-md">
      <div class="grid grid-cols-4 md:grid-cols-4 gap-4">
        <GifCard v-for="gif in giphy.gifs" :key="gif.id" :gif="gif" />
      </div>
    </q-infinite-scroll>
    <div v-if="!giphy.loading && giphy.gifs.length === 0" class="q-mt-md text-center">
      Nenhum GIF encontrado.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useGiphyStore } from 'stores/giphy';
import GifCard from 'src/components/GifCardItem.vue';

const giphy = useGiphyStore();
const selectedCategory = ref<string | null>(null);
const offset = ref(0);
const limit = 25;

onMounted(async () => {
  await giphy.fetchCategories();
  if (giphy.categories.length > 0) {
    selectedCategory.value = giphy.categories[0]?.name ?? null;
    offset.value = 0;
    await giphy.fetchByCategory(selectedCategory.value!);
  }
});

async function selectCategory(name: string) {
  selectedCategory.value = name;
  offset.value = 0;
  await giphy.fetchByCategory(name);
}

async function loadMore(index?: number, done?: () => void) {
  if (!selectedCategory.value) {
    if (done) done();
    return;
  }
  const newGifs = await giphy.fetchMoreByCategory(selectedCategory.value, offset.value);
  if (!newGifs.length && done) {
    done(); // sem mais resultados
    return;
  }
  offset.value += limit;
  if (done) done();
}
</script>
