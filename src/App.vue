<script setup>
import { RouterView } from 'vue-router'
import HeaderSection from '@/components/HeaderSection/HeaderSection.vue'
import FooterSection from '@/components/FooterSection/FooterSection.vue'
</script>

<template>
  <HeaderSection/>
  <RouterView />
  <FooterSection />
</template>

<style lang="scss" scoped>

</style>
