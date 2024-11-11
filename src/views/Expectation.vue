<template>
    <div class=" font-raleway">
       <Header></Header>
       <Localization></Localization>
       <YourEnvironment></YourEnvironment>
       <Amenities></Amenities>
       <TypesComponent></TypesComponent>
       
       <Gallery></Gallery>
       <LeadForm></LeadForm>
       <Footer></Footer>
       
    </div>
</template>

<script>

import Amenities from '@/components/Layout/Amenities.vue';
import Footer from '@/components/Layout/Footer.vue';
import Gallery from '@/components/Layout/Gallery.vue';
import Header from '@/components/Layout/Header.vue';
import LeadForm from '@/components/Layout/LeadForm.vue';
import Localization from '@/components/Layout/Localization.vue';
import TypesComponent from '@/components/Layout/typesComponent.vue';
import YourEnvironment from '@/components/Layout/YourEnvironment.vue';

    export default {
        components:{ Header, Footer, LeadForm, Localization, YourEnvironment, Amenities, Gallery, TypesComponent }
        
    }
</script>

<style lang="scss" scoped>

</style>