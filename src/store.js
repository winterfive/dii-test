import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    playerArray: [],
  },
  mutations: {
    SET_PLAYERS: function(state, players){
      state.playerArray = players;
    }
  }

})

const setPlayersToStore = () => {
  console.log("got to axios");

  axios
    .get("https://dii-test.s3.amazonaws.com/players.json")
    .then(function(response){
        store.commit('SET_PLAYERS', response.data)
    .catch(function(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  });  
}

setPlayersToStore();
