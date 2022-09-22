<script setup>
import { ref } from "vue";

const binanceSocket = new WebSocket("wss://stream.binance.com:9443/ws/etheur@trade");

const boughtAt = 1356.42;
const howManyETH = 0.0683;

// const sellAt = null;
// const gotEur = null;

let priceETH = ref(null);
let gain = ref(null);
let lastPrice = ref(null);
let priceClass = ref(null);
let gainClass = ref(null);

binanceSocket.onmessage = (event) => {
    priceETH.value = parseFloat(JSON.parse(event.data).p).toFixed(2);
    gain.value = ((priceETH.value * howManyETH * 0.999) - (boughtAt * howManyETH)).toFixed(2);
    priceClass.value = priceETH.value < lastPrice.value ? "negative" : "positive";
    gainClass.value = gain.value < 0 ? "negative" : "positive";
    lastPrice.value = priceETH.value;
};

</script>

<template>
    <div v-if="priceETH !== null" class="eth">
        <span>ETH : </span>
        <span :class="priceClass">{{ priceETH }} €</span>
        <span> | </span>
        <span :class="gainClass">{{ gain < 0 ? "" : "+" }}{{ gain }} €</span>
    </div>
</template>