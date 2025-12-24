import { ref } from 'vue';

export function useCounter(initialValue=0, step=1)
{
    const counter = ref(initialValue);

    function increment(){
        counter.value = counter.value + step;
    }

    const decrement = () => { counter.value = counter.value - step };
    return {counter,increment,decrement}
}