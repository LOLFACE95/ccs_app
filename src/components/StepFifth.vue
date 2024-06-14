<template>
    <div>
        <MobileTopbar class="sm:hidden"/>
        <h2 class="sm:hidden text-3xl mt-4">Podsumowanie</h2>
        
        <div class="hidden sm:flex justify-between h-10">
            <h2 class="text-4xl">Podsumowanie</h2>
            <img src="images/logo.png">
        </div>
        <Card class="w-full mt-10">
            <div class="flex items-center">
                <div class="text-3xl">📄</div>
                <h3 class="text-2xl ml-4">Żądanie natychmiatowego <br/> przystąpienia do wykonania Umowy przez serwis</h3>
            </div>

            <div class="border-t pt-4 mt-8">
                <LabelElement option="option1">
                    Z uwagi na wykonanie przez Serwis usług w zakresie Naprawy, wnoszę o natychmiastowe rozpoczęcie świadczenia usług w  zakresie wynikającym z zawartej Umowy, Oświadczam, że Serwis poinformował mnie o skutkach żądania natychmiastowego przystąpienia do wykonania Umowy.
                    <span class="text-emerald underline cursor-pointer">
                            Rowiń
                    </span>
                </LabelElement>
                <LabelElement option="option2">
                    Nie wyrażam zgody na natychmiastowe rozpoczęcie świadczenia usług w zakresie wynikającym z zawartej Umowy. Przyjmę do wiadomości, że świadczenie rozpocznie sie po upływie terminu od odstąpienia od Umowy
                </LabelElement>
            </div>
            <div class="flex mt-8 justify-between items-center">
                <HorizontalButton class="!w-[48%] !m-0">
                    Cofnij
                </HorizontalButton>
                <HorizontalButton 
                    :premiumCard="true"
                    class="!w-[48%] !m-0"
                    @click="emitUpdate"
                    >
                    Zatwierdź 
                </HorizontalButton>
            </div>
        </Card>
    </div>
</template>
<script>
import Card from './Card.vue';
import HorizontalButton from './HorizontalButton.vue';
import MobileTopbar from './MobileTopbar.vue';
import LabelElement from './LabelElement.vue';

export default {
    name: "StepFifth",
    components:{
        Card,
        MobileTopbar,
        HorizontalButton,
        LabelElement
    },
    methods: {
        emitUpdate() {
        this.$emit('next-stage');
        },
    },

}
</script>
<style>
/* Ukrycie domyślnego przycisku radio */
.custom-radio input[type="radio"] {
  display: none;
}

/* Stylowanie niestandardowego przycisku radio */
.custom-radio label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  line-height: 20px;
  font-weight: 300;
}
input[type="radio"]:checked + label{
    font-weight: 400;
}

/* Stylowanie nieaktywnego przycisku radio */
.custom-radio label::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  width: 20px;
  height: 20px;
  border: 2px solid var(--darkEmerald);
  border-radius: 50%;
  background-color: #fff;
}

/* Stylowanie aktywnego przycisku radio */
.custom-radio input[type="radio"]:checked + label::after {
  content: "";
  position: absolute;
  left: 4px;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--darkEmerald);
}

</style>