<template>
    <div class="mask">
        <a href="" class="more">{{button}}</a>
    </div>
</template>
<script>
export default {
    data(){
        return {
           button: 'Learn More',
        }
    }
}
</script>
<style scoped>
.mask a {
 --color: #7b6cd5;
 font-family: inherit;
 display: flex;
 justify-content: center;
 align-items: center;
 width: 8em;
 height: 2.6em;
 line-height: 2.5em;
 margin: 20px;
 position: relative;
 overflow: hidden;
 transition: color .5s;
 z-index: 1;
 font-size: 17px;
 border-radius: 6px !important;
 font-weight: 500;
 color: #fff !important;
}
.mask .more{
    border: 2px solid transparent;
    background-color: #7b6cd5;
}

.mask a:before {
 content: "";
 position: absolute;
 z-index: -1;
 background: #6754d9;
 height: 150px;
 width: 200px;
 border-radius: 50%;
 border: 1px solid #6754d9;
}

.mask a:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
}

.mask a:hover:before {
 top: -30px;
 left: -30px;
}
.mask a:active:before {
 background: #7b6cd5;
 transition: background 0s;
}
</style>