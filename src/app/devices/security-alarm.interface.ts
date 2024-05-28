import { SecurityAlarmInput } from "./security-alarm-input.interface";

export interface SecurityAlarm {
    id: string;
    name: string;
    status: 'online' | 'offline';
    alarmInputs: SecurityAlarmInput[];
    type: any;
}