<script>
export default {
    data() {
        return {
            playerName: "",
            password: "",
            response: "",
        }
    },
    methods: {
        login() {
            const user = { player_ID: this.playerName, password: this.password };
            fetch("https://balandrau.salle.url.edu/i3/players/join", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)

            }).then((response) => response.json())
                .then((res) => {
                    if (res.error == undefined) {
                        this.response = "Token: " + res.token;
                    } else {
                        this.response = res.error.message;
                    }

                }).catch(error => {
                    this.response = "Lost API connection :(";
                });
        },

    }
}
</script>

<template>
    <main style="display:flex; flex-direction:column">
        <section>
            <h2>Login</h2>

            <form style="display:flex; flex-direction:column">
                <input type="text" placeholder="PlayerName" name="PlayerName" v-model="playerName">
                <input type="password" placeholder="Password" name="Password" v-model="password">
                <input type="submit" v-on:click.prevent="login()" value="Login">
            </form>

            <p>{{ response }}</p>
        </section>
        <section>
            <div>
                <p>Not Registered yet?</p>
                <router-link to="/Register" id="button">Register here</router-link>
            </div>
        </section>
    </main>
</template>
