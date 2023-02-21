<script setup>
import { ref, reactive } from "vue";
const { data } = require("@middlewares/satisfactoryData.js");

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
    document.querySelector(".search-input").value =
        data.resources[resources].frenchName;
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
    const quantityOk = quantity.value >= 0 && quantity.value < 100000;

    if (typeOk && quantityOk) {
        isOkToValidate.value = true;
    }

    if (submit === true) {
        newResorcesSubmit(
            data.resources[currentResorces.value].name,
            quantity.value
        );
    }
};

const newResorcesSubmit = (type, quantity) => {
    selectedResources.push([type, quantity]);
    document.querySelector(".search-input").value = "";
    document.querySelector(".quantity-input").value = 10;
};
</script>

<template>
    <div class="addRessorcesMenu">
        <div class="selected-resorces-container">
            <div
                v-for="(resorce, index) in selectedResources"
                :key="index"
                class="one-resource"
            >
                <span class="one-resource-type">{{
                    data.resources[resorce[0]].frenchName
                }}</span>
                <span class="one-resource-quantity">{{ resorce[1] }}</span>
            </div>
        </div>
        <div class="input-box">
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
            <button
                class="submit-input"
                :class="{ invalid: !isOkToValidate }"
                @click="verifySubmit(true)"
            >
                Ajouter
            </button>
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
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.addRessorcesMenu {
    background-color: $color14;
    color: $color14;
    width: max-content;
    width: 100%;
    padding: 10px;

    .selected-resorces-container {
        color: $color0;

        .one-resource {
            display: flex;
            flex-direction: row;

            &-type {
                background-color: $color14;
                color: $color0;
                font-size: 16px;
                padding: 4px;
                width: 340px;
            }

            &-quantity {
                background-color: $color14;
                color: $color0;
                font-size: 16px;
                padding: 4px;
                margin-left: 10px;
                width: 85px;
            }
        }
    }

    .input-box {
        display: flex;

        .search-input {
            background-color: $color14;
            color: $color0;
            font-size: 16px;
            padding: 4px;
            width: 340px;
        }

        .quantity-input {
            background-color: $color14;
            color: $color0;
            font-size: 16px;
            padding: 4px;
            margin-left: 10px;
            width: 85px;
        }

        .submit-input {
            background-color: $color14;
            color: $color0;
            margin-left: 10px;
            padding: 4px;

            :not(.invalid):hover {
                background-color: $color6;
            }
        }

        .invalid {
            color: $color14;
            opacity: 0.4;
            cursor: default;
            pointer-events: none;
            user-select: none;
        }
    }
    .search-result {
        width: 340px;
        display: flex;
        justify-content: center;

        .menu {
            background-color: $color14;
            width: inherit;
            position: absolute;
            width: inherit;
            border: 1px solid $color0;
            padding-top: 5px;
            max-height: 255px;

            &-open {
                display: block;
            }

            .one-ressorces {
                padding: 5px;
                width: 100%;
                background-color: $color14;
                color: $color0;
                transition: all 0.2s;
                height: 40px;

                &:hover {
                    background-color: $color4;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
