<template>
    <section class="newsletter">
        <div class="container">
            <div class="item">
                <div class="row">
                    <div class="col-md-5 left">
                        <h2>Subscribe to our newsletter</h2>
                        <p>Get started with Pranayama, Start working together Easily</p>
                    </div>
                    <div class="col-md-7 right">
                        <form class="sm:flex-row flex-col">
                            <input type="EMail" name="Email" id="Email" placeholder="Enter your email" required>
                            <button1 />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    components: {
        button1
    }

}
import button1 from '../components/buttonStyle/button1.vue'
</script>
<style lang="css">
    .newsletter{
        background-color: #f7f6f6
    }
    .newsletter .item{
        background: #c5bfe9;
        padding: 30px 40px;
        border-radius: 7px;
        position: relative;
        z-index: 3;
        margin-bottom: -100px;
    }
    .newsletter .item .left{
        display: flex;
        flex-direction: column;
        align-self: center;
        text-align: left;
    }
    .newsletter .item .left h2 ,
    .newsletter .item .left p
    {
        color: #fff;
    }
    .newsletter .item .left h2{
        font-size: 26px;
        font-weight: 600;
        letter-spacing: .2px;
        color: #fff;
        margin-bottom: 8px;
    }
    .newsletter .item .left p{
        font-size: 15px;
        color: #f1f3f1;
        margin: 0;
    }
    .newsletter .item .right form{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    .newsletter .item .right form input{
        width: 100%;
        padding: 10px 0 10px 20px;
        border-radius: 7px;
        outline: none;
        border: none;
        font-weight: bold;
    }
</style>