export interface HeatingEquipment {
    id: string;
    name: string;
    status: 'online' | 'offline';
    inputNumber?: number;
    userRange?: number[];
    temperature?: number;
    units?: '°С' | '°F';
    maxValue?: number;
    minValue?: number;
    type?: any;
}