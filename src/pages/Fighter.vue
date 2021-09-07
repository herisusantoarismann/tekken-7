<template>
  <Background type="fighter" />
  <section class="content">
    <div class="textBox">
      <h1>Ling Xiaoyu</h1>
      <h2>I'm Going to Stop Jin!</h2>
    </div>
    <div class="buttonBox">
      <Button type="info" title="More Info" />
      <Button type="command" title="Command List" />
    </div>
  </section>
  <section class="charList">
    <Carousel :itemsToShow="7">
      <Slide v-for="slide in slides" :key="slide">
        <div>
          <p v-bind:class="slide === 'Xiaoyu' ? 'active' : ''">
            {{ slide }}
          </p>
        </div>
      </Slide>
    </Carousel>
    <!-- <template #addons>
      <Pagination />
    </template> -->
  </section>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import Background from "../components/Background.vue";
import Button from "../components/Button.vue";

import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Background,
    Button,
  },
  data() {
    return {
      slides: [
        "Kaguya",
        "Lili",
        "Jin",
        "Xiaoyu",
        "Zafina",
        "Shaheen",
        "Kunimitsu",
      ],
    };
  },
};
</script>

<style>
section.content {
  @apply relative mt-44 pl-44 text-white sm:mt-16 sm:pl-16 sm:h-screen md:mt-44 xl:pl-28 3xl:h-full;
}
section.content h1 {
  @apply 3xl:text-9xl uppercase font-bold sm:text-base md:text-6xl;
}
section.content h2 {
  @apply 3xl:text-4xl uppercase italic font-medium text-yellow-300 sm:text-base md:text-xl;
}
section.content .buttonBox {
  @apply w-2/4 grid grid-cols-2 gap-8 mt-32 sm:mt-4 sm:w-1/4 md:w-2/5;
}
section.charList {
  @apply absolute bottom-0 text-white w-full p-4 uppercase font-medium sm:text-xs 2xl:text-base;
}
section.charList .active {
  @apply text-base lg:text-lg;
  text-shadow: 5px 0px 10px rgba(255, 255, 255, 1);
}
</style>
