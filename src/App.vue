<template>
  <div id="app">
    <h1>Router sample</h1>
    <div>
      <router-link to='/'>Home</router-link>
      <router-link to='/about'>About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
});
</script>