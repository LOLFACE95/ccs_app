<template>

      <div>
        <div class="sm:flex items-center mt-10 hidden">
          <ProgressDot :active-progress="(stageNumber >= 0)"/>
          <ProgressBar :active-progress="(stageNumber >= 1)"/>
          <ProgressDot :active-progress="(stageNumber >= 1)"/>
          <ProgressBar :active-progress="(stageNumber >= 2)"/>
          <ProgressDot :active-progress="(stageNumber >= 2)"/>
          <ProgressBar :active-progress="(stageNumber >= 3)"/>
          <ProgressDot :active-progress="(stageNumber >= 3)"/>
        </div>
        <!-- :class="[premiumCard ? 'bg-emerald text-white' : 'text-emerald border-2 border-emerald']"  -->
        <h3 class="text-3xl font-medium sm:hidden ml-4">Kosztorys Naprawy</h3>
        <div class="flex items-center mt-5 sm:hidden ml-4">
          <div class="mr-5 w-[70px] h-[70px] flex flex-wrap overflow-hidden relative  bg-emerald rounded-full
                                                  before:rounded-full before:text-white before:text-center before:leading-[50px] 
                                                  before:absolute before:right-[5px] before:left-[5px] before:bottom-[5px] 
                                                  before:top-[5px] before:bg-[#f9f9f9]
                                                  ">

            <div class="border w-[35px] h-[35px] bg-[#E6E6E6]"
                  :class="[stageNumber >= 3 ? 'opacity-0' : 'opacity-1']">

            </div>

            <div class="border w-[35px] h-[35px] opacity-[0] bg-[#E6E6E6]"></div>

            <div class="border w-[35px] h-[35px] bg-[#E6E6E6]"
                :class="[stageNumber >= 2 ? 'opacity-0' : 'opacity-1']">
            
            </div>

            <div class="border w-[35px] h-[35px] bg-[#E6E6E6]"
                  :class="[stageNumber >= 1 ? 'opacity-0' : 'opacity-1']">
            </div>

            <p class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 text-black text-xl tracking-wider">
              {{ stageNumber+1 }}/4
            </p>
          </div>

          <div class="text-lg">
            <p class="">Wycena zlecenia</p>
            <p class="hidden">Zalecane akcesoria i zabezpieczenia</p>
            <p class="hidden">Ubezpieczenie</p>
            <p class="hidden">Podsumowanie</p>
          </div>
        </div>
        <div class="sm:flex w-100 mt-2 hidden">
          <p class="basis-1/6">Wycena</p>
          <p class="basis-1/3 text-center">Zalecane akcesoria i zabezpieczenia</p>
          <p class="basis-1/3 text-center">Ubezpieczenie</p>
          <p class="basis-1/6 text-right">Podsumowanie</p>
        </div>
      </div>
</template>

<script>
import ProgressBar from './progress/ProgressBar.vue'
import ProgressDot from './progress/ProgressDot.vue'

export default {
  name: 'ProgressStages',
  components: {
    ProgressBar,
    ProgressDot
  },
  props: {
    stageNumber: Number,
  }
  
}
</script>
<style>
</style>