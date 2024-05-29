<template>
    <Card :class="{'border-emerald !bg-[#f4f8f7]': isAdd}" 
          class="duration-200 border w-[45%] overflow-hidden">
        <div class="bg-white w-20 h-20  bg-contain bg-center rounded-lg bg-no-repeat"
            :class="accesoryElement.imgUrl"
            >
        </div>
        <h4 class="mt-3 text-xl font-medium">
          {{ accesoryElement.element }}
        </h4>
        <p class="mt-1 font-light text-ourGray">
          {{ accesoryElement.description }}
        </p>

        <div class="mt-6">
            <h4 class="mt-3 text-xl font-medium">
              {{ accesoryElement.grossCost }} zł brutto
            </h4>
            <p class="mt-1 font-light text-ourGray">
              {{ accesoryElement.netCost }} zł netto
            </p>
        </div>
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


    </Card>
</template> 
 
<script>
import Card from './Card.vue'
import HorizontalButton from './HorizontalButton.vue'

export default{
    name: 'AddAccesory',
    props:{
      accesoryElement: { 
          type: Object,
            },
    },
    components: {
        Card,
        HorizontalButton,
    },
    data() {
    return {
      isAdd: false,
    };
  },
    methods: {

    emitAddProperty() {
      if(!this.isAdd){
        this.$emit('add-property', this.accesoryElement.element, this.accesoryElement.grossCost, this.accesoryElement.netCost);
        this.isAdd = true;
      }
      
    },
    emitDeleteProperty() {
      if(this.isAdd){
        this.$emit('delete-property', this.accesoryElement.element, this.accesoryElement.grossCost, this.accesoryElement.netCost);
        this.isAdd = false;
      }
      
    }

  }
}
</script>