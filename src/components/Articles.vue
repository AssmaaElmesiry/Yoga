<template>
    <div class="container">
        <div class="Events">
                <div class="title">
                    <span class="icon">
                        <fa icon="dharmachakra" />  
                        <i class="fi fi-rr-user"></i>
                    </span>
                    <h2> Our Latest Articles</h2>
                </div>
            <div class="row">
                <div class="col-md-6 main" >
                    <section>
                        <img src="../assets/Articles1.png" />
                        <div class="details">
                            <h4>Relax Your Body</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et... </p>
                            <router-link to="/eventdetails">Continue Reading</router-link>
                        </div>
                    </section>
                </div>
                <div class="col-md-6 main" >
                    <section>
                        <img src="../assets/Articles.png" />
                        <div class="details">
                            <h4>Yoga For Children</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et... </p>
                            <router-link to="/eventdetails">Continue Reading</router-link>
                        </div>
                    </section>
                </div>
                <button1 />
            </div>
        </div>
    </div>
</template>
<script>
import button1 from '../components/buttonStyle/button1.vue'
export default {
    data() {
        return {
            Event1: '../assets/Events1.png',
            Event2: '../../src/assets/Events2.png',
        }
    },
    components: {
        button1,
  }
}
</script>
<style>
.Events .mask{
    display: flex;
    justify-content: center;
}
.Events{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Events .main section img{
    width: 100% !important;
    height: 350px !important;
}
.Events .main section{
    padding-top: 40px
}
.Events .main section .details{
    position: relative;
    padding: 20px 10px;
    text-align: justify;
    border: 1px solid #eee;
    background-color: #eeeeee61;
}
.Events .main section .details:before{
    content: "18 Feb";
    position: absolute;
    top: -47px;
    left: -1px;
    background-color: #7b6cd5;
    color: #fff;
    border-radius: 0 4px 4px 0;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .3px;
    padding: 15px;
    line-height: 1;
    text-align: center;
}
.Events .main section .details h4{
    color: #323232;
    font-size: 19px;
    font-weight: 600;
    letter-spacing: .3px;
    text-transform: capitalize;
    margin-bottom: 10px;
}
.Events .main section .details .event{
    padding-left: 0 !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 63%;
    padding: 10px 0;
    color: #888;
}
.Events .main section .details .event li{
    font-size: 14px;
    color: #888;
    letter-spacing: .4px;
    margin-bottom: 10px;
}
.Events .main section .details p{
    color: #888;
    font-size: 15px;
}
.Events .main section .details a{
    color: #7b6cd5;
}
</style>