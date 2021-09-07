<template>
  <div class="bg" v-bind:class="type">
    <img src="../assets/img/bg-LiXiaoyu.jpg" alt="" />
  </div>
</template>

<script>
export default {
  props: ["type"],
};
</script>

<style scoped>
.bg.info {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to bottom,
    rgba(163, 187, 235, 0.9) 0%,
    rgba(10, 10, 10, 1) 90%
  );
  @apply absolute top-0;
}
.bg.info img {
  @apply h-screen w-screen opacity-100 mix-blend-multiply;
}
.bg.fighter {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 60%,
    rgba(118, 169, 249, 1) 100%
  );
  @apply absolute top-0 md:h-screen;
}
.bg.fighter img {
  @apply max-h-screen w-screen opacity-100 mix-blend-multiply md:h-screen;
}
</style>
