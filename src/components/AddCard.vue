<template>
    <div class="overflow-hidden">
        <h3 class="text-center text-xl font-medium my-5">
            {{ cardElements.title }}

        </h3>
            <div class="leading-[25px] text-ourGray text-sm border-b pb-4">
                <PackageElement class="mt-4" 
                                v-for="packageElement in cardElements.packageElements" 
                                :key="packageElement.id" 
                                :package-element="packageElement.element"  />
            </div>

            <p class="text-emerald text-[19px] mt-5">{{ cardElements.grossCost }} brutto</p>
            <p class="text-ourGray text-sm mt-2">{{ cardElements.netCost }} netto</p>   

            <div class="flex relative mt-5">
                <HorizontalButton class="ml-0 w-full duration-[.2s]" 
                            :class="{'!w-[80%] bg-[#EBEBEB] rounded-[100px]':isAdd}"  
                            @click="add"
                            >
                    <p v-if="!isAdd">Dodaj do naprawy +</p>
                    <p v-if="isAdd">Dodane</p>
                </HorizontalButton>
                <div class="w-[30px] h-[30px] flex justify-center items-center top-[50%] translate-y-[-50%] right-[-70px] absolute duration-200"
                        :class="{'right-[5%]':isAdd}"
                        >
                <img class="w-[25px] cursor-pointer" 
                    src="images/trash.svg" 
                    @click="deleteAdd"
                    >
            </div>
        </div>
    </div>
</template>

<script>

import HorizontalButton from './HorizontalButton.vue';
import PackageElement from './PackageElement.vue';

export default {

    name: "AddCard",
    props:{
        premiumCard: Boolean,
        netCost: Number,
        grossCost: Number,
        cardElements: { 
            type: Array,
            default: () => []
            },
        cardTitle: String,
    },
    components: {
        HorizontalButton,
        PackageElement
    },
    
    data() {
    return {
      isAdd: false,
    };
    },
    methods: {
    add() {
      this.isAdd = true;
    },
    deleteAdd() {
      this.isAdd = false;
    },

  }
    
}

</script>