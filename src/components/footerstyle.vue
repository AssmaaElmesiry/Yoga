<template>
    <section class="footer">
        <div class="container">
            <div class="topfooter">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 col-12">
                        <h2> <fa icon="dharmachakra"/>Pranayama</h2>
                        <ul class="info">
                            <li v-for="item in info" :key="item">{{item}}</li>
                            <ul class="social">
                                <li> <fa icon="link" /></li>
                                <li> <fa icon="laptop" /> </li>
                                <li> <fa icon="brain" /> </li>
                                <li> <fa icon="calendar" /> </li>
                                <li> <fa icon="hashtag" /> </li>
                            </ul>
                        </ul>

                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <h2>Company</h2>
                        <ul class="list">
                            <li v-for="item in Company" :key="item">
                                <a href="#"><fa icon="chevron-right"/>{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <h2>Company</h2>
                        <ul class="list">
                            <li v-for="item in Menu" :key="item">
                                <a href="#"><fa icon="chevron-right"/>{{item}}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-sm-6 col-12">
                        <h2>Company</h2>
                        <ul class="list">
                            <li v-for="item in Support" :key="item">
                                <a href="#"><fa icon="chevron-right"/>{{item}}</a>
                            </li>
                        </ul>
                    </div>               
                </div>
            </div>
            <div class="downFooter">
            <p>
                © 2021 
                <span>
                    Pranayama
                </span>
                 All rights reserved
            </p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            info:['NewYork, USA','info@pranayama.com','+1 212 118-2110'],
            Company:['Home','About us','Services','Our Team'],
            Menu:['Pricing Plans','News','events','Contact'],
            Support:['Support Center','Partners','FAQ','404'],
        }
    },
}
</script>
<style lang="css" scoped>
    ul{
        padding-left: 0!important;
        text-align: left;
    }
    ul li{
        padding-bottom: 15px
    }
    .topfooter{
        border-bottom: 1px solid #3b3b3e;
        padding: 50px 0;
    }
    .footer{
        background-color: #333;
        height: auto;
        width: 100%;
        padding-top: 130px;
    }
    .footer h2{
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        padding-left: 5px;
        margin-bottom: 20px;
    }
    .footer h2 svg{
        padding-right: 7px;
    }
    .footer .info li{
        text-align: left;
        color: #e0dede;
    }
    .footer .social{
        display: flex;
        width: 70%;
        justify-content: space-between;
    }
    .footer .social li svg{
        border: 1px solid #7b6cd5;
        border-radius: 50%;
        padding: 10px;
        transition: all .4s ease-in-out;
    }
    .footer .social li svg:hover{
        background-color: #7b6cd5;
        color: #fff;
        transition: all .4s ease-in-out;
    }
    .footer .list a{
        color: #e0dede;
        transition: all .4s ease-in-out;
        display: flex;
        align-items: center;

    }
    .footer .list a:hover{
        color: #7b6cd5;
        padding-left: 15px;
        transition: all .4s ease-in-out;
    }
    .footer .list a:hover svg{
        color: #7b6cd5;
        transition: all .4s ease-in-out;
    }
    .footer .list svg{
        padding-right: 7px;
        color: #e0dede;
        font-size: 10px;
        transition: all .4s ease-in-out;
    }
    .footer .info ,.footer .list {
        padding-left: 1rem !important;
    }
    .footer .downFooter{
        padding: 20px 0;
    }
    .footer .downFooter p{
        color: #e0dede;
        letter-spacing: 1px;
    }
    .footer .downFooter p span{
        color: #7b6cd5;
        font-weight: bold;
    }
    @media(max-width: 500px){
        .footer .list{
            padding-left: 50px !important;
        }
        .footer .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
</style>