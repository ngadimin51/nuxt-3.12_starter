<script setup>
import AppHeader from '@/components/AppHeaderDashboard';
import AppFooter from '@/components/AppFooter';
</script>

<template>
  <div>
    <AppHeader />
    <div class="p-8">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>