<template>
  <BgVideo />
  <section class="content-home">
    <div class="gameBox">
      <h1>Tekken</h1>
      <div class="platform">
        <div class="rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="devices">
          PlayStation / Xbox / Windows
        </div>
      </div>
      <div class="description">
        <p>
          Tekken (Japanese: 鉄拳, "Iron Fist") is a Japanese media franchise
          centered on a series of fighting video and arcade games developed by
          Bandai Namco Studios and published by Bandai Namco Entertainment. The
          franchise also includes film and print adaptations. The main games in
          the series follow the events of the King of Iron Fist Tournament,
          hosted by the Mishima Zaibatsu, where players control a plethora of
          characters to win the tournament and gain control of the company; the
          conflict between the Mishima family serves as the main focus of the
          series' plot, while players explore other characters' motivations in
          aiming to control the Zaibatsu. Gameplay focuses on hand-to-hand
          combat with an opponent, with the gameplay system including blocks,
          throws, escapes, and ground fighting. The series later introduced
          combos and special moves, with characters also able to stage break
          arenas. Tekken is noted as being one of the first fighting games at
          the time to use 3D animation.
        </p>
      </div>
    </div>
    <div class="videoBox">
      <video src="../assets/video/trailer.mp4" loop autoplay v-bind:muted="true"></video>
    </div>
  </section>
</template>

<script>
import BgVideo from "../components/BgVideo.vue";

export default {
  components: {
    BgVideo,
  },
};
</script>

<style scoped>
.content-home {
  @apply relative text-white mt-16 px-20 w-full flex justify-center items-center sm:mt-4 sm:px-4 sm:flex-col-reverse lg:flex-row lg:mt-16;
}
.content-home .gameBox {
  @apply flex-1 p-10;
}
.content-home .gameBox h1 {
  @apply mb-4 3xl:text-5xl font-semibold uppercase sm:text-base lg:text-xl;
}
.content-home .gameBox .platform {
  @apply flex justify-between mb-4 relative w-full;
}
.content-home .gameBox .platform .rating {
  @apply relative sm:text-sm;
}
.content-home .gameBox .platform .rating i {
  @apply mr-2 sm:w-4 text-yellow-300;
}
.content-home .gameBox .description p {
  @apply text-justify sm:text-sm 3xl:text-base;
}
.content-home .videoBox {
  @apply flex-1;
}
.content-home .videoBox video {
  @apply w-3/4 mx-auto mt-44 sm:mt-0 lg:mt-24;
}
</style>
