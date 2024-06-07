<template>
    <div class="overflow-hidden">
        <div class="bg-white w-20 h-20  bg-contain bg-center rounded-lg bg-no-repeat"
            :class="cardElements.imgUrl"
            >
        </div>
        <h3 class="mt-4 text-xl font-medium my-5">
            {{ cardElements.cardName }}

        </h3>
            <div class="leading-[25px] text-ourGray text-sm border-b pb-4">
                <PackageElement class="mt-4" 
                                v-for="packageElement in cardElements.packageElements" 
                                :key="packageElement.id" 
                                :package-element="packageElement.element"  />
            </div>

            <p class="text-emerald text-[19px] mt-5">{{ cardElements.grossCost }} zł brutto</p>
            <p class="text-ourGray text-sm mt-2">{{ cardElements.netCost }} zł netto</p>   

            <div class="flex relative mt-5">
                <AddButton :isAdd="isAdd"
                            @add-property="add"
                            @delete-property="deleteAdd"
                
                />
               
        </div>
    </div>
</template>

<script>

// import HorizontalButton from './HorizontalButton.vue';
import PackageElement from './PackageElement.vue';
import AddButton from './AddButton.vue';

export default {

    name: "AddCard",
    props:{
        premiumCard: Boolean,
        netCost: Number,
        grossCost: Number,
        cardElements: { 
            type: Object,
            },
        cardTitle: String,
    },
    components: {
        // HorizontalButton,
        PackageElement,
        AddButton,
    },
    
    data() {
    return {
      isAdd: false,
    };
    },
    methods: {
    add() {
        if(!this.isAdd){
        this.$emit('add-property', this.cardElements);
        this.isAdd = true;
      }
    },
    deleteAdd() {
        if(this.isAdd){
        this.$emit('delete-property', this.cardElements.cardName, this.cardElements.grossCost, this.cardElements.netCost);
        this.isAdd = false;
      }
    },

  }
    
}

</script>