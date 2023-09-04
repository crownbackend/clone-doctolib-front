<template>
  <div class="container">
    <div class="row">

      <div class="col-md-6 cursor">
        <RouterLink :to="{name: 'Register', params: {name: 'patient'}}">
          <div class="card flex align-items-center justify-content-center mt-5">
            <Card>
              <template #header>
                <img class="img-size" src="../../assets/patient-logo.png" alt="Image Docteur" />

              </template>
              <template #title class="text-center"> Vous êtes un patient ? </template>
              <template #content>
                <p>
                  <ul>
                    <li>Trouvez rapidement des médecins de confiance.</li>
                    <li>Planifiez vos rendez-vous médicaux en ligne, sans tracas.</li>
                    <li>Gérez votre santé en toute simplicité.</li>
                  </ul>
                </p>
              </template>
            </Card>
          </div>
        </RouterLink>
      </div>
      <div class="col-md-6 cursor">
        <RouterLink :to="{name: 'Register', params: {name: 'patient'}}">
          <div class="card flex align-items-center justify-content-center mt-5">
            <Card>
              <template #header>
                <img class="img-size" src="../../assets/doctor-logo.svg" alt="Image Docteur" />
              </template>
              <template #title>
                Vous êtes medecin ?
              </template>
              <template #content>
                <ul>
                  <li>Élargissez votre pratique, trouvez de nouveaux patients.</li>
                  <li>Simplifiez la gestion de votre emploi du temps.</li>
                  <li>Offrez des soins de qualité avec notre plateforme.</li>
                </ul>
              </template>
            </Card>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card  from 'primevue/card'
import Button  from 'primevue/button'
console.log('Register')
</script>

<style scoped>
.img-size {
  width: 100%;
  height: 100%;
}
.cursor {
  cursor: pointer;
}
</style>
