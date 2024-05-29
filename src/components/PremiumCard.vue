<template>

        <Card class="relative before:rounded-xl before:text-white before:text-center before:leading-[50px] 
                    before:absolute before:z-[-1] before:right-[-5px] before:left-[-5px] before:bottom-[-5px] 
                    before:top-[-50px] before:bg-gradient-to-r before:from-[#639b85] before:to-[#79C4A6] 
                    before:before-content">
            <slot/>
        </Card>

</template>


<script>

import Card from './Card.vue'

export default{
    name: 'PremiumCard',
    components:{
        Card,
    }
}

</script>