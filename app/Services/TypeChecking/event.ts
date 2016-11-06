import {Sport, User} from './index';

export interface Event {
    id:number;
    nbrPersonnesMax:number;
    nbrPersonnesReserve:number;
    sport:Sport[];
    usercreateur:User[];

}