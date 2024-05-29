<template>
    <div class="flex items-center">
        <img class="mr-2 w-[24px] h-[24px]" src="images/Icon.svg">
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