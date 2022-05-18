<template>
  <Form v-slot="{ values }">
    <p>Card Number</p>
    <Field
      name="CardNumber"
      type="CardNumber"
      :rules="isNumberRequired"
      :value="cardNumber"
      @input="$emit('update:cardNumber', $event.target.value)"
    >
    </Field>
    <ErrorMessage name="CardNumber" />
    <p>Card Holders</p>
    <Field
      name="CardHolders"
      type="CardHolders"
      :rules="isStringRequired"
      :value="cardHolder"
      @input="$emit('update:cardHolder', $event.target.value)"
    ></Field>
    <ErrorMessage name="CardHolders" />
    <p></p>
    {{ values }}
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "CreditCardForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: ["cardNumber", "cardHolder"],
  emits: ["update:cardNumber", "update:cardHolder"],
  data() {
    return {};
  },
  methods: {
    isNumberRequired(value) {
      if (value && value.trim) {
        return true;
      } else {
        return "請勿輸入空值";
      }
    },
    isStringRequired(value) {
      if (value && value.trim) {
        return true;
      } else {
        return "請勿輸入空值";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form input:focus {
  box-shadow: 0 5px 20px -3px black;
}
</style>
