<template>
    <div class="flex items-center">
        <img class="mr-2 w-[24px] h-[24px]" :src="[availibity ? 'images/Icon.svg' : 'images/Icon_not.svg']">
        {{ packageElement }}
    </div>
</template>

<script>

export default{
    name: "PackageElement",

    props:{
        packageElement: String,
        availibity: {
            type: Boolean,
            default: true,
        }
    }
}

</script>