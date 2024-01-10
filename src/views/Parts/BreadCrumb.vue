<script setup>
import { reactive, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

defineProps({
    visibility: {
        type: Boolean,
        required: true,
    },
});

let data = reactive([{
    id: 0,
    type: "path",
    title: "Accueil",
    link: "/",
}]);
let params = reactive([]);
let path = reactive([]);
let matched = reactive([]);

watch(
    [() => route.matched, () => route.params],
    ([ourRoute, ourParam]) => {
        params = ourParam;
        matched = ourRoute[0].meta.breadCrumb;
        path = ourRoute[0].path.slice(1).replaceAll(":", "").split("/");
        let link = ("");
        let tempDocumentTitle = "";
        data.length = 1;

        console.log(ourParam);

        matched.forEach((el, index) => {
            data.push({
                id: index + 1,
                type: el.title ? "path" : "param",
                title: el.title ? el.title : params[path[index]],
                link: el.title ? `${link}/${path[index]}` : `${link}/${params[path[index]]}`,
            });
            link += el.title ? `/${path[index]}` : `/${params[path[index]]}`;
        });
    }
);
</script>

<template>
    <div class="bread-crumb" :class="{ hidden: !visibility }">
        <div v-for="partPath in data" :key="partPath.id" class="one-path-box">
            <span class="guillemet">></span>
            <router-link class="link" :to="partPath.link">
                {{ partPath.title }}
            </router-link>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.bread-crumb {
    position: absolute;
    top: $header-height;
    left: 10px;
    background-color: $color12;
    color: $color8;
    width: fit-content;
    border-radius: 25px;
    padding: 10px 15px;
    display: flex;
    flex-wrap: wrap;
    z-index: $z-index-bread-crumb;
    transform: translateY(0) translateX(0);
    opacity: 1;

    &.hidden {
        transform: translateX(-250px);
        opacity: 0;
    }

    .one-path-box {
        .guillemet {
            font-size: $medium;
            font-weight: 400;
        }

        .link {
            padding: 0 8px;
            font-size: $medium;
            font-weight: 300;

            &:hover {
                text-underline-offset: 3px;
                text-decoration: underline 2px;
            }
        }
    }
}
</style>
