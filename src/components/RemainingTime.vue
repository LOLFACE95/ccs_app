<template>
    <div class="text-right flex flex-col"> 
      <TimeText class="sm:order-2 mb-4 mt-8 sm:mb-0"/>
      <TimeBar class="sm:order-1"/>

      

    </div>
</template>


<script>
import TimeText from './time/TimeText.vue'
import TimeBar from './time/TimeBar.vue'

export default {
    name: 'RemainingTime',
    components: {
    TimeText,
    TimeBar
  }
}
</script>