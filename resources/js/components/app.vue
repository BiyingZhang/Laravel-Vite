<template>
  <div class="h-full bg-gray-800">
    <div class="w-full text-white bg-main-color">
      <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div class="p-4 flex flex-row items-center justify-between">
          <span class="text-3xl font-semibolde">Biying Zhang</span>
        </div>        
      </div>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <sideMenu />
      <router-view class="col-span-3"></router-view>
       
    </div>
  </div>
</template>
<script>

import sideMenu from './sideMenu.vue'
// import dashboard from './dashboard.vue'

export default {
  name: "App",
  components: { sideMenu,  }
};
</script>