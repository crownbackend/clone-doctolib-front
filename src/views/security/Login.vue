<template>
  <div class="container w-75">
    <div class="d-flex justify-content-center align-items-center min-vh-100">
      <Card class="mt-5">
        <template #title> Espace personnel </template>
        <template #content>
          <div class="card login-card">
            <InputText v-model="username" placeholder="Username"></InputText>
            <br>
            <Password v-model="password" placeholder="Password"></Password>
            <br>
          </div>
        </template>
        <template #footer>
          <Button @click="login" icon="pi pi-check" label="Connexion" />
          <router-link to="/inscription">
            <Button icon="pi pi-times" label="Insciption" severity="secondary" style="margin-left: 0.5em" />
          </router-link>
        </template>
      </Card>
    </div>

  </div>

</template>

<script setup>
import  InputText from "primevue/inputtext";
import  Button from "primevue/button";
import Password from 'primevue/password';
import Card from 'primevue/card';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const username = ref('');
const password = ref('');

const login = () => {
  store.dispatch('user/login', { username: username.value, password: password.value });
}

</script>

<style scoped>

.centered-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Assure que le formulaire est centré verticalement */
}

</style>
