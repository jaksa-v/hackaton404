import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: Ref<string>;
  password: Ref<string>;
}

interface RegisterPayloadInterface {
  name: Ref<string>;
  email: Ref<string>;
  password: Ref<string>;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    user: {},
  }),
  actions: {
    async registerUser({ name, email, password }: RegisterPayloadInterface) {
      const response: any = await $fetch(
        "https://4340-79-143-107-1.ngrok-free.app/api/authenticate/register",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            fullName: name,
            email,
            password,
          },
        }
      );
    },
    async authenticateUser({ email, password }: UserPayloadInterface) {
      const response: any = await $fetch(
        "https://4340-79-143-107-1.ngrok-free.app/api/authenticate/login",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );

      if (response.token) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = response.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
  },
});
