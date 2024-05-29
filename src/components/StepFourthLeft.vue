<template>
<div>
    <Card class="w-full flex justify-between items-center">
        <div>
            <div class="w-[70px] h-[70px] bg-[url('images/ramka.svg')] bg-cover bg-no-repeat rounded-xl"></div>
            <h3 class="mt-4 text-medium">Ramka tylnej kamerki</h3>
            <p class="text-sm text-ourGray">rysy</p>
        </div>
        <div class="text-right w-1/3">
            <p class="text-medium">
                227,85 zł brutto 
            </p>
            <p class="text-sm text-ourGray mt-2">
                185,24 zł netto 
            </p>
            <HorizontalButton class="mt-4">Dodane</HorizontalButton>
        </div>
    </Card>
</div>
</template>

<script>
import Card from './Card.vue'
import HorizontalButton from './HorizontalButton.vue'

export default{
    name: "StepFourthLeft",
    components:{
        Card,
        HorizontalButton,
    }
}
</script>