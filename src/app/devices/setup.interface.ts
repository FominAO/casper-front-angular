export interface Setup {
    id: string;
    name: string;
    inputNumber: number;
    status: 'online' | 'offline';
    type?: any;
}