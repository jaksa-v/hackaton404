<template>
  <nav class="navbar justify-between bg-base-300">
    <!-- Logo -->
    <a class="btn btn-ghost text-lg">
      <!-- <img alt="Logo" src="/logo.svg" class="w-4" /> -->
      FinanceFort
    </a>

    <!-- Menu for mobile -->
    <div class="dropdown dropdown-end sm:hidden">
      <button class="btn btn-ghost">
        <i class="fa-solid fa-bars text-lg"></i>
      </button>

      <ul
        tabindex="0"
        class="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2"
      >
        <li><a>About</a></li>
        <li><a>Pricing</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
        <a class="btn btn-sm btn-primary">Log in</a>
      </ul>
    </div>

    <!-- Menu for desktop -->
    <ul v-if="!authenticated" class="hidden menu sm:menu-horizontal gap-2">
      <li class="btn btn-sm btn-primary">
        <nuxt-link to="/login">Prijavi se</nuxt-link>
      </li>
      <li class="btn btn-sm btn-primary">
        <nuxt-link to="/register">Registruj se</nuxt-link>
      </li>
    </ul>
    <ul v-else class="hidden menu sm:menu-horizontal gap-2">
      <li class="btn btn-sm btn-primary">
        <nuxt-link to="/dashboard">Početna</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created

const router = useRouter();

const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>
