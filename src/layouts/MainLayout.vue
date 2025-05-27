<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" class="shadow-2">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="q-mr-sm" />
          <q-toolbar-title>
            <Topbar />
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer side="left" show-if-above v-model="drawer" bordered>
        <AppNavbar />
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppNavbar from 'components/AppNavbar.vue';
import Topbar from 'src/components/AppTopbar.vue';

const drawer = ref(true);
</script>
