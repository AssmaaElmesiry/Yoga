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
                        <form>
                            <input type="EMail" name="Email" id="Email" required>
                            <button2 />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import button2 from '../components/buttonStyle/button2.vue'
export default {
    components: {
        button2
    }
}
</script>
<style lang="css">
    .newsletter{
        background-color: #f7f6f6
    }
    .newsletter .item{
        background: #7b6cd5;
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
    }
</style>