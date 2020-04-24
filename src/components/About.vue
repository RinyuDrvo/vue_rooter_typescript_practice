<template>
  <div>
    <h2>About</h2>
    <button @click="goBack">GO back</button>
    <form @submit.prevent="submit">
      <input type="text" v-model="id" />
      <input type="submit" value="画面遷移" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      id: '',
    };
  },
  methods: {
    goBack(e: MouseEvent) {
      this.$router.back();
    },
    submit() {
      this.$router.push({
        name: 'users',
        params: { id: this.id },
      });
    },
  },
});
</script>