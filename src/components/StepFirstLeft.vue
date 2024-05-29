<template>
    <div>
        <RepairEstimate  class="mt-10"/>
        <ChoosingPanel @next-stage="emitUpdate" @replace-object="emitReplaceObject" class="mt-16"/> 
    </div>
</template>

<script>

import RepairEstimate from './RepairEstimate.vue';
import ChoosingPanel from './ChoosingPanel.vue'
// import OwnConfiguration from './OwnConfiguration.vue'
// import HorizontalButton from './HorizontalButton.vue';

export default{
    name: "StepFirstLeft",
    components: {
        ChoosingPanel,
        // OwnConfiguration,
        RepairEstimate,
        // HorizontalButton,
    },
    methods: {
        emitUpdate() {
        this.$emit('next-stage');
        },
        emitReplaceObject(newObject) {
            this.$emit('replace-object', newObject);
        },
    },
    data(){
        return{
            
        }
    }
}

</script>