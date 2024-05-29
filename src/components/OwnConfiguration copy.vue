<template>
      <div>
        <Card class="w-full mt-6 border-4 border-emerald">
        
            <h3 class="text-2xl font-medium">Wycena uwzględnia</h3>
            <div class="leading-[50px] mt-4 flex justify-between border-b mb-8 pb-8">
              <div class="flex flex-wrap">  
                <PackageElement v-for="packageElement in packageElements" 
                                :key="packageElement.id" 
                                :package-element="packageElement.content" 
                                class="sm:w-1/2 w-full"
                                />
              </div>
            </div>

            <div>
              <p class="text-emerald text-[19px] mt-5">708,42 brutto</p>
              <p class="text-ourGray text-sm mt-2">575,95 netto</p>
              <HorizontalButton class="w-full" :premium-card="true">
                  Następny krok
              </HorizontalButton>
            </div>
        </Card>
      </div>
</template>

<script>

import PackageElement from './PackageElement.vue';
import HorizontalButton from './HorizontalButton.vue';
import Card from './Card.vue';

export default{
    name: 'SelfConfiguration',
    components:{
        PackageElement,
        Card,
        HorizontalButton,
    },
    data(){
      return{
        packageElements: [
          {id: 0, content: "Pokrywa baterii"},
          {id: 1, content: "Moduł wyświetlacza black"},
          {id: 2, content: "Transport"},
          {id: 3, content: "Usługa"},
          {id: 4, content: "Ramka tylnej kamerki"}
        ]
      }
    }
}

</script>