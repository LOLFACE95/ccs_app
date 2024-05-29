<template>
    <div class="text-center w-[90%] m-auto cursor-pointer>">
        <button :class="[premiumCard ? 'bg-emerald text-white' : 'text-emerald border-2 border-emerald']" 
                    class="m-auto w-full p-3 rounded-[100px]">
            <slot/>
        </button>  
    </div>

</template>

<script>
export default{
    name: "HorizontalButton",
    props: {
        premiumCard: Boolean,
    },
    
}
</script>