<template>
  <div class="video-bg">
    <video src="../assets/video/trailer.mp4" loop autoplay muted></video>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.video-bg {
  @apply absolute top-0 left-0 h-screen w-screen overflow-hidden bg-gray-900 select-none;
}
.video-bg video {
  @apply w-full mix-blend-multiply sm:hidden lg:block lg:h-screen 2xl:h-auto;
}
</style>
