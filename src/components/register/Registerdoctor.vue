<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center min-vh-100 mt-lg-5">
      <Card class="p-4" style="width: 30em;">
        <template #title>Créer mon compte</template>
        <template #content>
          <div class="p-fluid">
            <div class="p-field mt5" style="margin-top: 1rem;">
              <label for="username">Email</label>
              <InputText id="username" placeholder="Email" />
            </div>
            <div class="p-field" style="margin-top: 1rem;">
              <label for="password">Mot de passe</label>
              <Password id="password" placeholder="Mot de passe" />
            </div>
          </div>
        </template>
        <template #footer>
          <Button icon="pi pi-times" label="Inscription" class="p-button-secondary" style="margin-left: 0.5em" />
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Password from "primevue/password";
</script>
