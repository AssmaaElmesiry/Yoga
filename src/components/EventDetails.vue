<template>
    <section>
        <headerStyleVue />
        <div class="banner w-full pt-28">
            <!-- <img src="../assets/banner.jpg" /> -->
            <h2>Event Details</h2>
            <span>
                <a href="#">Home</a> 

                <a href="#">Event Details</a>
            </span>
        </div>
        
    </section>
  
</template>

<script>
import headerStyleVue from './headerStyle.vue'
export default {
    components:{
        headerStyleVue,
    }
}
</script>

<style lang="css">
    .banner{
        background-image: url("../../src/assets/banner.png");
        background-size: cover;
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>