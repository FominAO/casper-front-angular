export interface SecurityAlarmInput {
    id: string;
    name: string;
    status: 'online' | 'offline';
    sound: boolean;
    switchState: boolean;
    type: any;
}