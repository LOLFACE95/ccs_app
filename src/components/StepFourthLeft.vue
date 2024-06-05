<template>
    <div>

        <SummaryCard v-for="item in ownChoice" 
                        :key="item.id" 
                        :ownChoice="item"
                        class="mt-4"
                        @add-property="emitAddProperty"
                        @delete-property="emitDeleteProperty"
                        >
                        
        </SummaryCard>
    </div>
</template>

<script>
import SummaryCard from './SummaryCard.vue';
export default{
    name: "StepFourthLeft",
    components:{
        SummaryCard,
    },
    props:{
        ownChoice: Array,
    },
    methods: {
        emitAddProperty(newValue) {
            this.$emit('add-property', newValue);
        },
        emitDeleteProperty(newValue, grossC, netC) {
            this.$emit('delete-property', newValue, grossC, netC);
        }
    },
}
</script>