<template>
  <section class="content" style="background-color: #f5f6fb;">
    <transition name="content">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'content'
  }
</script>

<style lang="less">
  .content {
    position: relative;
    & > div {
      overflow: hidden;
      margin: 1rem;
    }
  }

  .content-enter-active, .content-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: opacity .3s ease;
  }
  .content-enter, .content-leave-active {
    opacity: 0
  }

   ::-webkit-scrollbar {
     width: .3rem;
     height: .3rem;
     -webkit-appearance: none;
   }

   ::-webkit-scrollbar-track {
     background-color: transparent;
   }

   ::-webkit-scrollbar-thumb {
     border-radius: .3rem;
     background-color: rgba(100, 100, 100, .5);
   }
</style>
