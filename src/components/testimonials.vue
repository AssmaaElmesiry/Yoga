<template>
    <div class="testimonials">
        <section class="container">
            <div class="avatar-box">
                <Carousel>
                    <Slide v-for="item in items" :key="item">
                        <div class="carousel__item">
                            <div class="avatar">
                                <img :src="item.img" />
                                <p>{{item.title}}</p>
                            </div>
                            <div class="avatar-info">
                                {{item.desc}}
                                <div class="rating">
                                    <vue3-star-ratings v-model="rating" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </section>
        
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import vue3starRatings from "vue3-star-ratings";

export default {
    components: {
        Carousel,
        Slide,
        Navigation,
        vue3starRatings,
    },
    data() {
        return {
            items: [
                { 
                    id: 1,
                    img: ('../src/assets/test1.jpg'),
                    title: 'Elina Demir', 
                    desc: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut." '
                },
                { 
                    id: 2,
                    img: ('../src/assets/test2.jpg'),
                    title: 'Alexander Smith',
                    desc: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut." '
                },
                { 
                    id: 1,
                    img: ('../src/assets/test3.jpg'),
                    title: 'Silvia Hatmun', 
                    desc: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut." '
                },
                { 
                    id: 2,
                    img: ('../src/assets/test4.jpg'),
                    title: 'Egy Paulian',
                    desc: ' "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut." '
                }
            ]
        }
    },    
}
</script>
<style lang="css" >
.testimonials{
    background-color: #333;
    padding-top: 50px;
    padding-bottom: 70px;
}
.testimonials .avatar-box .carousel__item{
    background: transparent;
    padding: 50px 40px;
    text-align: center;
    border-radius: 10px;
    width: 75%;
    margin: auto;
    overflow: hidden;
    border: 1px solid #424141;
}
.testimonials .avatar-box .carousel__item .avatar img{
    border-radius: 50%;
    border: 3px solid #444343;
}
.testimonials .avatar-box .carousel__item .avatar p{
    color: #fff;
    padding-top: 15px;
    font-size: 20px;
    font-weight: bold;
}
.testimonials .avatar-box .carousel__item .avatar-info {
    color: #e0dede;
    font-size: 15px;
    line-height: 1.7;
}
.carousel__prev, .carousel__next{
    background-color: transparent;
    border: 1px solid #424141;
    border-radius: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 30px;
    padding: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3px;
}
.carousel__icon{
    fill: #fff;
}
.carousel__prev {
    position: absolute !important;
    top: 108% !important;
    left: 48% !important;
    transform: translate(-50%, -50%) !important;
}
.carousel__next{
    position: absolute !important;
    top: 108% !important;
    left: 53% !important;
    transform: translate(-50%, -50%) !important;
}
.vue3-star-ratings__wrapper{
    display: flex !important;
    justify-content: end !important;
}
.vue3-star-ratings button{
    display: none !important;
}
.vue3-star-ratings svg {
    width: 30px !important;
    height: 30px !important;
    padding: 0 4px;
}
</style>
