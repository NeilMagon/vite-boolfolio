<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components:{
    AppHeader
  }
}
</script>

<template>
    <div class="container">
      <AppHeader></AppHeader>
      <router-view></router-view>
    </div>
</template>

<style lang="scss">
    @use './style/generic.scss';
</style>