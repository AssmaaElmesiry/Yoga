<template>
    <Slide right class="MenuRight">
      <div class="logo">
        <fa icon="dharmachakra" />
        <h2>Logo</h2>
      </div>
      <div class="listMenu">
        <a id="home" href="#"> 
          <span>Home</span>
        </a>
        <a id="home" href="#"> 
          <span>Services</span>
        </a>
        <a id="home" href="#"> 
          <span>Schedule</span>
        </a>
        <a id="home" href="#"> 
          <span>Pricing</span>
        </a>
        <a id="home" href="#"> 
          <span>Contact US</span>
        </a>
      </div>
      <section>
        <h2>About Pranayama</h2>
        <p>Our Yoga studio has become one of the most popular yoga venues in USA. It is time to discover your passion. </p>
      </section>
      <ul class="socialMedia">
        <li> 
          <a href="#">
          </a>
        </li>
      </ul>
    </Slide>
</template>
<script>
import { Slide } from 'vue3-burger-menu'
export default {
  components: {
    Slide,
  },
  data() {
    return {
      
    }
  }
}
</script>
<style>
body{
  background-color: #fff !important;
}
.bg-gray-100{
  background-color: #fff !important;
  position: fixed;
  z-index: 9;
  width: 100%;
}
.bg-gray-100 .container {
  justify-content: space-around !important;
}
.hover\:text-blue-400:hover{
  color: #000 !important;
  }
.bm-burger-button {
    position: fixed;
    width: 20px !important;
    height: 12px !important;
    top: 42px;
    left: auto !important;
    right: 36px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background-color: #373a47 !important;
  }
  .line-style {
    position: absolute;
    height: 20%;
    border-radius: 25px;
    left: 0;
    right: 0;
  }
  .cross-style {
    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
  }
  .bm-cross {
    background: #7b6cd5 !important;
  }
  .bm-cross-button {
    height: 30px;
    width: 30px;
    border: 1px solid #7b6cd5 !important;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bm-menu {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1000; 
    top: 0;
    left: -1px;
    background-color: #fff !important;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    border-left: 1px solid #7b6cd554;
  }
  .bm-menu .logo{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
  }
  .bm-menu .logo svg{
    font-size: 35px;

  }
  .bm-menu .logo h2{
    font-size: 45px;
    color: #000;
  }
  .bm-menu .listMenu {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bm-menu .listMenu a {
    color: #000;
    padding: 10px 0
  }
  .bm-menu section{
    display: flex;
    flex-direction: column;
  }
  .bm-menu section h2{
    font-size: 25px;
    color: #000;
    font-weight: bold;
  }
  .bm-menu section p{
    font-size: 16px;
    color: #000;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
  .bm-item-list {
    color: #b8b7ad;
    font-size: 20px;
    padding: 0 !important;
    margin: 0 !important;
  }
  .bm-item-list > div {
    display: flex;
    text-decoration: none;
    padding: 1.7em;
  }
  .bm-item-list > section{
    padding: 0 1.7em;
  }
  .bm-item-list > *{
    padding: 0
  }
  .bm-item-list > * > span {
    margin-left: 10px;
    font-weight: 700;
    color: #000;
  }
  @media(max-width: 767px){
    /* .MenuRight{
      display: none;
    } */
  }
</style>