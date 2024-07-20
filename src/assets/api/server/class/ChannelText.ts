import {IChannel} from '@/assets/api/server/interface/IChannel.ts';
import { Socket} from 'socket.io-client';
import {MessageDto} from '@/assets/api/server/dto/MessageDto.ts';

interface ChannelOptions {
  socket: Socket
}

export class ChannelText implements IChannel {
  readonly id: number;
  readonly socket: Socket;

  constructor(id: number, opt: ChannelOptions) {
    this.id = id;
    this.socket = opt.socket;
  }

  send(text: string) {
    this.socket.emit('createMessage', {
      text,
      channelId: this.id
    });
  }

  onMessage(fn: (message: MessageDto) => void) {
    this.socket.on('message', (response: { channelId: number, message: MessageDto }) => {
      if (response.channelId === this.id) {
        fn(response.message);
      }
    });
  }

  fetchMessages(): Promise<MessageDto[]> {
    return new Promise((resolve) => {
      this.socket.emit('findAllMessages', { channelId: this.id }, (response: MessageDto[]) => {
        resolve(response);
      });
    });
  }


}