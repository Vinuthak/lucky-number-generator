<template>
   <div class="bg-black text-white">
        <button @click="increment">++</button>
        <button @click="decrement">--</button>
   </div>
   <span>{{ counter }}</span>

</template>

<script setup>
    import { useCounter } from '@/composibles/useCounter';
    const { counter, increment, decrement } = useCounter(100,50);
</script>