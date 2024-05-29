<template>
    <div>
        <ChooseUs />
        <NotRepairPanel class="mt-14"/>     
    </div>
</template>

<script>
import ChooseUs from './ChooseUs.vue'
import NotRepairPanel from './NotRepairPanel'

export default{
    name: 'StepFirstRight',
    components:{
        ChooseUs,
        NotRepairPanel,
    }
}
</script>