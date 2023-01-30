<script setup>
import { ref, reactive } from "vue";
const { data } = require("../../../middlewares/satisfactoryData.js");

const isAddRessorcesOpen = ref(false);
const currentResorces = ref();
const isOkToValidate = ref(false);
const selectedResources = reactive([
    ["ironRod", 1],
    ["ironPlate", 28],
]);

const handleDisplayList = {
    outsideListClickHandler: (event) => {
        const resultList = document.querySelector(".search-result");
        const searchInput = document.querySelector(".search-input");
        if (isAddRessorcesOpen.value) {
            if (
                !resultList.contains(event.target) &&
                !searchInput.contains(event.target)
            ) {
                handleDisplayList.closeMenu();
            }
        }
    },

    eventListenerHandler: (type) => {
        if (type === 1) {
            isAddRessorcesOpen.value = true;
            document.addEventListener(
                "click",
                handleDisplayList.outsideListClickHandler,
                false
            );
        } else if (type === 0) {
            document.removeEventListener(
                "click",
                handleDisplayList.outsideListClickHandler,
                false
            );
        }
    },

    closeMenu: () => {
        isAddRessorcesOpen.value = false;
        handleDisplayList.eventListenerHandler(0);
    },
};

const chooseRessource = (resources) => {
    handleDisplayList.closeMenu();
    currentResorces.value = data.resources[resources].name;
    document.querySelector(".search-input").value = data.resources[resources].frenchName;
    verifySubmit(false, null);
};

const verifySubmit = (submit = false, event) => {
    if (event) {
        event.preventDefault();
    }
    const type = document.querySelector(".search-input");
    const quantity = document.querySelector(".quantity-input");
    type.blur();
    quantity.blur();
    const typeOk = data.resources[currentResorces.value] ? true : false;
    const quantityOk = quantity.value >=0 && quantity.value < 100000;
    
    if (typeOk && quantityOk) {
        isOkToValidate.value = true;
    }

    if (submit === true) {
        newResorcesSubmit(data.resources[currentResorces.value].name, quantity.value);
    }

};


const newResorcesSubmit = (type, quantity) => {
    selectedResources.push([type, quantity]);
    console.log(selectedResources);
    document.querySelector(".search-input").value = "";
    document.querySelector(".quantity-input").value = 10;
};

</script>

<template>
    <div class="addRessorcesMenu">
        <div class="selected-resorces-container">
            <div v-for="resorce, index in selectedResources" :key="index" class="one-resource">
                <span class="one-resource-type">{{ data.resources[resorce[0]].frenchName }}</span>
                <span class="one-resource-quantity">{{ resorce[1] }}</span>
            </div>
        </div>
        <!-- <div class="input-box">
            <input
                class="search-input"
                placeholder="Chercher ou sélectionner une ressource"
                @click="handleDisplayList.eventListenerHandler(1)"
            >
            <input
                class="quantity-input"
                type="number"
                placeholder="Quantité"
                min="0"
                max="100000"
                value="10"
                @change="verifySubmit(false, null)"
            >
            <button class="submit-input" :class="{invalid: !isOkToValidate}" @click="verifySubmit(true)">Ajouter</button>
        </div>
        <div class="search-result">
            <ul v-if="isAddRessorcesOpen" class="menu">
                <li
                    v-for="resources in data.resources"
                    :key="resources.id"
                    class="one-ressorces"
                    @click="chooseRessource(resources.name)"
                >
                    {{ resources.frenchName }}
                </li>
            </ul>
        </div> -->
    </div>
</template>
