<script setup>
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
    <div>
      <AppHeader />
      <router-view />
      <AppFooter />
    </div>
</template>