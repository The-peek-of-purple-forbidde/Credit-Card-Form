<template>
  <p>card-userCardNumber:</p>
  <p>{{ userCardNumber }}</p>
  <p>card-cardHolder:</p>
  <p>{{ cardHolder }}</p>
  <div class="credit-card">edit line -----------------------</div>
  <div class="scene scene--card">
    <div class="card">
      <!-- 卡片前面 (AJay) -->
      <div class="card__face card__face--front">
        <div class="card-front">
          <div class="card-front__wrapper">
            <div class="card-front__header">
              <img
                class="card-front__chip"
                src="@/assets/images/chip.png"
                alt="card chip"
              />
              <img
                class="card-front__type"
                src="@/assets/images/visa.png"
                alt="visa"
              />
            </div>
            <div class="card-front__body">
              <label for="cardNumber" class="card-front__number">
                <span>####</span>
                <span>####</span>
                <span>####</span>
                <span>####</span>
              </label>
            </div>
            <div class="card-front__footer">
              <label class="card-front__info" for="cardName">
                <div class="card-front__holder">Card Holder</div>
                <div class="card-front__name">FULL NAME</div>
              </label>
              <div class="card-front__date">
                <label class="card-front__date-title" for="cardMonth"
                  >Expires</label
                >
                <div class="card-front__date-body">
                  <label class="card-front__date-item" for="cardMonth"
                    >MM</label
                  >
                  <span class="card-front__date-item">/</span>
                  <label class="card-front__date-item" for="cardYear">YY</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 卡片後面 (JiaXian) -->
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
  background-image: url("@/assets/images/19.jpeg");
}

// 背面的卡片樣式
.card__face--back {
  box-shadow: 0px 12px 40px -12px #132b5a;
  background-image: url("@/assets/images/19.jpeg");

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
    font-size: 22px;
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

// 前面部分 (AJay)

.card-front {
  height: 100%;
  > * {
    box-sizing: border-box;
  }
  &__wrapper {
    height: 100%;
    padding: 25px 15px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 40px;
    padding: 0 10px;
  }
  &__chip {
    width: 60px;
  }
  &__type {
    height: 45px;
    width: auto;
    max-width: 100px;
  }
  &__body {
    margin-bottom: 35px;
  }
  &__number {
    display: flex;
    justify-content: space-between;
    line-height: 1;
    padding: 10px 15px;
    span {
      font-size: 26px;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    font-size: 0;
  }
  &__info {
    padding: 10px 15px;
  }
  &__holder {
    margin-bottom: 6px;
    text-align: left;
    font-size: 13px;
    opacity: 0.7;
  }
  &__name {
    font-size: 18px;
    line-height: 1;
  }
  &__date {
    padding: 10px;
  }
  &__date-title {
    display: block;
    width: 100%;
    margin-bottom: 6px;
    text-align: left;
    font-size: 13px;
    opacity: 0.7;
  }
  &__date-body {
    line-height: 1;
  }
  &__date-item {
    font-size: 18px;
  }
}
</style>
