<script>
export default {
    data() {
        return {
            playerName: "",
            password: "",
            img: "",
            banner: "",
        }
    },
    methods: {
        register() {
            const createUserRequest = { player_ID: this.playerName, password: this.password, img: this.img };
            fetch("https://balandrau.salle.url.edu/i3/players", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(createUserRequest)
            }).then((response) => {
                if (response.ok) {
                    this.response = "Player created!";
                    return response;
                }

                return response.json();
            }).then((res) => {
                if (res.ok == undefined) {
                    this.response = res.error.message;
                }
            }).catch((error) => {
                this.response = "No connection with API";
            });
        }
    }
}
</script>

<template>
    <main style="display:flex; flex-direction:column">
        <section>
            <h2>Register</h2>

            <form style="display:flex; flex-direction:column">
                <input type="text" placeholder="PlayerName" name="PlayerName" v-model="playerName">
                <input type="password" placeholder="Password" name="Password" v-model="password">
                <input type="text" placeholder="Image URL" name="img" v-model="img">

                <input type="submit" v-on:click.prevent="register()" value="Register">
            </form>

            <p>{{ response }}</p>
        </section>
        <section>
            <div>
                <p>Already Registered?</p>
                <router-link to="/Login" id="button">Login here</router-link>
            </div>
        </section>
    </main>
</template>
