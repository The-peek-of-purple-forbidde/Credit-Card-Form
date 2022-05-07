<template>
  <div class="home">
    <credit-card :userCardNumber="userCardNumber" :cardHolder="cardHolder" />
    <h1>GOOD LUCK</h1>
    <CreditCardForm
      v-model:cardNumber.number="userCardNumber"
      v-model:cardHolder="cardHolder"
    />
  </div>
</template>

<script>
import CreditCard from "../components/CreditCard.vue";
import CreditCardForm from "../components/CreditCardForm.vue";

export default {
  name: "HomeView",
  components: {
    CreditCard,
    CreditCardForm,
  },
  data() {
    return {
      userCardNumber: 66666,
      cardHolder: "wendy",
    };
  },
};
</script>
