<template>
    <div class="bg-black text pt-3" :style="{ height: '100vh' }">
        <h1 class="text-center text-success">Learn Slots</h1>
        <div class="container bg-white text-center">
            <slot></slot>
            <slot name="learnSlot"></slot>
            <button class="btn btn-primary text-black m-2" @click="newVersion=!newVersion">Toggle Component</button>
            <br/><br/>
            <button class="btn btn-primary text-black m-2" @click="newVersion=true">New Lucky button Generator</button>
            <br><br/>
        
            <button class="btn btn-primary text-black m-2" @click="newVersion=false">Old Lucky button Generator</button>
            <br /><br />
            <keep-alive :include="['LuckyNumber','LuckyNumberV2']">
                <component :is="currentComponent" class="border"/>
            </keep-alive>
        </div>
    </div>
</template>


<script setup>
    import { ref, computed } from 'vue';
    import LuckyNumber from './LuckyNumber.vue';
    import LuckyNumberV2 from './LuckyNumberV2.vue';
    
    const newVersion = ref(true);
    
    const currentComponent = computed(() => {
        return newVersion.value? LuckyNumberV2 : LuckyNumber
    });
</script>

<style></style>