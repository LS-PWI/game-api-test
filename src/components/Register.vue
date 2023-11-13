<script>
export default{
    data() {
        return {
            playerName: "",
            password: "",
            img: "",

            response:"",
        }
    },
    methods: {

        async register(){
            
            const user = {player_ID:this.playerName, password:this.password, img:this.img};

            try{
                await fetch("https://balandrau.salle.url.edu/i3/players", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                
                }).then((response) =>{   
                    if(response.ok){
                        this.response = "Player created! ";
                        return response;
                    }

                    return response.json();
                    
                }).then((res) => {
    
                    if(res.ok == undefined){
                        this.response = res.error.message;
                    }

                });
                
            }catch(error){
                this.response = "Lost API connection :(";
            }
           
        }
    }
}

</script>

<template>
    
    <div style="display:flex; flex-direction:column">
        <h2>REGISTER</h2>
   
        <input type="text" placeholder="PlayerName" name="PlayerName" v-model = "playerName">
        <input type="password" placeholder="Password" name="Password" v-model = "password" v-on:keyup.enter="register">
        <input type="text" placeholder="Image URL" name="img" v-model = "img">

        <input type="submit" v-on:click.prevent="register()" value="Register">

        <p><br>{{ response }}</p>
        
        <div class="register_here">
            <p>Already Registered?</p>
            <router-link to="/Login" id="button">Login here</router-link>
        </div>

        

    </div>

</template>