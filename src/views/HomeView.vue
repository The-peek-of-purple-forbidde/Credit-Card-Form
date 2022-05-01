<template>
  <div class="home">
    <credit-card />
    <h1>GOOD LUCK</h1>
    <Form />
  </div>
</template>

<script>
import CreditCard from "../components/CreditCard.vue";
import Form from "../components/Form.vue";

export default {
  name: "HomeView",
  components: { CreditCard, Form },
};
</script>
