<template>
  <div class="container">
    <Toast />
    <div class="d-flex justify-content-center align-items-center min-vh-100 mt-lg-5">
      <Card class="p-4" style="width: 30em;">
          <template #title>Créer mon compte</template>
          <template #content>
            <form>
            <div class="p-fluid">
                <div class="p-field mt5" style="margin-top: 1rem;">
                  <InputText id="email" v-model="form.email" placeholder="Email" />
                </div>
                <div class="p-field mt5" style="margin-top: 1rem;">
                  <InputText id="firstName" v-model="form.firstName" placeholder="Nom" />
                </div>
                <div class="p-field mt5" style="margin-top: 1rem;">
                  <InputText id="lastName" v-model="form.lastName" placeholder="Prénom" />
                </div>
                <div class="p-field mt5" style="margin-top: 2rem;">
                 <span class="p-float-label">
                    <Calendar v-model="form.dateOfBirth" dateFormat="dd/mm/yy" inputId="birth_date" />
                    <label for="birth_date">Date de naissance</label>
                 </span>
                </div>
                <div class="p-field" style="margin-top: 1rem;">
                  <Password id="password" v-model="form.password" placeholder="Mot de passe" />
                </div>
              </div>
            </form>
          </template>
          <template #footer>
            <Button icon="pi pi-times" @click="register" type="submit" label="Inscription" class="p-button-secondary" style="margin-left: 0.5em" />
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
import Calendar from "primevue/calendar";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import UserApi from "../../services/UserApi.js";

const toast = useToast();

const form = ref({
  email: "",
  firstName: "",
  lastName: "",
  dateOfBirth: null,
  password: "",
});

const register = () => {
  if(checkFormIsValid(form.value)) {
    UserApi.register(form.value).then((response) => {
      console.log(response)
      success()
    }).catch((e) => {
      console.log(e)
      error()
    })
  } else {
    error()
  }
}

const checkFormIsValid = (form) => {
  return form.email !== "" && form.firstName !== "" && form.lastName !== "" && form.dateOfBirth !== null && form.password !== "";
}

const success = () => {
  return toast.add({
    severity: "success",
    summary: "Succès",
    detail: "Inscription réussi !",
    life: 3000,
  });
};
const error = () => {
  return toast.add({
    severity: "error",
    summary: "Erreur",
    detail: "Une erreur est survenue, données invalides",
    life: 3000,
  });
};


  </script>
