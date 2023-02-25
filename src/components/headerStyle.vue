<template>
  <div class="bg-gray-100 shadow-sm">
    <nav class="px-6 py-8 mx-auto md:flex w-991:justify-between w-991:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class=" flex items-center text-xl font-bold text-gray-800 w-991:text-2xl hover:text-blue-400"> <fa icon="dharmachakra" class="text-4xl pr-4" />Logo
        </router-link>
      </div>
      <HelloWorld />
    </nav>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
export default {
    data() {
      return {
        showMenu: false,
        isDropped: true
      };
    },
    methods: {
      dropIt() {
        this.isDropped = !this.isDropped
      }
    },
    components: { 
      HelloWorld,
    }
}
</script>
<style>
.flex-col li a{
  color: #000;
}
.flex-col li .btn-group .dropdown-toggle{
  background-color: transparent;
  color: #000;
  font-weight:bold;
  border: none;
  outline: none;
  box-shadow: none;
  height: min-content;
}
.dropdown-menu{
  padding: 0 !important;
}
.dropdown-menu li{
  padding: 12px 15px;
  border-bottom: 1px solid #f3f1f1;
}
.dropdown-menu li:last-child{
  border-bottom: 3px solid #7b6cd5;
}
.dropdown-menu.show{
  border: none;
  width: 250px;

}
.dropdown-item:hover{
  background-color: transparent !important;
}
.dropdown-item{
  transition: all .4s ease-in-out !important;
}
.dropdown-item a{
  color: #8e8d8d !important;
  font-weight: bold !important;
  transition: all .4s ease-in-out !important;

}
.dropdown-item:hover a{
  background-color: transparent !important;
  padding-left: 5px;
  transition: all .4s ease-in-out;
  color: #7b6cd5 !important;
}
.md\:space-x-10 > :not([hidden]) ~ :not([hidden]){
  margin-left: 5px !important;
}
.text-sm.font-bold.text-gray-800.hover\:text-blue-400{
  display: flex;
}
@media(max-width: 767px){
  .dropdown-menu.show{
    position: static !important;
    transform: translate(-80px, 30px) !important;
    margin-bottom: 7px !important;
  }
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.show {display:block;}
</style>