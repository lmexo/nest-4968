import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class UpgradeGateway {
	@SubscribeMessage('message')
	handleMessage(): string {
		return 'Hello world from updated socket connection!';
	}
}
