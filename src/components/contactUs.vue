<template>
    <section class="contactus">
        <section class="container">
            <div class="bg-icon">
                <fa icon="bahai" />
            </div>
            <form @Submit="onSubmit" @reset="onReset" v-if="show">
                <div class="user-box">
                    <input type="text" name="name" id="name" v-model="form.name" required>
                    <label>Your Name</label>
                </div>
                <div class="user-box">
                    <input type="EMail" name="Email" id="Email" v-model="form.email" required>
                    <label>E-Mail</label>
                </div>
                <div class="user-box">
                    <input type="text" name="Subject" id="Subject" v-model="form.subject" required>
                    <label>Subject</label>
                </div>                       
                <div class="user-box">
                    <textarea type="text" name="Message" required id="Message" v-model="form.text"></textarea>
                    <label for="Message">Your Message</label>
                </div>
                <div class="Send">
                    <button type="submit"  value="Submit">
                        <span>Send Now</span>
                    </button>
                </div>
            </form>
        </section>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          text: '',
          subject: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
<style lang="css">
    .contactus{
        position: relative;
        padding-top: 100px;
        padding-bottom: 100px;
        overflow: hidden;
        background-color: #f7f6f6;
    }
    .contactus .bg-icon {
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 500px;
        margin-left: 0;
        opacity: 0.1;
    }
    form > div {
        text-align: left;
    }
    form .user-box{
        position: relative;
        z-index: 1;
        margin-bottom: 40px !important;
    }
    form .user-box input, form .user-box textarea {
        width: 100%;
        border-radius: 0;
        outline: 0;
        border: none !important;
        border-radius: 0 !important;
        border-bottom: 1px solid #7b6cd5 !important;
        position: relative;
        background-color: transparent !important;
        resize: none;
    }
    form .user-box input:focus ~ label ,
    form .user-box input:valid ~label ,
    form .user-box textarea:focus ~ label ,
    form .user-box textarea:valid ~label{
        position: absolute;
        top: -30px;
        left: 0;
        color: #7b6cd5;
        font-size: 17px;
        font-weight: bold;
        transition: all .5s ease-in-out
    }
    form .user-box label{
        position: absolute;
        left: 15px;
        top: 0;
        z-index: -1;
        font-size: 13px;
    }
    form .Send{
        text-align: end;
    }
    form .Send button{
        position: relative;
        background: #7b6cd5;
        color: #fff;
        min-width: 150px;
        border-radius: 4px;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1.1px;
        text-align: center;
        padding: 15px 20px;
        border: 2px solid #7b6cd5;
        outline: none;
        cursor: pointer;
        margin-right: 14px;
        overflow: hidden;
    }
    form .Send button span{
        position: relative;
        z-index: 2;
    }
    form .Send button::before {
        content: "";
        background-color: #604dd6;
        position: absolute;
        top: 0;
        left: -25%;
        height: 104%;
        width: 0;
        transform: skew(-22deg);
        transition-duration: .6s;
        z-index: 1;
    }
    form .Send button:hover::before {
        width: 190%;
    }
    form .Send button:hover{
        border: 2px solid #604dd6;
    }
</style>