<template>
    <div>
        <Card class="w-full">

            <ChoiceCard :card-data="cardData">
                <HorizontalButton @click="emitUpdate"
                                     class="mt-4"
                                     :premium-card="true">
                    Następny krok
                </HorizontalButton>
            </ChoiceCard>
        </Card>
    </div>
</template>

<script>
import ChoiceCard from './ChoiceCard.vue';
import HorizontalButton from './HorizontalButton.vue';
import Card from './Card.vue';

export default{
    name: "StepSecondRight",
    components:{
        ChoiceCard,
        Card,
        HorizontalButton,
    },
    props:{
        cardData: Object,

    },
    methods: {
        emitUpdate() {
        this.$emit('next-stage');
        },
    },
}
</script>