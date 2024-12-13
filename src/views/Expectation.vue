<template>
    <div class="font-mont">
       <Header></Header>
       <Hero></Hero>
       <Amenities></Amenities>
       <Localization></Localization>
       <!-- <YourEnvironment></YourEnvironment> -->
       <Apartments></Apartments>
      <QuoterExpress />
       <ActivaDesarrollos></ActivaDesarrollos>
      <!--<AmenitiesComponent></AmenitiesComponent> -->
       <GalleryActiva></GalleryActiva>
       <LeadForm></LeadForm>
       <Gallery></Gallery>
       <Footer></Footer>
       
    </div>
</template>

<script>

import ActivaDesarrollos from '@/components/Layout/ActivaDesarrollos.vue';
import Amenities from '@/components/Layout/Amenities.vue';
import AmenitiesComponent from '@/components/Layout/amenitiesComponent.vue';
import Apartments from '@/components/Layout/Apartments.vue';
import Footer from '@/components/Layout/Footer.vue';
import GalleryActiva from '@/components/Layout/Gallery-activa.vue';
import GalleryDesarrollos from '@/components/Layout/Gallery-desarrollos.vue';
import Gallery from '@/components/Layout/Gallery.vue';
import Header from '@/components/Layout/Header.vue';
import Hero from '@/components/Layout/Hero.vue';
import LeadForm from '@/components/Layout/LeadForm.vue';
import Localization from '@/components/Layout/Localization.vue';
import QuoterExpress from '@/components/Layout/QuoterExpress.vue';
import TypesComponent from '@/components/Layout/typesComponent.vue';
///import YourEnvironment from '@/components/Layout/YourEnvironment.vue';

    export default {
        components:{ 
            Header, 
            Footer, 
            LeadForm, 
            QuoterExpress, 
            Localization, 
            Amenities, Gallery, TypesComponent, ActivaDesarrollos, Apartments,AmenitiesComponent, GalleryDesarrollos, 
            Hero, 
            GalleryActiva
        }
        
    }
</script>

<style lang="scss" scoped>

</style>