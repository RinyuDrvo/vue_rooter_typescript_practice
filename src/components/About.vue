<template>
  <div>
    <h2>About</h2>
    <button @click="goBack">GO back</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    goBack(e: MouseEvent) {
      this.$router.back();
    },
  },
});
</script>