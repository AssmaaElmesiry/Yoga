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
        
        <main class="grid grid-flow-row-dense lg:grid-cols-3 grid-col2 gap-4 container my-20">
            <section class="lg:col-span-2 col-span-1 bg-bg-event text-P-color">
                <img src="../assets/Events1.png"  class="w-full"/>
                <div class="details px-3 pt-3 ">
                    <h4 class="text-black">Yoga For Healthy Living</h4>
                    <ul class="flex p-0 mb-3">
                        <li class="mr-7">
                            <fa icon="clock" />
                            8:00 am 3:00 pm 
                        </li>
                        <li>
                            <fa icon="location-dot" />
                            New York City
                        </li>
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                    <p>Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt.mollit anim id est laborum. sed ut pers piciatis unde omnis iste natus error.sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                </div>
                <div class="text-left px-5">
                    <h3 class="text-p">03 Comments</h3>
                    <div class="flex items-start relative mb-4">
                        <img src="../assets/test4.png" class="w-1/12 h-1/12 rounded-full" />
                        <div class="flex flex-col ml-2 ">
                            <h4>Nihan Doe</h4>
                            <span>22 Jan, 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" class="absolute right-0 text-main">
                                <fa icon="reply" />
                                replay
                            </a>
                        </div>
                    </div>
                    <div class="flex items-start relative mb-4 ml-4">
                        <img src="../assets/test4.png" class="w-1/12 h-1/12 rounded-full" />
                        <div class="flex flex-col ml-2 ">
                            <h4>Nihan Doe</h4>
                            <span>22 Jan, 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" class="absolute right-0 text-main">
                                <fa icon="reply" />
                                replay
                            </a>
                        </div>
                    </div>
                    <div class="flex items-start relative mb-4">
                        <img src="../assets/test4.png" class="w-1/12 h-1/12 rounded-full" />
                        <div class="flex flex-col ml-2 ">
                            <h4>Nihan Doe</h4>
                            <span>22 Jan, 2020</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="#" class="absolute right-0 text-main">
                                <fa icon="reply" />
                                replay
                            </a>
                        </div>
                    </div>
                    <form>
                        <div class="flex justify-between">
                            <input placeholder="Name" type="text" class="input-style w-2/5"/>
                            <input placeholder="E-mail" type="email" class="input-style w-2/5"/>
                        </div>
                        <textarea placeholder="Your Comment" class="input-style w-full h-36 resize-none"></textarea>
                        <button1Vue class="ml-0">Add Comment</button1Vue>
                    </form>
                </div>
            </section>
            <aside class="">
                <div class="w-full relative flex items-center">
                    <input type="search" placeholder="Search" class="w-full rounded-2xl outline-none shadow-none border-1 border-solid border-main h-12 pl-3"/>
                    <fa icon="magnifying-glass" class="absolute right-2"/>
                </div>
                <div class="mt-3 text-left p-4 shadow-xl rounded-2xl">
                    <h3 class="text-p">
                        Event Information
                    </h3>
                    <ul v-for="item in items" :key="item" class="pl-0">
                        <li class="text-p mb-2 border-none border-b-2 border-gray-500">
                            <span class="text-main font-bold">{{ item.name }}</span> :  {{ item.value }}
                        </li>
                    </ul>
                </div>
                <button1Vue class="w-full flex justify-center">Register Now</button1Vue>
                <div class="mt-3 text-left p-4 shadow-xl rounded-2xl">
                    <h3 class="text-p">
                        Featured Events
                    </h3>
                    <div>
                        <ul class="p-0">
                            <a href="#" v-for="event in events" :key="event" class="flex items-start mb-2">
                                <div class="w-24"><img :src="event.img" class="w-full" /></div>
                                <div class="flex-col ml-2">
                                    <h5 class="text-base text-P-color font-bold m-0">{{ event.title }}</h5>
                                    <p class="text-xs text-P-color font-bold">{{ event.date }}</p>
                                </div>
                            </a>
                        </ul>
                    </div>
                </div>
                <div class="mt-3 text-left p-4 shadow-xl rounded-2xl">
                    <h3 class="text-p">
                        Tags
                    </h3>
                    <ul class="pl-0 flex flex-wrap">
                        <li class="" v-for="tag in tags" :key="tag" >
                            <a href="#" class="text-p  mb-1 mr-2">
                                {{ tag.item }}
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </main>
        <newsletterVue />
        <footerstyleVue />
    </section>
  
</template>

<script>
import button1Vue from './buttonStyle/button1.vue'
import footerstyleVue from './footerstyle.vue'
import headerStyleVue from './headerStyle.vue'
import newsletterVue from './newsletter.vue'
import img1 from "../assets/Events1.png"
import img2 from "../assets/Articles2.png"
import img3 from "../assets/Articles.png"
export default {
    components:{
        headerStyleVue,
        button1Vue,
        footerstyleVue,
        newsletterVue,
    },
    data() {
        return {
            items:[
                {
                    name: "Data",
                    value: "18 Feb 2020",
                },
                {
                    name: "Time",
                    value: "8:00 am 3:00 pm",
                },
                {
                    name: "Location",
                    value: "New York City",
                }
            ],
            events:[
                {
                    id: "1",
                    img: img1, 
                    title: "Hatha Yoga Training Festival",
                    date: "20 Feb 2020"
                },
                {
                    id: "2",
                    img: img2, 
                    title: "Origins Of Meditation",
                    date: "29 Feb 2020"
                },
                {
                    id: "3",
                    img: img3, 
                    title: "Meditation Workshop",
                    date: "25 dec 2020"
                },
            ],
            tags:[
                { item:"basic yoga" },
                { item:"meditation"},
                { item:"workshop"},
                { item:"fitness"},
                { item:"yoga tutorials"}
            ]
        }
    },
}
</script>

<style lang="css" scoped>
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
        text-align: justify;
    }
    .input-style{
        color: #666;
        outline: none;
        box-shadow: none;
        border-radius: 0;
        height: 60px;
        padding: 12px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #bcb4ef;
    }
</style>