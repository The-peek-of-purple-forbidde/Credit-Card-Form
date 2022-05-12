<template>
  <Form v-slot="{ values }">
    <p>Card Number</p>
    <Field
      maxlength="16"
      name="CardNumber"
      type="CardNumber"
      :rules="isValidateCardNumber"
      :value="cardNumber"
      @input="$emit('update:cardNumber', $event.target.value)"
    >
    </Field>
    <ErrorMessage name="CardNumber" />
    <p>Card Holders</p>
    <Field
      name="CardHolders"
      type="CardHolders"
      :rules="isFormattedHolderName"
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
import {
  isRequired,
  hasOnlyNumber,
  hasDigitsOf,
  isValidatedCard,
} from "../assets/validation/cardNumber";
import { isFormattedEnglishName } from "../assets/validation/cardHolder";
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
    // isStringRequired(value) {
    //   if (value && value.trim) {
    //     return true;
    //   } else {
    //     return "請勿輸入空值";
    //   }
    // },
    isValidateCardNumber(value) {
      if (!isRequired(value)) return "請勿輸入空值";
      if (!hasOnlyNumber(value)) return "格式不符";
      if (!hasDigitsOf(16)(value)) return "長度不符";
      if (!isValidatedCard(value)) return "卡號是假的";
      return true;
    },
    isFormattedHolderName(value) {
      if (!isRequired(value)) return "請勿輸入空值";
      if (!isFormattedEnglishName(value)) return "格式不符";
      return true;
    },
  },
};
</script>
