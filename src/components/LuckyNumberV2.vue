<template>
    <div class="col-6 bg-white text-center-p-4">
        <h4 class="text-success">Random Number Generator</h4>
        <hr/>
        Max Range:
        <input v-model.number="maxNumber" class="rounded" type="number"/>
        <br/><br/>
        <button class="btn btn-danger text-black" @click="generateNumber()">
            <span v-if="luckyNumber===0">
                Generate Lucky Number<br>
                Range(1 - {{ maxNumber }})
            </span>
       
            <span v-else>Lucky number is {{ luckyNumber }}<br>
            Click to generate Lucky Number</span>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const luckyNumber = ref(0);
    const maxNumber = ref(100);

    function generateNumber(){
        luckyNumber.value = Math.floor(Math.random() * maxNumber.value);
    }

    
</script>