<script setup>
import Toolbar from 'primevue/toolbar';
import Button from "primevue/button";
</script>

<template>
  <Toolbar>
    <template #start>
      <router-link :to="{name: 'Home'}">
        <h3>Clone doctolib</h3>
      </router-link>

    </template>

    <template #end>
      <router-link :to="{path: 'Login'}">
        <Button label="Connexion" icon="pi pi-user" class="mr-2" />
      </router-link>
      <Button label="Inscription" icon="pi pi-times" class="mr-2" severity="secondary" />
    </template>
  </Toolbar>
</template>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>