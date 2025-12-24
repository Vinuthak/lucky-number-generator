<template>
    <LuckyNumberParent>
        <p class="pt-2">We have two versions for picking lucky number</p>
        <template v-slot:learnSlot>
            <p> Click the button to toggle between the two versions</p>
        </template>
    </LuckyNumberParent>
</template>

<script setup>
    import LuckyNumberParent from './components/LuckyNumberParent.vue';
</script>