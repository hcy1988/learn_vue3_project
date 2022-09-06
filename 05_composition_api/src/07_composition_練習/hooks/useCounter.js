import { ref, computed } from 'vue'

export default function() {
  const counter = ref(0);
  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }
  const doubleCounter = computed(() => counter.value * 2);

  return {
    counter, increment, decrement, doubleCounter
  }
}