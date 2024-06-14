<template>
    <div class="xl:w-[70%] m-auto">
        <MobileTopbar class="sm:hidden"/>
        <h2 class="sm:hidden text-3xl mt-4">Podsumowanie</h2>
        
        <div class="hidden sm:flex justify-between h-10">
            <h2 class="text-4xl">Podsumowanie</h2>
            <img src="images/logo.png">
        </div>
        <Card class="w-full mt-10">
            <div class="flex items-center">
                <div class="text-3xl">⏳</div>
                <h3 class="text-2xl ml-4">Płatność w trakcie</h3>
            </div>
            <p class="mt-6 pt-6 border-t text-ourGray">Proces zapłaty za pośrednictwem Przelewy24 został rozpoczęty. Dokończ płatność lub zmień sposób płatności:</p>
            <div class="flex sm:flex-row flex-col mt-8 justify-between items-center">
                <HorizontalButton 
                    class="sm:!w-[48%]"
                    @click="prevStage"
                >
                    Cofnij
                </HorizontalButton>
                <HorizontalButton 
                    :premiumCard="true"
                    class="sm:!w-[48%] sm:mt-0 mt-6"
                    @click="emitUpdate"
                    >
                    Zatwierdź 
                </HorizontalButton>
            </div>
            <p class="text-center text-emerald underline mt-6 cursor-pointer">Płatność przy odbiorze</p>
        </Card>
    </div>
</template>
<script>
import Card from './Card.vue';
import HorizontalButton from './HorizontalButton.vue';
import MobileTopbar from './MobileTopbar.vue';
// import LabelElement from './LabelElement.vue';

export default {
    name: "StepSeventh",
    components:{
        Card,
        MobileTopbar,
        HorizontalButton,
        // LabelElement
    },
    methods: {
        emitUpdate() {
        this.$emit('next-stage');
        },
        prevStage() {
        this.$emit('prev-stage');
        },
    },

}
</script>
