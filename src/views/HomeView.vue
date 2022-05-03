<template>
  <div class="home">
    <credit-card />
    <h1>GOOD LUCK</h1>
    <CreditCardForm />
  </div>
</template>

<script>
import CreditCard from "../components/CreditCard.vue";
import CreditCardForm from "../components/CreditCardForm.vue";

export default {
  name: "HomeView",
  components: { CreditCard, CreditCardForm },
};
</script>
