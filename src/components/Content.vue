<template>
  
  <div class="xl:w-4/5 lg:w-[90%] w-[95%] m-auto pb-[150px]">
    
    <MobileTopbar class="sm:hidden"/>

    <RemainingTime class="mt-10"/>
    <PricingStages class="mt-14" :stage-number="stageNumber"/>

    
    <div class="flex justify-between mt-10 flex-col lg:flex-row">

      <div class="lg:w-[55%] w-full">
        <OrderData class="" :order-data="orderData"/>

        <StepFirstLeft v-if="stageNumber === 0" 
                      @next-stage="nextStage" 
                      @replace-object="replaceObject" 
                      class="" />

        <StepSecondLeft  v-if="stageNumber === 1" 
                        class=""
                        @add-property="addObject"
                        @delete-property="removeObject"
                        />

        <StepThirdLeft v-if="stageNumber === 2" 
                      class="mt-8"/>

        <StepFourthLeft v-if="stageNumber === 3" 
                      class="mt-8"/>
      </div>

      <div class="w-full lg:w-[40%] flex-shrink lg:mt-0 mt-10">
        <StepFirstRight v-if="stageNumber === 0" />
        <StepSecondRight v-if="stageNumber >= 1" :card-data="cardData" @next-stage="nextStage" />
     
      </div>

      

    </div>
  </div>
  


</template>

<script>

import StepFirstLeft from './StepFirstLeft.vue'
import StepFirstRight from './StepFirstRight.vue'
import RemainingTime from './RemainingTime.vue'
import PricingStages from './PricingStages.vue'
import OrderData from './OrderData.vue'
// import RepairEstimate from './RepairEstimate.vue'
// import ChoosingPanel from './ChoosingPanel.vue'
// import OwnConfiguration from './OwnConfiguration.vue'
import StepSecondLeft from './StepSecondLeft.vue'
import StepSecondRight from './StepSecondRight.vue'
import StepThirdLeft from './StepThirdLeft.vue'
import StepFourthLeft from './StepFourthLeft'

import MobileTopbar from './MobileTopbar'

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
    // RepairEstimate,
    // ChoosingPanel,
    // OwnConfiguration,
    // ChooseUs,
    // NotRepairPanel,

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
    }
  },
  methods: {
    nextStage() {
      if(this.stageNumber <= 2){
        this.stageNumber++;
      }
    },
    replaceObject(newObject) {
      this.cardData = newObject;
    },
    addObject(newValue, grossC, netC) {
      const newKey = `key${this.nextKey}`;
      this.cardData.packageElements.push({id: newKey, element: newValue});
      this.nextKey += 1;
      this.cardData.grossCost += grossC;
      this.cardData.netCost += netC;
    },
    removeObject(newValue, grossC, netC) {
      const index = this.cardData.packageElements.findIndex(object => object.element === newValue);
      console.log(index, this.cardData.packageElements[1])
      if (index !== -1) {
        this.cardData.packageElements.splice(index, 1);
        this.cardData.grossCost -= grossC;
        this.cardData.netCost -= netC;
      }
    },
  
    cokolwiek(){
      this.cardData.packageElements.push({id:4, element: "Jajco"});
    },
    

  },
}
</script>
