<template>
  <div class="box">
    <div class="box__content">
      <h2 class="card-message__title">Digite a msg</h2>
      <input class="card-message__input" v-model="inputMessage" type="text" />
      <span class="card-message__content">
        {{ content }}
      </span>
      <button class="card-message_add" @click="addMessage">+</button>
    </div>
    <div class="box__cards">
      <div v-for="card in cards" :key="card.id">
        <Card :content="card.content" :cards="card.cards" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Card',
  data() {
    return {
      inputMessage: '',
    };
  },
  props: {
    content: String,
    cards: Object,
  },
  methods: {
    addMessage() {
      if (this.cards) {
        this.cards.push({ content: this.inputMessage });
      } else {
        this.cards = [{ content: 'Teste' }];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
// main-ul => card

.box {
  border-left: 2px solid black;
  display: flex;
  align-items: center;
  margin-left: 10px;

  &__content {
    margin-bottom: 15px;
    background: #c4bdff;
    width: 100px;
    height: 100px;

    &::after {
      content: '';
      width: 150000px;
      border-top: 2px solid black;
    }
  }

  &:before {
    content: '';
    width: 15px;
    border-top: 2px solid black;
  }

  &__cards {
    display: flex;
    flex-direction: column;
  }
}

.card-message__input {
  width: 70%;
}

.box__content:before {
  content: '';
  width: 15000px;
  border-top: 2px solid black;
}

.card-message__title {
  font-size: 14px;
}
</style>
