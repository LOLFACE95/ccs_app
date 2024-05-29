<template>
        <div :class="[activeProgress ? 'bg-emerald' : 'bg-[#E6E6E6]']" class="w-1/3 h-0.5"></div>
</template>

<script>

export default {
  name: 'ProgressBar',
  props: {
    activeProgress: Boolean
  },
}
</script>