<template>

    <div>
        <h3 class="text-xl">
            Wybierz ubezpieczenie dla Twojego urządzenia
        </h3>
            <div class="flex justify-between mt-20 sm:flex-row flex-col">
                <PremiumCard class="sm:w-[48%] w-full">
                    <AddCard :card-elements="recomSecurity[0]"
                            :active="activeSecurity.cardName === recomSecurity[0].cardName"
                            @add-property="emitAddProperty"
                            @delete-property="emitDeleteProperty"
                            @change-property="emitChangeProperty"
                            />
                </PremiumCard>

                <Card class="sm:w-[48%] sm:mt-0 mt-8 w-full">
                    <AddCard :card-elements="recomSecurity[1]"
                            :active="activeSecurity.cardName === recomSecurity[1].cardName"
                            @add-property="emitAddProperty"
                            @delete-property="emitDeleteProperty"
                            @change-property="emitChangeProperty"
                            />
                </Card>
            </div>
    </div>

</template>

<script>
import AddCard from './AddCard.vue';
import Card from './Card.vue';
import PremiumCard from './PremiumCard.vue';

export default{
    name: "StepThirdLeft",
    components:{
        PremiumCard,
        AddCard,
        Card,
    },
    methods: {
        emitAddProperty(newValue) {
            this.$emit('add-property', newValue);
            this.activeSecurity = newValue;
        },
        emitDeleteProperty(newValue, grossC, netC) {
            this.$emit('delete-property', newValue, grossC, netC);
            this.activeSecurity = {};
        },
        emitChangeProperty(newValue, grossC, netC) {
            this.$emit('delete-property', newValue, grossC, netC);

        },
    },
    data(){
        return{
            activeSecurity: {},
            recomSecurity: [
                {
                    cardName: "Kompleksowa ochrona",
                    packageElements: [
                        {
                            id: 0, element: "ponowna awaria urządzenia",
                        },
                        {
                            id: 1, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 2, element: "kradzież z włamaniem lub rabunek",
                        },
                    ],
                    grossCost: 237.85,
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/shield_star.svg')]",
                },
                {
                    cardName: "Ochrona przed usterką",
                    packageElements: [
                        {
                            id: 0, 
                            element: "ponowna awaria urządzenia",
                        },
                        {
                            id: 1, 
                            element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 2, 
                            element: "kradzież z włamaniem lub rabunek", 
                            availibity: false,
                        },
                    ],
                    grossCost: 227.85,
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/shield_warning.svg')]",
                },
            ],
        };
    }
}
</script>