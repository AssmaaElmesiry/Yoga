<template>
    <section>
        <headerStyleVue />
        <div class="banner w-full pt-28">
            <h2 class="text-white z-10">Event Details</h2>
            <span class="z-10">
                <a href="#" class="text-white">Home</a> 
                <fa icon="angles-right" class="text-white px-1 text-xs"/>
                <a href="#" class="text-white">Event Details</a>
            </span>
        </div>
        
        <main class="flex container mt-20">
            <section>
                <img src="../assets/Events1.png"  class="w-full"/>
                    <div class="details">
                        <h4>Yoga For Healthy Living</h4>
                        <ul class="event">
                            <li>
                                <fa icon="clock" />
                                8:00 am 3:00 pm 
                            </li>
                            <li>
                                <fa icon="location-dot" />
                                New York City
                            </li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et... </p>
                        <router-link to="/eventdetails">Continue Reading</router-link>
                    </div>
            </section>
            <aside>dkfdjf</aside>
        </main>
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
        background-repeat: no-repeat;
        background-position: center;
        width: 100%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .banner::before{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0 0 1 / 64%);
    }
    .details{
        position: relative;
        padding: 20px 10px 20px 100px;
        text-align: justify;
        border: 1px solid #eee;
        background-color: #eeeeee61;
    }
</style>