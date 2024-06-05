<template>
    <div>

        <Card class="w-full flex flex-col justify-between sm:flex-row sm:items-center overflow-hidden">
            <div>
                <div class="w-[70px] h-[70px] bg-contain bg-no-repeat rounded-xl"
                    :class="ownChoice.imgUrl">
                </div>
                <h3 class="mt-4 text-medium">{{ ownChoice.cardName }}</h3>
                <p class="text-sm text-ourGray">{{ ownChoice.description }}</p>
            </div>
            <div class="sm:text-right sm:w-1/3 sm:mt-0 mt-4">
                    <p class="text-medium">
                        {{ownChoice.grossCost}} zł brutto 
                        
                    </p>
                    <p class="text-sm text-ourGray mt-2">
                        {{ownChoice.netCost}} zł netto 
                    </p>
                <div class="flex relative mt-5">

                    <HorizontalButton class="ml-0 w-full duration-[.2s]" 
                                :class="{'!w-[80%] bg-[#EBEBEB] rounded-[100px]':isAdd}"  
                                @click="emitAddProperty"
                                >
                        <p v-if="!isAdd">Dodaj do naprawy +</p>
                        <p v-if="isAdd">Dodane</p>
                    </HorizontalButton>

                    <div class="w-[30px] h-[30px] flex justify-center items-center top-[50%] translate-y-[-50%] right-[-70px] absolute duration-200"
                            :class="{'right-[1%]':isAdd}"
                            >
                        <img class="w-[25px] cursor-pointer" 
                            src="images/trash.svg" 
                            @click="emitDeleteProperty"
                        >
                    </div>
                </div>
            </div>
        </Card>
    </div>
</template>
<script>
import Card from './Card.vue';
import HorizontalButton from './HorizontalButton.vue';

export default {
    name: "SummaryCard",
    components:{
        HorizontalButton,
        Card,
    },
    props:{
        ownChoice: Array,
    },
    data() {
        return{
            isAdd: true,
        }
    },
    methods: {

        emitAddProperty() {
        if(!this.isAdd){
            this.$emit('add-property', this.ownChoice);
            this.isAdd = true;
        }
        
        },
        emitDeleteProperty() {
        if(this.isAdd){
            this.$emit('delete-property', this.ownChoice.cardName, this.ownChoice.grossCost, this.ownChoice.netCost);
            this.isAdd = false;
        }
        
        }

}
}
</script>
