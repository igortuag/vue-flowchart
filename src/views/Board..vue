<template>
  <div class="board">
    <h1>Board</h1>

    <div v-for="card in cards" :key="card.id">
      <Card :content="card.content" :cards="card.cards" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Card from './Card.vue';

export default {
  data() {
    return {
      cards: {},
    };
  },
  components: {
    Card,
  },
  mounted() {
    axios.get('http://localhost:3000/cards').then((response) => {
      this.cards = response.data;
      console.log(response);
    });
  },
};
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.board {
  min-width: 1200px;
  margin: 0;
  padding: 50px;
  font: 16px Verdana, sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
