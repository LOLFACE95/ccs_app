<template>
     <Card class="flex sm:flex-row flex-col w-full p-8 rounded-lg justify-between">
          <div>
            <h3 class="text-2xl font-medium tracking-wide mb-4">Dane zlecenia</h3>
            <p class="text-emerald tracking-wide mb-2">XIAOMI 11T PRO</p>
            <div class="flex basis-2 sm:w-60 w-4/5 text-[12px] leading-7 justify-between">
              <div class="flex flex-col ">
                <p>NR ZLECENIA</p>
                <p>NR ZGŁOSZENIA</p>
                <p>IMEI/SN</p>
              </div>
              <div class="flex flex-col text-[#646464]">
                <p>{{ orderData.orderNumber }}</p>
                <p>{{ orderData.applicationNumber }}</p>        
                <p>{{ orderData.imeiSn }}</p>
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 h-[150px] sm:h-auto mt-5 sm:mt-0 sm:ml-4 xl:ml-0 flex-shrink basis-auto bg-[url('images/naprawa.png')] bg-cover bg-center rounded-lg">
          </div>
        </Card> 
</template>

<script>

import Card from './Card.vue';

export default{
    name: 'OrderData',
    components:{
      Card,
    },
    props:{
        orderData: Object

    }
}

</script>