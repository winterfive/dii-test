<script>

import AddPlayer from '@/components/AddPlayer.vue';


export default {
  components: {
    AddPlayer
  },
    data () {
      return {
        text: 'testing'
      }
    }
  };
</script>

<template>
  <v-tabs
    centered
    color="cyan"
    dark
    icons-and-text
  >
    <v-tabs-slider color="yellow"></v-tabs-slider>

    <v-tab :key="1">
      All Players
      <v-icon>people</v-icon>
    </v-tab>

    <v-tab :key="2">
      Filter Players
      <v-icon>filter_none</v-icon>
    </v-tab>

    <v-tab :key="3">
      Add Player
      <v-icon>person_add</v-icon>
    </v-tab>

    <v-tab-item :key="1">
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item :key="2">
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item :key="3">
      <v-card flat>
        <AddPlayer/>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<style lang="scss">
.v-tabs {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
