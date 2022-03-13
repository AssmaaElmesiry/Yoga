<template>
    <div class="OurPricing">
        <div class="container">
            <div class="title">
                <span class="icon">
                    <fa icon="dharmachakra" />  
                    <i class="fi fi-rr-user"></i>
                </span>
                <h2> Our Pricing</h2>
            </div>
            <div class="row">
                <div class="col-md-4 mask">
                    <div class="item">
                        <div class="pricing-head">
                            <h2>Basic Plan</h2>
                            <div class="pricing-price">
                                <p>
                                    <span class="up">$</span>
                                    <span class="price">50</span>
                                    <span class="down">/Mo</span>
                                </p>
                            </div>
                        </div>
                        <ul class="pricing-feature">
                            <li v-for="item in items"> {{item}} </li>
                        </ul>
                        <buttonStyle />
                    </div>
                </div>
                <div class="col-md-4 mask">
                    <div class="item active">
                        <div class="pricing-head">
                            <div class="bg-icon">
                                <fa icon="bahai" />
                            </div>
                            <h2>Basic Plan</h2>
                            <div class="pricing-price">
                                <p>
                                    <span class="up">$</span>
                                    <span class="price">50</span>
                                    <span class="down">/Mo</span>
                                </p>
                            </div>
                        </div>
                        <ul class="pricing-feature">
                            <li v-for="item in items"> {{item}} </li>
                        </ul>
                        <buttonStyle />
                    </div>
                </div>
                <div class="col-md-4 mask">
                    <div class="item">
                        <div class="pricing-head">
                            <h2>Basic Plan</h2>
                            <div class="pricing-price">
                                <p>
                                    <span class="up">$</span>
                                    <span class="price">50</span>
                                    <span class="down">/Mo</span>
                                </p>
                            </div>
                        </div>
                        <ul class="pricing-feature">
                            <li v-for="item in items"> {{item}} </li>
                        </ul>
                        <buttonStyle />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import buttonStyle from '../components/buttonStyle.vue'
export default {
    components: {buttonStyle,},
    data() {
        return {
            items:['Starter Pack Included','Personal Trainer','Special Class','Free Tutorials','Group Training',]
        }
    },
}
</script>
<style>
.OurPricing .mask .item .mask{
    padding: 0!important;
}
.OurPricing .mask .item .mask .more{
    display: none;
}
.OurPricing .mask .item .mask .contact{
    border: 1px solid #7b6cd5 !important;
    color: #7b6cd5 !important;
}
.OurPricing .mask .item .mask .contact:hover{
    color: #fff !important;
}
.OurPricing .mask .item.active .mask .contact{
    display: none;
}
.OurPricing .mask .item.active .mask .more{
    display: block;
}
.OurPricing .mask .item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.OurPricing .mask .item.active .pricing-head .bg-icon{
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 146px;
    margin-left: 0;
    opacity: 0.1;
}
.OurPricing .mask .item.active .pricing-head .bg-icon svg {
    color: #fff;
}
.OurPricing{
    padding-top: 50px;
}
.OurPricing .mask{
    padding-top: 50px
}
.OurPricing .mask .item .pricing-head {
    padding: 20px;
    position: relative;
    width: 100%;
}
.OurPricing .mask .item.active .pricing-head {
    background: #7b6cd5;
    border-radius: 5px;
    
}
.OurPricing .mask .item.active .pricing-head h2 {
    color: #fff;
}
.OurPricing .mask .item.active .pricing-head .pricing-price p {
    color: #fff;
}
.OurPricing .mask .item .pricing-head h2 {
    color: #666;
    font-size: 20px;
}
.OurPricing .mask .item .pricing-head .pricing-price {
    position: relative;
    z-index: 1;
}
.OurPricing .mask .item .pricing-head .pricing-price p {
    color: #7b6cd5;
}
.OurPricing .mask .item .pricing-head .pricing-price p .up {
    font-size: 20px;
    vertical-align: top;
}
.OurPricing .mask .item .pricing-head .pricing-price p .price {
    font-size: 50px;
    vertical-align: middle;
}
.OurPricing .mask .item .pricing-head .pricing-price p .down {
    font-size: 15px;
    vertical-align: bottom;
}
.OurPricing .mask .item .pricing-feature {
    padding-top: 15px
}
.OurPricing .mask .item .pricing-feature li{
    color: #888;
    font-size: 20px;
    padding-bottom: 15px;
}
</style>