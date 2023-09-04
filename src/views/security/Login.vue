<template>
  <div class="container">
    <Toast />
    <div class="d-flex justify-content-center align-items-center min-vh-100 mt-lg-5">
      <Card class="p-4" style="width: 30em;">
        <template #title>Espace personnel</template>
        <template #content>
          <div class="p-fluid">
            <div class="p-field mt5" style="margin-top: 1rem;">
              <label for="username">Email</label>
              <InputText id="username" v-model="username" placeholder="Username" />
            </div>
            <div class="p-field" style="margin-top: 1rem;">
              <label for="password">Mot de passe</label>
              <Password id="password" v-model="password" placeholder="Password" />
            </div>
          </div>
        </template>
        <template #footer>
          <Button @click="login" icon="pi pi-check" label="Connexion" />
          <router-link :to="{ name: 'ChoicesRegister'}">
            <Button icon="pi pi-times" label="Inscription" class="p-button-secondary" style="margin-left: 0.5em" />
          </router-link>
        </template>
      </Card>
    </div>
  </div>

</template>

<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Password from 'primevue/password';
import Card from 'primevue/card';
import Toast from "primevue/toast";
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '../../router/router.js';
import { useToast } from "primevue/usetoast";

const toast = useToast();
const store = useStore();
const username = ref('');
const password = ref('');

const login = () => {
  store.dispatch('user/login', { username: username.value, password: password.value }).then(() => {
    showSuccess()
    router.push('/');
  }).catch((e) => {
    showError()
  })
}
const showSuccess = () => {
  return toast.add({ severity: 'success', summary: 'Succès', detail: 'Connexion réussi !', life: 3000 });
};
const showError = () => {
  return toast.add({ severity: 'error', summary: 'Erreur 401', detail: 'Email ou mot de passe non valide', life: 3000 });
};

</script>
