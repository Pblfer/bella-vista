<template>
    <div class="font-mont">
       <Header></Header>
       <Amenities></Amenities>
       <Localization></Localization>
       <YourEnvironment></YourEnvironment>
       <Apartments></Apartments>

       <LeadForm></LeadForm>

       <Footer></Footer>
       
    </div>
</template>

<script>


import Amenities from '@/components/Layout/Amenities.vue';
import Apartments from '@/components/Layout/Apartments.vue';
import Footer from '@/components/Layout/Footer.vue';

import Header from '@/components/Layout/Header.vue';
import LeadForm from '@/components/Layout/LeadForm.vue';
import Localization from '@/components/Layout/Localization.vue';
import TypesComponent from '@/components/Layout/typesComponent.vue';
import YourEnvironment from '@/components/Layout/YourEnvironment.vue';

    export default {
        components:{ Header, Footer, LeadForm, Localization, YourEnvironment, Amenities, TypesComponent, Apartments }
        
    }
</script>

<style lang="scss" scoped>

</style>