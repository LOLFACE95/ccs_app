<template>
    <div class="text-center w-[90%] m-auto cursor-pointer>">
        <button :class="[premiumCard ? 'bg-emerald text-white hover:bg-emeraldDark' : 'text-emerald border-2 border-emerald hover:bg-[#E6E6E6]']" 
                    class="m-auto w-full p-3 rounded-[100px] duration-200">
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