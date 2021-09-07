<template>
  <section class="charNavigation" v-bind:class="charNav ? 'active' : ''">
    <ul>
      <li><img src="../assets/img/avatar_kazuya.png" alt="" /></li>
      <li><img src="../assets/img/avatar_kazuya.png" alt="" /></li>
      <li><img src="../assets/img/avatar_kazuya.png" alt="" /></li>
      <li><img src="../assets/img/avatar_kazuya.png" alt="" /></li>
      <li><img src="../assets/img/avatar_kazuya.png" alt="" /></li>
      <li><img src="../assets/img/avatar_kazuya.png" alt="" /></li>
    </ul>
    <div class="icon">
      <i
        class="fas fa-angle-double-left fa-3x"
        @click="toggleCharNavigation()"
        v-if="charNav"
      ></i>
      <i
        class="fas fa-angle-double-right fa-3x"
        @click="toggleCharNavigation()"
        v-else
      ></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      charNav: false,
    };
  },
  methods: {
    toggleCharNavigation() {
      this.charNav = !this.charNav;
    },
  },
};
</script>

<style scoped>
.charNavigation {
  @apply fixed left-0 top-2/4 transform -translate-x-32 -translate-y-2/4 z-10 w-36 h-4/5 py-8 bg-gray-600 bg-opacity-80 duration-300 ease-in sm:hidden 2xl:block;
}
.charNavigation.active {
  @apply transform translate-x-0 -translate-y-2/4;
}
.charNavigation ul {
  @apply grid grid-rows-6 gap-4 h-full;
}
.charNavigation ul li img {
  @apply h-full cursor-pointer duration-150 transform hover:scale-110;
}
.charNavigation .icon {
  @apply absolute -right-6 top-2/4 bg-gray-600 bg-opacity-50 cursor-pointer text-gray-200;
}
</style>
