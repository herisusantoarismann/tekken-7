<template>
  <Background type="info" />
  <CharNavigation />
  <section class="content-info">
    <div class="textBox">
      <h1>Li Xiaoyu</h1>
      <hr />
      <div class="buttonBox">
        <div class="infoBox">
          <p>Age : 19</p>
          <p class="country">
            Origin : China
            <img src="https://www.countryflags.io/cn/flat/64.png" alt="" />
          </p>
          <p>First Appearence : Tekken 3</p>
        </div>
        <Button type="command-info" title="Command List" />
      </div>
      <div class="description">
        <p>
          Xiaoyu is an innocent and cheerful girl whose story is linked to Jin
          Kazama, her friend who has fallen into evil. Her most notable traits
          are her naivety and determination.
        </p>
        <p>
          She enters her first tournament with the sole purpose of building her
          own amusement park, and this becomes a recurring theme in her endings.
          Her naivety is also shown when it comes to Heihachi Mishima since she
          has absolutely no awareness of his devious plans and even weeps for
          him after his apparent death in after the fourth tournament. She even
          decides to go back in time with the help of a time machine in order to
          try and change the tragic story of the Mishima family, and this is her
          main motivation to participate in the fifth tournament. Her innocent
          naivety is also shown in her Tekken 7 ending, where she seems
          oblivious to Claudio's hidden agenda after he allows her to follow him
          in finding Jin.
        </p>
        <p>
          Despite her ingenuousness, Xiaoyu also displays a great deal of
          strength and determination when it comes to doing anything to save
          Jin. Believing he is good and that he can still be saved, she does not
          suspect in any way the demonic part of her friend. She is caring and
          compassionate, and is aware of Jin's more self-destructive tendencies,
          with one of her endings featuring a dream of hers where she talks Jin
          out of jumping off a building before being hugged by him.
        </p>
        <p>
          Despite her ingenuousness, Xiaoyu also displays a great deal of
          strength and determination when it comes to doing anything to save
          Jin. Believing he is good and that he can still be saved, she does not
          suspect in any way the demonic part of her friend. She is caring and
          compassionate, and is aware of Jin's more self-destructive tendencies,
          with one of her endings featuring a dream of hers where she talks Jin
          out of jumping off a building before being hugged by him.
        </p>
      </div>
    </div>
    <div class="charBox">
      <img src="../assets/img/Li_Xiayou.png" alt="" />
    </div>
  </section>
</template>

<script>
import Background from "../components/Background.vue";
import Button from "../components/Button.vue";
import CharNavigation from "../components/CharNavigation.vue";

export default {
  components: {
    Background,
    Button,
    CharNavigation,
  },
};
</script>

<style scoped>
section.content-info {
  @apply relative 3xl:pt-10 flex overflow-hidden sm:w-screen sm:pt-6;
}
section.content-info .textBox {
  @apply flex-1 text-white 3xl:pl-40 sm:p-8 xl:h-full;
}
section.content-info .textBox h1 {
  @apply 3xl:text-9xl uppercase text-center font-bold sm:text-base;
}
section.content-info .textBox hr {
  @apply h-1 bg-yellow-600 my-4;
}
section.content-info .charBox {
  @apply flex-1 sm:hidden xl:block 2xl:h-80vh 2xl:mt-0;
}
section.content-info .charBox img {
  @apply ml-44 h-full;
}
section.content-info .buttonBox {
  @apply w-full grid grid-cols-2 gap-8;
}
section.content-info .buttonBox .infoBox {
  @apply bg-gray-800 px-2 py-4 leading-loose sm:text-sm 3xl:text-base;
}
section.content-info .buttonBox .infoBox .country {
  @apply flex;
}
section.content-info .buttonBox .infoBox .country img {
  @apply h-8 ml-6;
}
section.content-info .buttonBox .command {
  @apply h-12 bg-indigo-700 bg-opacity-90 uppercase font-medium duration-150 hover:tracking-wider;
}
section.content-info .description {
  @apply mt-16 sm:text-sm sm:mt-4 3xl:text-base;
}
section.content-info .description p {
  @apply text-justify mt-2 sm:mt-0 3xl:mt-2;
}
</style>
