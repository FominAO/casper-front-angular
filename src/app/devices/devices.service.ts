import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { Device } from "./device.interface";

const devices: Device[] = [
    {
        id: '1',
        name: 'Прибор 1',
        status: 'online',
        heatingEquipment: {
            id: '1',
            name: 'Отопление (второй этаж)',
            status: 'online',
            inputNumber: 1,
            userRange: [15,26],
            temperature: 22,
            units: '°С',
            maxValue: 30,
            minValue: 10,
            type: 'heatingEquipment',
        },
        securityAlarm: {
            id: '1',
            name: 'Охранный блок 1',
            status: 'offline',
            alarmInputs: [
                {
                    id: '1',
                    name: 'Контур (прихожая)',
                    status: 'offline',
                    sound: true,
                    switchState: false,
                    type: 'alarmInput',
                },
                {
                    id: '2',
                    name: 'Комната окно',
                    status: 'offline',
                    sound: false,
                    switchState: false,
                    type: 'alarmInput',
                }
            ],
            type: 'securityAlarm',
        },
        securitySiren: {
            id: '1',
            name: 'Сигнализация (улица)',
            status: 'online',
        },
        setups: [
            {
                id: '1',
                name: 'Освещение прихожая',
                status: 'online',
                inputNumber: 1,
            },
            {
                id: '1',
                name: 'Освещение лестница',
                status: 'online',
                inputNumber: 2,
            },
            {
                id: '1',
                name: 'Вентилятор комната',
                status: 'offline',
                inputNumber: 3,
            },
        ]
    },
    {
        id: '2',
        name: 'Прибор 2',
        status: 'offline',

    },
]

@Injectable({providedIn: 'root'})

export class DevicesService {
    devices$: BehaviorSubject<Device[]> = new BehaviorSubject(devices);

    getDevices() {
        return this.devices$;    
    }

    getDeviceById(id: string) {
        return of(devices.find(d => d.id === id))
    }

    deleteDevice(id: string) {
        this.devices$.next(this.devices$.getValue().filter(d => d.id !== id));
    }
    
    addDevice(device: any) {
        this.devices$.next([...this.devices$.getValue(), device])
    } 
}