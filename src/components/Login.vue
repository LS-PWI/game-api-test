<script>
export default{
    data() {
        return {
            playerName: "",
            password: "",
            response:"",
        }
    },
    methods: {

        async login(){
            
            const user = {player_ID:this.playerName, password:this.password};

            try{
                await fetch("https://balandrau.salle.url.edu/i3/players/join", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                
                }).then((response) => response.json())  
                .then((res) => {
                    
                    if(res.error == undefined){
                        this.response = "Token: " + res.token;
                    }else{
                        this.response = res.error.message;
                    }

                });
                
            }catch(error){
                this.response = "Lost API connection :(";
            }
           
        },

    }
}

</script>

<template>

    <div style="display:flex; flex-direction:column">
        <h2>LOGIN</h2>
    
        <input type="text" placeholder="PlayerName" name="PlayerName" v-model = "playerName">
        <input type="password" placeholder="Password" name="Password" v-model = "password">
        <input type="submit" v-on:click.prevent="login()" value="Login">

        <p>{{response}}</p>

        <div class="register_here">
            <p>Not Registered yet?</p>
            <router-link to="/Register" id="button">Register here</router-link>
        </div>
    </div>


</template>
