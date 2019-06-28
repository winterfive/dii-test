<script>
export default {
  data: {
    text: "testing"
  }
  
}
</script>

<template>
  <v-tabs
    centered
    color="cyan"
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab href="#tab-1">
      All Players
      <v-icon>people</v-icon>
    </v-tab>

    <v-tab href="#tab-2">
      Filter Players
      <v-icon>filter_none</v-icon>
    </v-tab>

    <v-tab href="#tab-3">
      Add Player
      <v-icon>person_add</v-icon>
    </v-tab>

    <v-tab-item
      v-for="i in 3"
      :key="i"
      :value="'tab-' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

