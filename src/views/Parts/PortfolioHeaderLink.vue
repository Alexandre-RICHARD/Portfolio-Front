<script setup>

defineProps({
    "title": {
        type: String,
        required: true
    },
    "link": {
        type: String,
        required: true
    }
});
</script>

<template>
  <router-link
    class="top-link"
    :to="{ name: link}"
  >
    {{ title }}
  </router-link>
</template>

 <style scoped> 
 .top-link {
   font-weight: 600;
   padding: 10px;
   letter-spacing: 2px;
   font-size: 20px;
   color: #fff;
   margin: 0 20px;
   border: none;
   border-radius: 15px;
   transition: all .4s
 }
 
 .top-link:hover {
   background-color: #14d0f1;
   color: #000
 }
 </style>