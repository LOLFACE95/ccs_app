<template>
    <Card class="shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] w-full">
        <h3 class="text-2xl mt-3">
            {{cardTitle}}
        </h3>

        <p class="text-emerald text-xl mt-4">
            {{cardCost}}
        </p>

        <p class="text-ourGray mt-3">
            {{cardContent}}
        </p>

        <HorizontalButton class=" mt-12 border-white">
            Wybierz
        </HorizontalButton>
    </Card>
</template>

<script>
import HorizontalButton from './HorizontalButton.vue'
import Card from './Card.vue'

export default{
    name: "NotRepairCard",
    components: {
        Card,
        HorizontalButton,

    },
    props:{
        cardTitle: String,
        cardCost: String,
        cardContent: String,
        
    },
}
</script>