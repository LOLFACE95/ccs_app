<template>
    <div class="bg-white rounded-xl p-6">
        <h3 class="text-2xl">Nie jesteś zainteresowany naprawą?</h3>
        <p class="mt-4 text-ourGray">Jeżeli nie jesteś zainteresowany naprawą, wybierz jedną z opcji poniżej.</p>
        <NotRepairCard class="mt-5"
                        card-title="Zwrot" 
                        cardCost="60zł brutto" 
                        cardContent="Nie wyrażam zgody na przeprowadzenie odpłatnej obsługi urządzenia, proszę o jego odesłanie."/>
        
        <NotRepairCard class="mt-5"
                        card-title="Utylizacja" 
                        cardCost="0,00zł brutto" 
                        cardContent="Dbając o środowisko naturalne, zutylizujemy niesprawne urządzenie zgodnie z międzynarodowymi normami. Posiadamy certyfikat ISO 14001:2015"/>
    </div>

</template>
<script>
import NotRepairCard from './NotRepairCard.vue';

export default{
    name: "NotRepairPanel",
    components: {
        NotRepairCard,
    }
}
</script>