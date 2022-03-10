<template>
<div class="WhatWeDo">
    <div class="title">
        <span class="icon">
            <fa icon="dharmachakra" />  
             <i class="fi fi-rr-user"></i>
        </span>
        <h2> What We Do</h2>
    </div>
    <section class="prodcts">
        <div class="container">
            <div class="mask">
                <div v-for="product in products" :key="product"  class="col-md-4 item">
                    <div class="bg-icon">
                        <fa icon="bahai" />
                    </div>
                    <div class="logo">
                        <img  :src="images" />
                    </div>
                    <h4 class="title">
                        {{ product.title }}
                    </h4>
                    <p class="desc">
                        {{ product.details }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>
<script>
export default {
    data() {
        return {
            images: ['/src/assets/1.png'],
            products: [
                {
                    title: 'Heal your emotions',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et. ',
                },
                {
                    title: 'Body & Spirituality',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et. ',
                },
                {
                    title: 'Refreshens your body',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et. ',
                },
                {
                    title: 'Enjoy your life',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et. ',
                },
                {
                    title: 'Balance Body & Mind',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et. ',
                },
                {
                    title: 'Mind & Serenity',
                    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et. ',
                },
            ]
        }
    },
}
</script>
<style>
.WhatWeDo{
    padding-top: 50px;
    padding-bottom: 50px
}
    .title{
        position: relative;
    }
    .title .icon{
        width: 160px;
        position: relative;
        display: inline-block;
    }
    .title .icon svg{
        font-size: 40px;
    }
    .title .icon:before,.title .icon:after{
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -1px;
        height: 2px;
        width: 50px;
        background-color: #7b6cd5;
    }
    .title .icon:before{
        left: 3px
    }
    .title .icon:after{
        right: 3px
    }
    .title h2{
        font-weight: bold;
        color: #000;
        padding-top: 15px;
    }
    .prodcts{
        padding-top: 50px;
    }
    .prodcts .mask{
        display: flex;
        flex-wrap: wrap;
    }
    .prodcts .mask .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        padding: 25px;
        position: relative;
    }
    .prodcts .mask .item .bg-icon{
        display: none;
    }
    .prodcts .mask .item .logo{
        background-color: #7b6cd5;
        padding: 10px;
        border-radius: 50%;
    }
    .prodcts .mask .item .title{
        padding-top: 10px
    }
    .prodcts .mask .item .desc{
        color: #888
    }
    .prodcts .mask .item .logo img{
        width: 100%;
        height: 100%;
    }
    .prodcts .mask .item:hover{
        background-color: #7b6cd5;
        color: #000;
        transition: all .5s ease-in-out
    }
    .prodcts .mask .item:hover p {
        color: #000;
    }
    .prodcts .mask .item:hover .bg-icon{
        opacity: 1;
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 146px;
        opacity: .1;
        margin-left: 0;
    }
    .prodcts .mask .item:hover .bg-icon svg{
        color: #fff;
    }
</style>