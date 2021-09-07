<template>
  <button v-bind:class="type">{{ title }}</button>
</template>

<script>
export default {
  props: ["type", "title"],
};
</script>

<style scoped>
.info {
  font-size: 0.4rem;
  @apply 3xl:h-12 bg-black bg-opacity-50 uppercase font-medium duration-150 hover:tracking-wider sm:h-4 sm:font-semibold md:text-sm md:h-8;
}
.command {
  font-size: 0.4rem;
  @apply 3xl:h-12 bg-indigo-700 bg-opacity-50 uppercase font-medium duration-150 hover:tracking-wider sm:h-4 sm:font-semibold md:text-sm md:h-8;
}
.command-info {
  @apply 3xl:h-12 bg-indigo-700 bg-opacity-50 uppercase font-medium duration-150 hover:tracking-wider sm:h-6 sm:font-semibold sm:text-sm md:text-sm md:h-8;
}
</style>
