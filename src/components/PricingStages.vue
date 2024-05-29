<template>
    <div>
        <div class="hidden sm:flex justify-between h-10">
            <h2 class="text-4xl">Wycena zlecenia</h2>
            <img src="images/logo.png">
        </div>
        <ProgressStages :stage-number="stageNumber" />
    </div>
</template>

<script>
import ProgressStages from './ProgressStages.vue'

export default {
    name: 'PricingStages',
    components: {
        ProgressStages
    },
    props: {
        stageNumber: Number,
    }
}
</script>