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
                <div class="text-3xl">💚</div>
                <h3 class="text-2xl ml-4">Podsumowanie</h3>
            </div>
            <p class="mt-6 pt-6 border-t text-ourGray">
                Dziękujemy za przekazanie decyzji. Urządzenie zostanie przekazane do odpłatnej obsługi. Opłatę za obsługae urządzenie należy uiścić kurierowi przy odbiorze przesyłki 
                <br><br>
                Status zlecenia jest możliwy do sprawdzenie na naszej stronie internetowej
            
            </p>
            <div class="flex sm:flex-row flex-col mt-8 justify-between items-center">
                <HorizontalButton 
                    class="sm:!w-[48%] sm:mt-0 mt-6"
                    @click="prevStage"
                >
                    Powrót na stronę główną
                </HorizontalButton>
                <HorizontalButton 
                    :premiumCard="true"
                    class="sm:!w-[48%] sm:mt-0 mt-6"
                    @click="emitUpdate"
                    >
                    Przejdź do strony internetowej 
                </HorizontalButton>
            </div>
        </Card>
    </div>
</template>
<script>
import Card from './Card.vue';
import HorizontalButton from './HorizontalButton.vue';
import MobileTopbar from './MobileTopbar.vue';
// import LabelElement from './LabelElement.vue';

export default {
    name: "StepEighth",
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
