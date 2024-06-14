<template>
    <div>
        <div class="hidden sm:flex justify-between h-10">
            <h2 class="text-4xl">Podsumowanie</h2>
            <img src="images/logo.png">
        </div>
        <Card class="w-full mt-10">
            <h3 class="text-2xl">Żadanie natychmiatowego przystąpienia do wykonania Umowy przez serwis</h3>

            <div class="border-t pt-4 mt-8">

                <div class="custom-radio flex justify-center mt-4">
                    <input type="radio" id="option1" name="customRadio" value="option1">
                    <label class="text-sm text-ourGray" for="option1">Z uwagi na wykonanie przez Serwis usług w zakresie Naprawy, wnoszę o natychmiastowe rozpoczęcie świadczenia usług w  zakresie wynikającym z zawartej Umowy, Oświadczam, że Serwis poinformował mnie o skutkach żądania natychmiastowego przystąpienia do wykonania Umowy. Rowiń</label>
                </div>
                <div class="custom-radio flex justify-center mt-4">
                    <input type="radio" id="option2" name="customRadio" value="option2">
                    <label class="text-sm text-ourGray" for="option2">Z uwagi na wykonanie przez Serwis usług w zakresie Naprawy, wnoszę o natychmiastowe rozpoczęcie świadczenia usług w  zakresie wynikającym z zawartej Umowy, Oświadczam, że Serwis poinformował mnie o skutkach żądania natychmiastowego przystąpienia do wykonania Umowy. Rowiń</label>
                </div>
            </div>
            <div class="flex mt-8 justify-between items-center">
                <HorizontalButton class="!w-[48%] !m-0">
                    Cofnij
                </HorizontalButton>
                <HorizontalButton 
                    :premiumCard="true"
                    class="!w-[48%] !m-0"
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

export default {
    name: "StepFifth",
    components:{
        Card,
        HorizontalButton,
    }

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