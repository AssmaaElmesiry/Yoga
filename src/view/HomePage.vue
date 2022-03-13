<template>
    <header-style />
    <carouse-section />
    <what-we-do />
    <aboutus />
    <Events />
    <classSchedule />
    <MyTeam />
    <OurPricing />
    <testimonials />
</template>
<script>
import carouseSection from "../components/carouseSection.vue";
import headerStyle from '../components/headerStyle.vue';
import WhatWeDo from '../components/WhatWeDo.vue';
import aboutus from '../components/aboutus.vue';
import Events from '../components/Events.vue';
import classSchedule from '../components/classSchedule.vue';
import MyTeam from '../components/MyTeam.vue';
import OurPricing from '../components/OurPricing.vue';
import testimonials from '../components/testimonials.vue';
export default {
    data() {
        return {
          showMenu: false,
        };
    },
    components: { 
      carouseSection,
      headerStyle,
      WhatWeDo,
      aboutus,
      Events,
      MyTeam,
      classSchedule,
      OurPricing,
      testimonials,
    }
};
</script>
<style>
ul,li{
  margin: 0px;
  padding: 0px;
  list-style: none;
  margin-bottom: 0px !important;
}
a{
  text-decoration: none !important;
}
svg{
  color: #7b6cd5;
}
button{
  border: none;
  background-color: transparent;
}
</style>