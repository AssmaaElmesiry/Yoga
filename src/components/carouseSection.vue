<template>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in imgslider" :key="slide">
        <div class="carousel__item">
            <img class="imageSlider" :src="slide.name" />
            <div class="desc">
                <h5>Welcome To Pranayama</h5>
                <h2>Join Yoga Studio</h2>
                <p>Yoga is the Art of Intelligent Movement.</p>
                <div>
                  <button1 /><button2 />
                </div>

            </div>
        </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
<script>
import { defineComponent } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination} from 'vue3-carousel';
import button1 from '../components/buttonStyle/button1.vue';
import button2 from '../components/buttonStyle/button2.vue';
export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        button1,
        button2,
    },
  data() {
    return {
      imgslider:[
        {id:1, name:('./src/assets/home.jpg')},
        {id:2, name:('./src/assets/home2.jpg')},
        {id:3, name:('./src/assets/home3.jpg')},
      ]
    }
  },
}
</script>

<style scoped>
.carousel__viewport {
  overflow: hidden;
  height: 100vh;
}
img.imageSlider {
    width: 100%;
    object-fit: cover;
}
.carousel__slide{
    width: 100% !important;
    order: 2;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--carousel-color-primary);
  color:  var(--carousel-color-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__item::before{
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
}
.carousel__item .desc{
    position: absolute;
    color: #fff
}
.carousel__item .desc div {
  display: flex;
  justify-content: center;
}
.carousel__item .desc .mask{
    display: flex;
    justify-content: space-evenly;
}
.carousel__item .desc h5{
    color: #7b6cd5;
    font-size: 22px;
}
.carousel__item .desc h2{
    color: #e0dede;
    font-size: 65px;
}
.carousel__item .desc p{
    font-size: 20px
}
.carousel__pagination{
    display: none;
}
</style>