import {ChannelDto} from '@/assets/api/server/dto/ChannelDto.ts';
import {io, Socket} from 'socket.io-client';

export interface ServerOptions {
  url: string
  name: string
  userName: string
  uid: number
}

export class Server {
  readonly url: string;
  readonly uid: number;
  readonly userName: string;
  readonly socket: Socket;


  constructor({url, userName, uid}: ServerOptions) {
    this.url = url;
    this.uid = uid;
    this.userName = userName;
    this.socket = io(url);
  }

  join() {
    this.socket.emit('join', {name: this.userName});
  }

  fetchUsers(): Promise<string[]> {
    return new Promise((resolve) => {
      this.socket.emit('findAllUsers', (response: string[]) => {
        resolve(response);
      });
    });
  }

  onJoinUser(fn: () => void) {
    this.socket.on('joinUser', () => {
      fn();
    });
  }


  fetchChannels(): Promise<ChannelDto[]> {
    return new Promise((resolve) => {
      this.socket.emit('findAllChannels', (response: ChannelDto[]) => {
        resolve(response);
      });
    });
  }
}