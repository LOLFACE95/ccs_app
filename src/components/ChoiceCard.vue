<template>
    <div>
        <h3 class="text-left text-xl font-medium my-5">
            {{ cardData.cardName }}
            
        </h3>
            <div class="leading-[45px] border-b pb-4">
                <PackageElement v-for="packageElement in cardData.packageElements" 
                                :key="packageElement.id" 
                                :package-element="packageElement.element"  />
            </div>

            <p class="text-emerald text-[19px] mt-5">{{ cardData.grossCost.toFixed(2) }} brutto</p>
            <p class="text-ourGray text-sm mt-2">{{ cardData.netCost.toFixed(2)}} netto</p>   

            <slot />
    </div>
</template>

<script>


import PackageElement from './PackageElement.vue';

export default {

    name: "ChoiceCard",
    props:{
        cardData: {
            type: Object,
        },
        
        packageElements: { 
            type: Array,
            default: () => []
            }
    },
    components: {
        PackageElement
    }
    
}

</script>