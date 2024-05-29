<template>
    <div class="p-6 bg-white rounded-xl">
    <h3 class="mt-4 text-2xl font-medium">Naprawiając z nami:</h3>
        <div class="mt-8 leading-6 flex flex-col">
            <PackageElement class="mt-6" 
                            v-for="advantage in advantages" :key="advantage.id" :package-element="advantage.content"/>
        </div>
    </div> 
</template>

<script>

import PackageElement from './PackageElement.vue'

export default {
    name: "ChooseUs",
    components:{
        PackageElement,
    },
    data(){
        return{
            advantages:[
                {id: 0, content: "wybierasz najwyższą jakość usług i prawie 30 lat doświadczenia"},
                {id: 1, content: "masz pewność, że użyjemy tylko oryginalnych podzespołów i dedykowanych narzędzi"},
                {id: 2, content: "zachowasz gwarancję producenta (jeżeli nadal występuje)"},
                {id: 3, content: "wybierasz najwyższą jakość usług i prawie 30 lat doświadczenia"}
            ]
        }
    }
}
</script>