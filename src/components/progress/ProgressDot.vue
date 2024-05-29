<template>
    <div :class="[activeProgress ? 'bg-emerald' : 'bg-[#E6E6E6]']" 
          class="rounded-xl w-5 h-5">
    </div>
</template>

<script>

export default {
  name: 'ProgressBar',
  props: {
    activeProgress: Boolean,

  },


}
</script>