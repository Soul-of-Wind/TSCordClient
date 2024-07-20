import {Socket} from 'socket.io-client';

export interface IChannel {
  id: number,
  socket: Socket
}