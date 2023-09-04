<template>
  <div class="card relative z-2">
    <Menubar :model="[]">
      <template #start>
        <router-link :to="{name: 'Home'}">
          <img src="../../assets/logo.svg" alt="logo" class="logo" />
        </router-link>

      </template>
      <template #end>

        <div v-if="user">
          <Menubar :model="items"/>
        </div>

        <div v-else>
          <router-link :to="{name: 'Login'}">
            <Button label="Connexion" icon="pi pi-user" class="mr-2" />
          </router-link>
          <router-link :to="{name: 'ChoicesRegister'}">
            <Button label="Inscription" icon="pi pi-times" class="mr-2" severity="secondary" />
          </router-link>
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


const store = useStore();

const logout = () => {
  store.dispatch("user/logout");
};

const items = ref([
  {
    label: "Accueil",
    icon: "pi pi-fw pi-home",
    to: "/",
  },
  {
    label: "Mes rendez-vous",
    icon: "pi pi-fw pi-calendar",
  },
  {
    label: "Mes documents",
    icon: "pi pi-fw pi-file-pdf",
  },
  {
    label: "Déconnexion",
    icon: "pi pi-fw pi-sign-out",
    command: logout,
  },
]);

const user = computed(() => store.state.user.user);

</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>
