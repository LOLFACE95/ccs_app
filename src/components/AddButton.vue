<template>
    <div class="w-full">
        <HorizontalButton class="ml-0 w-full duration-[.2s]" 
                :class="{'bg-[#EBEBEB] rounded-[100px] added':isAdd}"  
                @click="add"
                >
            <p v-if="!isAdd">Dodaj do naprawy +</p>
            <p v-if="isAdd">Dodane</p>
        </HorizontalButton>
        <div class="w-[30px] h-[30px] flex justify-center items-center top-[50%] translate-y-[-50%] right-[-70px] absolute duration-200"
                :class="{'right-[0]':isAdd}"
                >
            <img class="w-[25px] cursor-pointer" 
                src="images/trash.svg" 
                @click="deleteAdd"
                >
        </div>
    </div>
</template>
<style>
  .added{
    width: calc(100% - 48px) !important;
  }
</style>

<script>
import HorizontalButton from './HorizontalButton.vue';

export default {
    name: "AddButton",
    components:{
        HorizontalButton,
    },
    props:{
        isAdd: Boolean,
    },
    methods: {
    add() {
        if(!this.isAdd){
        this.$emit('add-property');
        console.log(this.isAdd);
        // this.isAdd = true;
      }
    },
    deleteAdd() {
        if(this.isAdd){
        this.$emit('delete-property');
        // this.isAdd = false;
      }
    },

  }
    
}
</script>
