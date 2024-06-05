<template>
    <div>

        <div>
            <h3 class="text-2xl font-medium mt-10">
                Dodaj niezbędne akcesoria
            </h3>
            <div class="flex justify-between sm:mt-8 sm:flex-row flex-col">
                <!-- <AddAccesory :accesory-elements="accesoryElements[0]"></AddAccesory> -->
                <AddAccesory class="w-full sm:w-[48%] mt-8 sm:mt-0" v-for="(accesoryElement, index) in accesoryElements" :key="index" :accesory-element="accesoryElement"
                @add-property="emitAddProperty"
                @delete-property="emitDeleteProperty"
                />
            </div>
        </div>
        
        <div class="mt-10">
            <h3 class="text-2xl font-medium">
                Dodaj zalecane zabezpieczenia
            </h3>
            <div class="mt-20">
                
                <PremiumCard class="w-full">
                    <AddCard :card-elements="recomSecurity[0]"
                            @add-property="emitAddProperty"
                            @delete-property="emitDeleteProperty"
                            />
                </PremiumCard>
                
                <div class="flex justify-between mt-10 sm:flex-row flex-col">
                    <Card class="w-full sm:w-[48%]">
                        <AddCard :card-elements="recomSecurity[1]"
                            @add-property="emitAddProperty"
                            @delete-property="emitDeleteProperty"
                            />
                    </Card>
                    <Card class="w-full sm:w-[48%] mt-8 sm:mt-0">
                        <AddCard :card-elements="recomSecurity[2]"
                            @add-property="emitAddProperty"
                            @delete-property="emitDeleteProperty"
                            />
                    </Card>
                </div>
            </div>
        </div>
    </div>
        

</template>

<script>

import Card from './Card.vue';
import PremiumCard from './PremiumCard.vue';
// import HorizontalButton from './HorizontalButton.vue';
import AddAccesory from './AddAccesory.vue'
// import PackageElement from './PackageElement.vue';
import AddCard from './AddCard.vue';

export default{
    name: 'StepSecondLeft',
    components:{
        Card,
        PremiumCard,
        AddCard,
        // PackageElement,
        // HorizontalButton,
        AddAccesory,
    },
    methods: {
        emitAddProperty(newValue) {
            this.$emit('add-property', newValue);
        },
        emitDeleteProperty(newValue, grossC, netC) {
            this.$emit('delete-property', newValue, grossC, netC);
        }
    },
    data(){
        return{
            accesoryElements: [
                {
                    id: 0,
                    cardName: "Bateria",
                    packageElements: [
                        {id: 3, element: "Bateria"},               
                    ],
                    description: "natualne zużycie eksploatacyjne", 
                    grossCost: 227.85, 
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/samsung.jpeg')]",
                },
                {
                    id: 1, 
                    cardName: "Ramka tylnej kamerki", 
                    description: "rysy", 
                    grossCost: 227.85, 
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/ramka.svg')]",
                }, 
            ],
            recomSecurity: [
                {
                    cardName: "Folia ochronna MATT",
                    description: "Wysokiej klasy folia ochronna",
                    packageElements: [
                        {
                            id: 0, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 1, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 2, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                    ],
                    grossCost: 227.85,
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/folia_premium.svg')]",

                },
                {
                    cardName: "Folia ochronna Basic",
                    description: "Wysokiej klasy folia ochronna",
                    packageElements: [
                        {
                            id: 0, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 1, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 2, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                    ],
                    grossCost: 227.85,
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/folia_premium.svg')]",
                },
                {
                    cardName: "Folia ochronna Basic",
                    description: "Wysokiej klasy folia ochronna",
                    packageElements: [
                        {
                            id: 0, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 1, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                        {
                            id: 2, element: "Wybierasz najwyższą jakość usług i 30 lat doświadczenia",
                        },
                    ],
                    grossCost: 227.85,
                    netCost: 185.24,
                    imgUrl: "bg-[url('images/folia_premium.svg')]",
                }
            ],
        };
    }
}
</script>