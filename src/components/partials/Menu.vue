<template>
  <div class="card relative z-2">
    <Menubar :model="[]">
      <template #start>
        <router-link :to="{path: 'Home'}">
          <img src="../../assets/logo.svg" alt="logo" class="logo" />
        </router-link>

      </template>
      <template #end>

        <div v-if="user">
          <Menubar :model="items"/>
        </div>

        <div v-else>
          <router-link :to="{path: 'Login'}">
            <Button label="Connexion" icon="pi pi-user" class="mr-2" />
          </router-link>
          <Button label="Inscription" icon="pi pi-times" class="mr-2" severity="secondary" />
        </div>

      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import { useStore } from "vuex";

const items = ref([
  {
    label: "Accueil",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "A propos",
    icon: "pi pi-fw pi-info",
    to: "/about",
  },
  {
    label: "Contact",
    icon: "pi pi-fw pi-envelope",
    to: "/contact",
  },
  {
    label: "Déconnexion",
    icon: "pi pi-fw pi-sign-out",
  },
]);
const store = useStore();

const logout = () => {
  store.dispatch("logout");
};

const user = computed(() => store.state.user.user);

</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>
