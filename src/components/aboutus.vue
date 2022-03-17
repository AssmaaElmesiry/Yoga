<template>
  <div class="Aboutus">
    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-6 main">
            <h3>{{maintitle}}</h3>
            <h4>{{title}}</h4>
            <p> {{firstpragraph}}</p>
            <p> {{secondpragraph}} </p>
            <div class="Progress">
              <div class="mask">
                <label>Flexibility</label>
                  <k-progress 
                    type="line"
                    :percent="90">
                  </k-progress>
              </div>
              <div class="mask">
                <label>Metabolism</label>
                  <k-progress 
                    type="line"
                    :percent="85">
                  </k-progress>
              </div>
              <div class="mask">
                <label>Breathing</label>
                  <k-progress 
                    type="line"
                    :percent="70">
                  </k-progress>
              </div>
            </div>
            <div class="read">
              <button1 />
            </div>
          </div>
          <div class="image col-md-6">
            <img src="../assets/about.png" />
            <div class="icon">
              <fa icon="bahai" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import button1 from '../components/buttonStyle/button1.vue'
export default {
  data(){
      return {
        maintitle: 'Welcome To Pranayama Studio',
        title: 'You can always control what goes on inside',
        firstpragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi sed do eiusm tempor incididunt ut labore et dolore magna.',
        secondpragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua.',
      }
  },
  components: {
    button1,
  }

}
</script>
<style>
.Aboutus{
  background-color: #f7f6f6;
  padding-top: 50px;
  padding-bottom: 50px;
}
section .main{
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: justify;
}
section .main h3 {
  font-size: 17px;
  letter-spacing: .4px;
  color: #7b6cd5;
  text-transform: capitalize;
  margin-bottom: 10px;
}
section .main h4 {
  font-size: 25px;
  color: #323232;
  font-weight: 600;
  line-height: 1.3;
  text-transform: capitalize;
  margin-bottom: 20px;
}
section .main p {
  font-size: 15px;
  line-height: 1.7;
  color: #888;
}
section .main .read a{
  margin: 0 !important;
}
section .image{
  position: relative;
}
section .image img{
  width: 100%;
  position: relative;
}
section .image .icon svg{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: .075;
}
section .image .icon svg::before{
  margin-left: 0;
  position: absolute;
  top: -42%;
  right: 0;
  font-size: 40em;
  width: 96%;
  height: 50%;
  color: #7b6cd5;
}
.Progress{
  padding-top: 25px;
}
.k-progress{
  margin: 0 !important;
  padding: 0 !important;
  padding-bottom: 10px !important;
}
.k-progress-outer-bg-border{
  height: 2px !important;
  width: 106% !important;
}
.k-progress-outer-line{
  height: 2px !important;
  margin-top: -2px !important;
  background-color: #7b6cd5 !important;
}
.k-progress-text{
  background-color: transparent;
  color: #7b6cd5;
  font-weight: bold;
  border-radius: 5px;
  padding: 4px;
  z-index: 1;
  bottom: 30px;
  right: 0;
  position: relative;
  border: 1px solid #7b6cd5;
}
.k-progress-outer-line{
  position: relative;
}
.k-progress-outer{
  position: relative;
}
.k-progress-text:after{
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #7b6cd5 transparent transparent transparent
}
</style>