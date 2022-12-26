<template>
  <section class="main">
    <div class="desc">
        <h5>Welcome To Pranayama</h5>
        <h2 class="lg:text-7xl md:text-6xl text-3xl">Join Yoga Studio</h2>
        <p>Yoga is the Art of Intelligent Movement.</p>
        <div>
          <button1 /><button2 />
        </div>
    </div>
  </section>
</template>
<script>
import { defineComponent } from 'vue';
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Slide, Pagination} from 'vue3-carousel';
import button1 from '../components/buttonStyle/button1.vue';
import button2 from '../components/buttonStyle/button2.vue';
export default {
    components: {
        // Carousel,
        // Slide,
        // Pagination,
        button1,
        button2,
    },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.main{
  background-image: url("../assets/home3.png");
  height: 100vh;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}
.main:before{
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 1 / 64%);
}
.desc{
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.desc div {
  display: flex;
  justify-content: center;
}
.desc .mask{
    display: flex;
    justify-content: space-evenly;
}
.desc h5{
    color: #7b6cd5;
    font-size: 22px;
}
.desc h2{
    color: #e0dede;
}
.desc p{
    font-size: 20px
}

@media (max-width: 768px) {
}
</style>