<template>
  <header>
    <div class="logo">
      <img src="../assets/img/logo.png" alt="" />
    </div>
    <nav>
      <ul>
        <li
          v-bind:class="isActive === 1 ? 'active' : ''"
          @click="changeNavbar(1)"
        >
          <router-link to="/">Home </router-link>
        </li>
        <li
          v-bind:class="isActive === 2 ? 'active' : ''"
          @click="changeNavbar(2)"
        >
          <router-link to="/fighter">Fighters </router-link>
        </li>
        <li
          v-bind:class="isActive === 3 ? 'active' : ''"
          @click="changeNavbar(3)"
        >
          <router-link to="/info">Info </router-link>
        </li>
      </ul>
    </nav>
    <div class="toggle" v-bind:class="{ active: isToggle }">
      <ul>
        <li
          v-bind:class="isActive === 1 ? 'active' : ''"
          @click="changeNavbar(1)"
        >
          <router-link to="/">Home </router-link>
        </li>
        <li
          v-bind:class="isActive === 2 ? 'active' : ''"
          @click="changeNavbar(2)"
        >
          <router-link to="/fighter">Fighters </router-link>
        </li>
        <li
          v-bind:class="isActive === 3 ? 'active' : ''"
          @click="changeNavbar(3)"
        >
          <router-link to="/info">Info </router-link>
        </li>
      </ul>
    </div>
    <div class="menu" v-bind:class="{ active: isToggle }" @click="toggleMenu()">
      <i v-if="isToggle" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </div>
    <div class="steam">
      <a
        href="https://store.steampowered.com/app/389730/TEKKEN_7/"
        target="_blank"
      >
        <i class="fab fa-steam"></i
      ></a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: 1,
      isToggle: false,
    };
  },
  methods: {
    changeNavbar(value) {
      this.isActive = value;
    },
    toggleMenu() {
      this.isToggle = !this.isToggle;
    },
  },
};
</script>

<style scoped>
header {
  @apply relative w-full text-white flex px-6 py-4 justify-between items-center backdrop-filter backdrop-blur bg-gray-300 bg-opacity-10 z-20 sm:py-4 sm:px-4;
}
header .logo img {
  @apply 2xl:w-36 cursor-pointer sm:w-24;
}
header nav ul {
  @apply lg:flex sm:hidden;
}
header nav ul li {
  @apply relative mr-20 uppercase font-semibold cursor-pointer duration-150 transform hover:scale-125;
}
header nav ul li.active::after {
  content: "";
  @apply absolute w-full h-0.5 bg-white -bottom-4 left-0;
}
header .menu {
  @apply cursor-pointer z-50 lg:hidden;
}
header .menu i {
  @apply text-3xl;
}
header .toggle.active {
  @apply transform translate-y-0;
}
header .toggle {
  @apply z-30 fixed w-full pt-16 top-0 left-0 text-white bg-gray-600 bg-opacity-70 flex flex-row justify-center items-center transform -translate-y-96 duration-300 lg:hidden;
}
header .toggle ul li {
  @apply uppercase mb-20 text-center font-semibold;
}
header .steam {
  @apply hidden lg:block text-2xl cursor-pointer;
}
</style>
