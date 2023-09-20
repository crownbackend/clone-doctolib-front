<template>
  <div class="container">
    <Toast />
    <div class="d-flex justify-content-center align-items-center min-vh-100 mt-lg-5">
      <Card class="p-4" style="width: 50em;">
        <template #title>Créer mon compte</template>
        <template #content>
          <form>
            <div class="p-fluid">
              <div class="p-field">
                <InputText id="email" v-model="form.email" placeholder="Email" />
              </div>
              <div class="p-field">
                <InputText id="firstName" v-model="form.firstName" placeholder="Nom" />
              </div>
              <div class="p-field">
                <InputText id="lastName" v-model="form.lastName" placeholder="Prénom" />
              </div>
              <div class="p-field">
                 <span class="p-float-label">
                    <Calendar v-model="form.dateOfBirth" dateFormat="dd/mm/yy" inputId="birth_date" />
                    <label for="birth_date">Date de naissance</label>
                 </span>
              </div>
              <div class="p-field">
                <Password id="password" v-model="form.password" placeholder="Mot de passe" />
              </div>
              <Divider />
              <div class="p-field" style="margin-top: 1rem;">
                <h2>Créer mon cabinet</h2>
              </div>
              <div class="p-field">
                <div class="p-field">
                  <InputText id="clinic_name" v-model="form.clinic.name" placeholder="Nom du cabinet" />
                </div>
                <div class="p-field">
                  <InputText id="clinic_address" v-model="form.clinic.address" placeholder="Adresse" />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="p-field">
                      <InputText id="clinic_city" v-model="form.clinic.city" placeholder="Ville" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="p-field">
                      <InputText id="clinic_postalCode" v-model="form.clinic.postalCode" placeholder="Code postale" />
                    </div>
                  </div>
                </div>
                <div class="p-field">
                  <InputText id="clinic_phoneNumber" v-model="form.clinic.phoneNumber" inputId="integeronly" placeholder="Téléphone" />
                </div>
                <div class="p-field">
                  <Textarea id="clinic_information" v-model="form.clinic.information" placeholder="Informations sur votre cabinet" rows="5" cols="30" />
                </div>
                <div class="p-field">
                  <Textarea id="clinic_presentation" v-model="form.clinic.presentation" placeholder="Présenter vous !" rows="5" cols="30" />
                </div>
                <div class="p-field">
                  <Textarea id="clinic_meansOfPayment" v-model="form.clinic.meansOfPayment" placeholder="Décrivé vos moyens de paiement" rows="5" cols="10" />
                </div>
                <div class="p-field">
                  <Textarea id="clinic_ratesAndReimbursement" v-model="form.clinic.ratesAndReimbursement" placeholder="Tarifs et remboursements" rows="5" cols="30" />
                </div>
                <Divider />
                <div class="p-field" style="margin-top: 1rem;">
                  <h2>Créer mes consultation</h2>
                </div>
                <div class="p-field" v-for="(field, index) in form.clinic.prices" :key="index">
                  <div class="row">
                    <div class="col-md-6">
                      <InputText v-model="field.name" placeholder="Nom consultation" />
                    </div>
                    <div class="col-md-6">
                      <InputNumber v-model="field.price" placeholder="Prix" />
                    </div>
                  </div>
                </div>
                <Button @click="addFormField" label="Ajouter une consultation" class="p-button-success mt-4" />
              </div>
            </div>
          </form>
        </template>
        <template #footer>
          <Divider />
          <Button icon="pi pi-times" @click="register" type="submit" label="Inscription" class="p-button-secondary" style="width: 100%" />
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
import InputNumber from "primevue/inputnumber";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import Divider from 'primevue/divider';
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
  clinic: {
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    information: "",
    presentation: "",
    meansOfPayment: "",
    ratesAndReimbursement: "",
    prices: [{
      name: "",
      price: 0,
    }],
  }
});

const register = () => {
  if(checkFormIsValid(form.value)) {
    console.log(form.value)
    UserApi.registerDoctor(form.value).then((response) => {
      console.log(response)
      success()
    }).catch((e) => {
      console.log(e)
      error("Une erreur est survenue")
    })
  } else {
    error("Veuillez remplir tous les champs")
  }
}

const addFormField = () => {
  form.value.clinic.prices.push({
    name: "",
    price: 0,
  })
}

const checkFormIsValid = (form) => {
  return form.email !== "" && form.firstName !== "" && form.lastName !== ""
      && form.dateOfBirth !== null && form.password !== "" && form.clinic.name !== "" && form.clinic.address !== ""
      && form.clinic.city !== "" && form.clinic.postalCode !== "" && form.clinic.phoneNumber !== ""
      && form.clinic.information !== "" && form.clinic.presentation !== "" && form.clinic.meansOfPayment !== ""
      && form.clinic.ratesAndReimbursement !== "" && form.clinic.prices.length > 0;
}

const success = () => {
  return toast.add({
    severity: "success",
    summary: "Succès",
    detail: "Inscription réussi !",
    life: 3000,
  });
};
const error = (message) => {
  return toast.add({
    severity: "error",
    summary: "Erreur",
    detail: message || "Une erreur est survenue",
    life: 3000,
  });
};

</script>

<style scoped>
.p-field {
  margin-top: 1rem;
}
</style>
