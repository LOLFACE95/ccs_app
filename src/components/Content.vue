<template>
  
  <div class="xl:w-4/5 lg:w-[90%] w-[95%] m-auto pb-[150px]">  
    <div v-if="stageNumber<=3">
      
      <MobileTopbar class="sm:hidden"/>
      <RemainingTime id="scroll-top"  class="mt-10"/>
      <PricingStages class="mt-14" :stage-number="stageNumber"/>
      
      
      <div class="flex justify-between mt-10 flex-col lg:flex-row">
        
        <div  class="lg:w-[55%] w-full">
          <OrderData class="" :order-data="orderData"/>
          
          <StepFirstLeft 
            v-if="stageNumber === 0" 
            @next-stage="nextStage" 
            @replace-object="replaceObject" 
            class="" 
          />
          
          <StepSecondLeft  
            v-if="stageNumber === 1" 
            class=""
            @add-property="addObject"
            @delete-property="removeObject"
          />
          
          <StepThirdLeft 
            v-if="stageNumber === 2" 
            class="mt-8"
            @add-property="addObject"
            @delete-property="removeObject"
          />
          
          <StepFourthLeft 
            v-if="stageNumber === 3" 
            class="mt-8"
            :ownChoice="ownChoice"
            @add-property="addObjectOwnChoice"
            @delete-property="removeObjectOwnChoice"
          />
        </div>
        
        <div class="w-full lg:w-[40%] flex-shrink lg:mt-0 mt-10">
          <StepFirstRight 
            v-if="stageNumber === 0" 
          />
          <StepSecondRight 
            v-if="stageNumber >= 1" 
            :card-data="cardData" 
            @next-stage="nextStage" 
          />
          </div>
        </div>
      </div>

      <StepFifth 
        v-if="stageNumber === 4"
        class="mt-10"
        @next-stage="nextStage"
      />
    

      <StepSixth
        v-if="stageNumber === 5"
        class="mt-10"
        />
    </div>
</template>
<script>

import StepFirstLeft from './StepFirstLeft.vue'
import StepFirstRight from './StepFirstRight.vue'
import RemainingTime from './RemainingTime.vue'
import PricingStages from './PricingStages.vue'
import OrderData from './OrderData.vue'
import StepSecondLeft from './StepSecondLeft.vue'
import StepSecondRight from './StepSecondRight.vue'
import StepThirdLeft from './StepThirdLeft.vue'
import StepFourthLeft from './StepFourthLeft'
import StepFifth from './StepFifth.vue'
import MobileTopbar from './MobileTopbar'
import StepSixth from './StepSixth.vue'


export default {
  name: 'MainContent',
  components: {
    MobileTopbar,
    RemainingTime,
    StepFirstLeft,
    StepFirstRight,
    StepSecondRight,
    StepSecondLeft,
    StepThirdLeft,
    PricingStages,
    OrderData,
    StepFourthLeft,
    StepFifth,
    StepSixth,
  },
  data(){
    return{
      stageNumber: 0,

      orderData:{
        orderNumber: "1007274392",
        applicationNumber: "CSS-212636",
        imeiSn: "869345678923837",
      },
      nextKey: 7,
      cardData: {
        packageElements: [],
      },
      ownChoice: []
    }
  },
  methods: {
    nextStage() {
      if(this.stageNumber <= 4){
        this.stageNumber++;
        this.scrollTop();
      }
    },
    scrollTop() {
        window.scrollTo({
          top: 0,
          // behavior: 'smooth',
        });
      
    },
    replaceObject(newObject) {
      this.cardData = newObject;
    },
    addObject(newValue) {
      this.addObjectOwnChoice(newValue);
      this.ownChoice.push(newValue);
    },
    addObjectOwnChoice(newValue) {
      const newKey = `key${this.nextKey}`;
      this.cardData.packageElements.push({id: newKey, element: newValue.cardName});
      this.nextKey += 1;
      this.cardData.grossCost += newValue.grossCost;
      this.cardData.netCost += newValue.netCost;
    },
    removeObjectOwnChoice(newValue, grossC, netC) {
      const index = this.cardData.packageElements.findIndex(object => object.element === newValue);
      if (index !== -1) {
        this.cardData.packageElements.splice(index, 1);
        this.cardData.grossCost -= grossC;
        this.cardData.netCost -= netC;
      }
    },
    removeObject(newValue, grossC, netC) {
      this.removeObjectOwnChoice(newValue, grossC, netC);
      const indexOwnChoice = this.ownChoice.findIndex(object => object.cardName === newValue);
      if(indexOwnChoice !== -1){
        this.ownChoice.splice(indexOwnChoice, 1);
      }
    },

  },
}
</script>
