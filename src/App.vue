<template>
  <router-link to="/" id="button">
    <h1> API Test </h1>
  </router-link>

  <div style="display: flex; justify-content: center;">
    <img src="https://i.pinimg.com/originals/63/91/03/639103eff63de2e26c5e1ecd0365712f.png">

    <RouterView></RouterView>

    <img style="transform: scaleX(-1);"
      src="https://i.pinimg.com/originals/63/91/03/639103eff63de2e26c5e1ecd0365712f.png">
  </div>
</template>
