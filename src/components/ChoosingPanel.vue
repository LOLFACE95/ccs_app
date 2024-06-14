<template>
    <div>
        <div class="mt-20 flex justify-between sm:flex-row flex-col">
        <PremiumCard class="sm:w-[48%] w-full">
            <ChoiceCard :card-data="cards[0]">
                <HorizontalButton @click="emitUpdate; emitReplaceObject(cards[0])"              
                                    :premium-card="cards[0].premiumCard" class="mt-4">
                 {{ cards[0].buttonName }}
                </HorizontalButton>
            </ChoiceCard>
        </PremiumCard>

        <Card class="sm:w-[48%] w-full mt-8 sm:mt-0">
            <ChoiceCard :card-data="cards[1]"
                        >
                <HorizontalButton @click="emitUpdate; emitReplaceObject(cards[1])"
                                    :premium-card="cards[1].premiumCard" class="mt-4">
                    {{ cards[1].buttonName }}
                </HorizontalButton>
            </ChoiceCard>

        </Card>
        </div>
        <h3 class="text-2xl font-medium tracking-wide mt-10">
            Lub skonfiguruj samodzielnie
        </h3>
        <Card class="w-full mt-8">
            <ChoiceCard :card-data="cards[2]">
                <HorizontalButton class="mt-4"
                                    @click="emitUpdate; emitReplaceObject(cards[2])">
                    {{ cards[2].buttonName }}
                </HorizontalButton>
            </ChoiceCard>
        </Card>
    </div>
</template>

<script>

import Card from './Card.vue';
import ChoiceCard from './ChoiceCard.vue';
import PremiumCard from './PremiumCard.vue'
import HorizontalButton from './HorizontalButton.vue';

export default{
    name: "ChoosingPanel",
    components:{
        Card,
        ChoiceCard,
        PremiumCard,
        HorizontalButton,

    },
    data(){
        return{
            cards: [
                {
                    packageElements: [
                        {id: 0, element: "Usługa naprawy"}, 
                        {id: 1, element: "Ładowarka"}, 
                        {id: 2, element: "Kabel"}, 
                        {id: 3, element: "Folia ochronna Matt"},                
                    ],
                    cardName: "Naprawa PREMIUM",
                    premiumCard: true,
                    grossCost: 907.05,
                    netCost: 737.44,
                    buttonName: "Wybierz PREMIUM"
                },
                {
                    packageElements: [
                        {id: 0, element: "Usługa naprawy"}, 
                        {id: 1, element: "Ładowarka"}, 
                        {id: 2, element: "Kabel"}, 
                        {id: 3, element: "Folia ochronna Basic"},                
                    ],
                    cardName: "Naprawa Standard",
                    premiumCard: false,
                    grossCost: 708.52,
                    netCost: 538.64,
                    buttonName: "Wybierz Standard"
                },
                {
                    packageElements: [
                        {id: 0, element: "Pokrywa baterii"}, 
                        {id: 1, element: "Moduł wyświetlacza black"}, 
                        {id: 2, element: "Transport"}, 
                        {id: 3, element: "Usługa"},                
                        {id: 4, element: "Ramka tylnej kamerki"},                
                    ],
                    cardName: "Aktualna wycena",
                    premiumCard: false,
                    grossCost: 708.52,
                    netCost: 538.64,
                    buttonName: "Konfiguruj samodzielnie"
                },

            ],
        }
    },
    methods: {
        emitUpdate() {
        },
        emitReplaceObject(newObject) {
            this.$emit('next-stage');
            this.$emit('replace-object', newObject);
        },
    },
}

</script>