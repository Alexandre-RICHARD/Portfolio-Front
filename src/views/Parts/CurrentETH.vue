<script setup>
import { ref } from "vue";

const binanceSocket = new WebSocket(
    "wss://stream.binance.com:9443/ws/etheur@trade"
);

const boughtAt = 1356.42;
const howManyETH = 0.0683;

const sellAt = null;
const gotEur = null;

let priceETH = ref(null);
let gain = ref(null);
let growth = ref(null);
let lastPrice = ref(null);
let priceClass = ref(null);
let gainClass = ref(null);
let message = ref(null);

binanceSocket.onmessage = (event) => {
    priceETH.value = parseFloat(JSON.parse(event.data).p).toFixed(2);
    priceClass.value =
        priceETH.value < lastPrice.value ? "negative" : "positive";
    if (boughtAt !== null && howManyETH !== null) {
        gain.value = (
            priceETH.value * howManyETH * 0.999 -
            boughtAt * howManyETH
        ).toFixed(2);
        growth.value = ((gain.value / (boughtAt * howManyETH)) * 100).toFixed(
            2
        );
        gainClass.value = gain.value < 0 ? "negative" : "positive";
        message.value =
            (gain.value < 0 ? "" : "+") +
            gain.value +
            " € | " +
            (growth.value < 0 ? "" : "+") +
            growth.value +
            "%";
    }
    if (sellAt !== null && gotEur !== null) {
        gain.value = (
            (gotEur / priceETH.value) * 0.999 -
            gotEur / sellAt
        ).toFixed(5);
        growth.value = ((gain.value / (gotEur / sellAt)) * 100).toFixed(2);
        gainClass.value = gain.value < 0 ? "negative" : "positive";
        message.value =
            (gain.value < 0 ? "" : "+") +
            gain.value +
            " ETH | " +
            (growth.value < 0 ? "" : "+") +
            growth.value +
            "%";
    }
    lastPrice.value = priceETH.value;
};
</script>

<template>
    <div v-if="priceETH !== null" class="eth">
        <span>ETH : </span>
        <span :class="priceClass">{{ priceETH }} €</span>
        <span> | </span>
        <span :class="gainClass">{{ message }}</span>
    </div>
</template>
