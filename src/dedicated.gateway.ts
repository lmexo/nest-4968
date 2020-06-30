import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(3030)
export class DedicatedGateway {
	@SubscribeMessage('message')
	handleMessage(): string {
		return 'Hello world from dedicated socket server!';
	}
}
