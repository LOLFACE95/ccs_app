<template lang="">
    <div>
        <div class="custom-radio flex justify-center mt-4">
                    <input type="radio" :id="option" name="customRadio" :value="option">
                    <label class="w-full text-sm text-ourGray" :for="option">
                        <slot/>
                    </label>
                </div>
        
    </div>
</template>
<script>

export default {
    name:"LabelElement",
    props:{
        option: String,
    }
}
</script>
<style lang="">
    
</style>