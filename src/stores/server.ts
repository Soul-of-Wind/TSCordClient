import {defineStore} from 'pinia';
import {Server, ServerOptions} from '@/assets/api/server';
import {Ref, ref} from 'vue';
import {ChannelDto} from '@/assets/api/server/dto/ChannelDto.ts';
import {ChannelText} from '@/assets/api/server/class/ChannelText.ts';
import {Channel} from '@/assets/api/server/types/Channel.ts';

export interface ServerStore extends ReturnType<ReturnType<typeof createServerStore>> {}

export const createServerStore = (serverOptions: ServerOptions) => defineStore(`server-${serverOptions.uid}`, () => {
  const server = new Server(serverOptions);
  const uid = ref(server.uid);
  const isLoaded = ref(false);
  const channels: Ref<ChannelDto[]> = ref([]);
  const users: Ref<string[]> = ref([]);

  async function fetchChannels() {
    channels.value = await server.fetchChannels();
  }

  async function fetchUserList() {
    users.value = await server.fetchUsers();
  }

  async function init() {
    server.join();
    await fetchChannels();
    await fetchUserList();
    server.onJoinUser(fetchUserList);

    isLoaded.value = true;
  }

  function getChannelInstance(id: number): Channel {
    return new ChannelText(id, { socket: server.socket });
  }

  return {
    uid,
    init,
    isLoaded,
    users,
    getChannelInstance,
    channels
  };
});

