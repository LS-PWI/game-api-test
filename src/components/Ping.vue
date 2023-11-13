<script>
  export default{

  data() {
      return {
          showLoginRegister: false,
          response: "",
      }
  },
  methods: {

      async ping(){

        try{
          await fetch("https://balandrau.salle.url.edu/i3/ping", {
              method: 'GET',
              headers: {'Content-Type': 'application/json'},
          }).then(res => {
              this.showLoginRegister = true;
          });
        }catch (error){
          this.response = "No connection with API";
          this.showLoginRegister = false;
        }
      }

  },

}
</script>

<template>
    <div style="display: flex; flex-direction: column; ">
        <button style="margin: auto;" v-on:click="ping()">PING</button>

        <div v-if="showLoginRegister">
          <router-link :to="{name:'Login'}">Login </router-link>
          <router-link :to="{name:'Register'}">Register </router-link>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/treasure-chest-7111541-5769376.png?f=webp" style="width: 80px; margin-top: 10px;">
        </div>
        <p v-else>{{ response }}</p>

      </div>
</template>