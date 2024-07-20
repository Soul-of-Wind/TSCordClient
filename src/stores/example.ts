import {defineStore} from 'pinia';
import {computed, ref} from 'vue';

const useServerStore = (id: number) =>  defineStore('server-' + id, () => {
    const nameStore = ref('hehe' + id);
    return { nameStore };
});

export const useExampleStore = defineStore('example', () => {
    const servers = ref([1,2]);


    const serversSt = computed(() => servers.value.map((i) => useServerStore(i)()));
    const count = ref(0);

    function increment() {
        count.value = count.value + 1;
    }

    function add() {
        servers.value.push(3);
    }


    return {
        count,
        increment,
        add,
        servers,
        serversSt
    };
});