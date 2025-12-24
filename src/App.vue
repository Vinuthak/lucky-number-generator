<template>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <p>{{ counter }}</p>
    <br />
    <ButtonCounter></ButtonCounter>
</template>

<script setup>
   import ButtonCounter from './components/ButtonCounter.vue';
import { useCounter } from './composibles/useCounter';

   const { counter, increment, decrement } = useCounter();
</script>