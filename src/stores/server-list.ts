import {defineStore} from 'pinia';
import { ServerOptions} from '@/assets/api/server';
import {computed, ref, Ref} from 'vue';
import {createServerStore, ServerStore} from '@/stores/server.ts';


export const useServerListStore = defineStore('server-list', () => {
  const serverList: Ref<ServerOptions[]> = ref([]);
  const serverInstanceList = computed(() =>
    serverList.value.map(serverOptions => createServerStore(serverOptions)())
  );

  function create(server: Omit<ServerOptions, 'uid'>) {
    const serverOptions = {
      ...server,
      uid: new Date().getTime()
    };
    serverList.value.push(serverOptions);

    return serverOptions;
  }

  function remove(uid: ServerOptions['uid']) {
    serverList.value = serverList.value.filter(i => i.uid !== uid);
  }
  function getServer(uid: ServerOptions['uid']): ServerStore {
    return serverInstanceList.value.find(i => i.uid === uid) as ServerStore;
  }

  return {
    serverInstanceList,
    serverList,
    create,
    getServer,
    remove
  };
});