<template>
  <p>card-userCardNumber:</p>
  <p>{{ userCardNumber }}</p>
  <p>card-cardHolder:</p>
  <p>{{ cardHolder }}</p>
  <div class="credit-card">edit line -----------------------</div>
</template>
<script>
export default {
  name: "CreditCard",
  props: ["userCardNumber", "cardHolder"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped></style>
