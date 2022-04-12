<template>
  <div class="bg-gray-100">
    <nav class=" container px-6 py-8 mx-auto md:flex w-991:justify-between w-991:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class=" text-xl font-bold text-gray-800 w-991:text-2xl hover:text-blue-400"> <fa icon="dharmachakra" />Logo
        </router-link>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex w-991px:hidden">
          <button
            type="button"
            class="
              text-gray-800
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
            >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
          </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
          flex-col
          mt-8
          space-y-4
          md:flex
          md:space-y-0
          md:flex-row
          md:items-center
          md:space-x-10
          md:mt-0
        ">
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <b-dropdown  href="#" text="Home"> 
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
          </b-dropdown>
        </li>
     <li>
       <button @click="dropIt">Pet Options</button>
          <div id="myDropdown" class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
      </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <b-dropdown  href="#" text="Classes"> 
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
          </b-dropdown>
        </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <b-dropdown  href="#" text="Trainer"> 
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
          </b-dropdown>
        </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <b-dropdown  href="#" text="Events"> 
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
          </b-dropdown>
        </li>
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <b-dropdown  href="#" text="Blog"> 
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
            <b-dropdown-item><a href="#">First Action</a></b-dropdown-item>
          </b-dropdown>
        </li>        
        <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
          <a href="#">Contact Us </a>
        </li>
        <li>
          <HelloWorld />
        </li>
      </ul>
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