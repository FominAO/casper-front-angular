import { BackupPower } from "./backup-power.interface";
import { HeatingEquipment } from "./heating-equipment.interface";
import { SecurityAlarm } from "./security-alarm.interface";
import { SecuritySiren } from "./security-siren.interface";
import { Setup } from "./setup.interface";

export interface Device {
    id: string;
    name: string;
    status: 'online' | 'offline';
    type?: any;
    connectionInputs?: any[];
    setups?: Setup[];
    heatingEquipment?: HeatingEquipment;
    securityAlarm?: SecurityAlarm;
    securitySiren?: SecuritySiren;
    backupPower?: BackupPower;
}