<template>
  <div>
    <div class="mainContent">
      <Navigation />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navigation from "~/components/Navigation.vue";
</script>
