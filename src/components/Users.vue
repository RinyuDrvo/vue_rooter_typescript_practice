<template>
  <div>
    <h2>User</h2>
    <div v-if="loading">loading...</div>
    <div v-if="!loading">{{ id }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      loading: false,
      id: 0,
    };
  },
  async created() {
    // 初回
    await this.fetchData();
  },
  async beforeRouteUpdate(to, from, next) {
    await this.fetchData();
    next();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      await new Promise((r) => {
        setInterval(r, 1000);
      });
      this.loading = false;
      this.id = parseInt(this.$route.params.id, 10);
    },
  },
});
</script>
