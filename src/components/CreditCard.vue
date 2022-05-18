<template>
  <p>card-userCardNumber:</p>
  <p>{{ userCardNumber }}</p>
  <p>card-cardHolder:</p>
  <p>{{ cardHolder }}</p>
  <div class="credit-card">edit line -----------------------</div>
  <div class="scene scene--card">
    <div class="card">
      <div class="card__face card__face--front">正面待補</div>
      <div class="card__face card__face--back">
        <div class="card-back__band"></div>
        <div class="card-back__content">
          <div class="card-back__title">CVV</div>
          <div class="card-back__enter">
            <span></span>
          </div>
          <div class="card-back__img">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png"
              class="card-item__typeImg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreditCard",
  props: ["userCardNumber", "cardHolder"],
  data() {
    return {};
  },
  mounted() {
    var card = document.querySelector(".card");
    card.addEventListener("click", function () {
      card.classList.toggle("is-flipped");
    });
  },
};
</script>
<style lang="scss" scoped>
// 卡片的設定部分
.scene {
  width: 430px;
  height: 270px;
  margin: 0 auto;
  perspective: 600px;
}
.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card.is-flipped {
  transform: rotateY(180deg);
}
.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  backface-visibility: hidden;
}
// 正面的卡片樣式
.card__face--front {
  box-shadow: 0px 12px 40px -12px #132b5a;
  background-image: url(https://github.com/muhammed/vue-interactive-paycard/blob/master/src/assets/images/19.jpeg?raw=true);
}

// 背面的卡片樣式
.card__face--back {
  box-shadow: 0px 12px 40px -12px #132b5a;
  background-image: url(https://github.com/muhammed/vue-interactive-paycard/blob/master/src/assets/images/19.jpeg?raw=true);

  transform: rotateY(180deg);
}
.card-back__band {
  background: black;
  width: 100%;
  height: 50px;
  margin-top: 30px;
}
.card-back__content {
  width: 90%;
  margin: 0 auto;
  text-align: right;
}
.card-back__title {
  margin-top: 1rem;
  font-size: 15px;
}
.card-back__enter {
  margin-bottom: 2rem;
  height: 40px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  span {
    display: block;
    height: 100%;
    color: #000;
    line-height: 42px;
  }
}
.card-back__img {
  display: inline-block;
  width: 75.47px;
  height: 40px;
  img {
    width: 100%;
  }
}
</style>
