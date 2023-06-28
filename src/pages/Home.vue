<script setup lang="ts">
import Catalog from "@/modules/catalog/Catalog.vue"
import Carousel from "@/components/Carousel.vue";
import {  NButton } from 'naive-ui'


</script>

<template>
  <div>

    <section class="hero">

      <div class="hero ">
        <div class="flex">
          <Carousel />
          <div class="w-2/6 bg-slate-950 hidden md:block ml-6 p-4">
            <span class="text-yellow font-bold text-3xl">NEW</span>

            <div>
              <h4 class="font-bold text-white">Title notice</h4>
              <p>something about the notice goes here</p>

              <h4 class="font-bold text-white">Title notice</h4>
              <p>something about the notice goes here</p>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-col my-6 gap-y-3.5 md:flex-row md:justify-between">
          <!--        check this width hard-coded-->
          <div class="md:w-96">
            <h1 class="text-black font-bold text-3xl text-center md:text-6xl md:text-left">Welcome to our store!</h1>
          </div>

          <div class="flex flex-col justify-center md:w-1/2 ">
            <p class="text-slate-700 text-xl mb-5 font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem eos eum ex ipsum iusto nam non obcaecati recusandae reprehenderit.</p>
            <n-button  size="large" color="#f43f5e" class="md:w-64 h-12" >
              <span class="text-white font-medium">Check our products</span>
            </n-button>
          </div>
        </div>


      </div>
      <div class="bg-slate-950 md:hidden p-4 m-b-6">
        <span class="text-yellow font-bold text-3xl">NEW</span>
        <div>
          <h4 class="font-bold text-white">Title notice</h4>
          <p>something about the notice goes here</p>

          <h4 class="font-bold text-white">Title notice</h4>
          <p>something about the notice goes here</p>
        </div>
      </div>


      <Catalog />
    </section>
    <router-view />
  </div>
</template>

<style scoped>
.bg-base{
  background-color: #F0F8FF;
}
header{
  background-color: #F0FFFF;
}
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
