<template>
  <div class="FirstNavTop primary-container">
    <router-link
      class="FirstNavTop-link"
      to="/portfolio"
    >
      Portfolio
    </router-link>
    <router-link
      class="FirstNavTop-link"
      to="/tryhard/slowrun"
    >
      Try Hard but Slow Run
    </router-link>
  </div>
</template>

 <style>
 .FirstNavTop {
   width: 100%;
   height: 100vh;
   background-color: #313131;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
 }

 .FirstNavTop-link {
     background-color: #d4cbcb;
   width: 200px;
   height: 200px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 50px;
  white-space: pre-line;
  font-weight: 500;
  font-size: 20px;
 }
 
 @media screen and (min-width: 600px) {
   .FirstNavTop {
     flex-direction: row;
   }

    .FirstNavTop-link-box {
   margin: 8%;
 }
 }
 </style>