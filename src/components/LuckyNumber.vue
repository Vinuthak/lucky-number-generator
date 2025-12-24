<template>
    <div class="">
        <button class="btn btn-danger text-black" @click="generateNumber()">
            <span v-if="luckyNumber===0">
                Generate Lucky Number<br>
                Range(1 - 100)
            </span>
            <span v-else>Lucky number is {{ luckyNumber }}<br>
            Click to generate Lucky Number</span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const luckyNumber = ref(0);

    function generateNumber(){
        luckyNumber.value = Math.floor(Math.random() * 100);
    }

    
</script>