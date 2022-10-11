<script setup>
import zxcvbn from "zxcvbn";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    valuename: {
        type: String,
        required: true,
    },
    autocomplete: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    errordata: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(["changeInputValue", "inputLosingFocus"]);
const handleChange = (event) => {
    emit("changeInputValue", event.target.value, props.valuename);
};

const losingFocus = (event) => {
    emit("inputLosingFocus", event.target);
};
</script>

<template>
    <div class="input">
        <label :for="name">{{ title }}</label>
        <input
            :id="name"
            :name="name"
            :type="type"
            required
            :autocomplete="autocomplete"
            :value="value"
            @input="handleChange"
            @blur="losingFocus"
        >
    </div>
    <progress
        v-if="props.name === 'registerPassword' && props.value.length > 0"
        class="strong-password"
        max="16"
        :value="zxcvbn(props.value).guesses_log10"
    />

    <div v-if="errordata.length !== 0" class="error-box">
        <p v-for="error in errordata" :key="error" class="error">
            {{ error }}
        </p>
    </div>
</template>
