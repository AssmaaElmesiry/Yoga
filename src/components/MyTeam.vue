<template>
    <div class="MyTeam">
    <div class="title">
        <span class="icon">
            <fa icon="dharmachakra" />  
             <i class="fi fi-rr-user"></i>
        </span>
        <h2> Our Awesome Team</h2>
    </div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mask">
                    <div class="member-img">
                        <img src="../assets/team1.png" />
                        <div class="item">
                            <div class="socialMedia">
                                <fa icon="laptop" />
                                <fa icon="brain" />
                                <fa icon="calendar" />
                                <fa icon="hashtag" />
                            </div>
                        </div>
                    </div>
                    <h4>Razan Smith</h4>
                    <p>Yoga Teacher</p>
                </div>
                <div class="col-md-4 mask">
                    <div class="member-img">
                        <img src="../assets/team2.png" />
                        <div class="item">
                            <div class="socialMedia">
                                <fa icon="laptop" />
                                <fa icon="brain" />
                                <fa icon="calendar" />
                                <fa icon="hashtag" />
                            </div>
                        </div>
                    </div>
                    <h4>Razan Smith</h4>
                    <p>Yoga Teacher</p>
                </div> 
                <div class="col-md-4 mask">
                    <div class="member-img">
                        <img src="../assets/team3.png" />
                        <div class="item">
                            <div class="socialMedia">
                                <fa icon="laptop" />
                                <fa icon="brain" />
                                <fa icon="calendar" />
                                <fa icon="hashtag" />
                            </div>
                        </div>
                    </div>
                    <h4>Razan Smith</h4>
                    <p>Yoga Teacher</p>
                </div>        
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
}
</script>
<style>
.MyTeam{
    padding-top: 80px;
    background-color: #f7f6f6;
    padding-bottom: 80px;
}
.MyTeam .mask {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.MyTeam .mask p{
    color: #7b6cd5;
}
.MyTeam .mask .member-img{
    border-radius: 8px;
    position: relative;
    overflow: hidden;
}
.MyTeam .mask .member-img .item{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.5);
    transform: scaleX(0);
    transition: all .5s ease-in-out;
}
.MyTeam .mask .member-img:hover .item{
    transform: scaleX(1);
}
.MyTeam .mask .member-img .item:before{
    display: none;
}
.MyTeam .mask .member-img:hover img{
    transform: scale(1.1);
    transition: all .4s ease-in-out;
}
.MyTeam .mask .member-img:hover .item .socialMedia svg{
    transform: translateY(-54px);
    visibility: visible;
    opacity: 1;
}
.MyTeam .mask .member-img .item .socialMedia{
    position: relative;
    top: 50%;
    left: 50%;
    width: 77%;
    transform: translate(-50% , 50px);
    display: flex;
    justify-content: space-evenly;
}
.MyTeam .mask .member-img .item .socialMedia svg{
    padding-right: 15px;
    font-size: 20px;
    color: #fff;
    border: 1px solid #7b6cd5;
    border-radius: 50%;
    background-color: #7b6cd5;
    padding: 8px;
    transition: all .5s ease-in-out;
}
.MyTeam .mask .member-img:hover .item .socialMedia svg:nth-child(2){
    transition-delay: .15s;
}
.MyTeam .mask .member-img:hover .item .socialMedia svg:nth-child(3){
    transition-delay: .20s;
}
.MyTeam .mask .member-img:hover .item .socialMedia svg:nth-child(4){
    transition-delay: .25s;
}
</style>