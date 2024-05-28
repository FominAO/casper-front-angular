import { HeatingEquipment } from "./heating-equipment.interface";
import { SecurityAlarm } from "./security-alarm.interface";

export interface Device {
    id: string;
    name: string;
    status: 'online' | 'offline';
    type?: any;
    connectionInputs?: any[];
    setups?: any[];
    heatingEquipment?: HeatingEquipment;
    securityAlarm?: SecurityAlarm;
    securitySiren?: any;
}