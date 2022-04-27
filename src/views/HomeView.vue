<template>
  <div class="home">
    <credit-card />
    <H1>GOOD LUCK</H1>
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
