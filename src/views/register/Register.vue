<template>
<div class="container mt-5">
  <Registerdoctor v-if="showFormDoctor" />
  <RegisterPatient v-if="showFormPatient" />
</div>
</template>

<script setup>
import router from "../../router/router.js";
import { ref } from 'vue';
import Registerdoctor from "../../components/register/Registerdoctor.vue";
import RegisterPatient from "../../components/register/RegisterPatient.vue";


const name = router.currentRoute.value.params.name;
const showFormDoctor = ref(false);
const showFormPatient = ref(false);

if (name === "doctor") {
  showFormDoctor.value = true;
} else if(name === "patient") {
  showFormPatient.value = true;
}

</script>
