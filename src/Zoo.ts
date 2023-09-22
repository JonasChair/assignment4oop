import { Zebra } from "./Zebra.js";
import { Tiger } from "./Tiger.js";
import { Elephant } from "./Elephant.js";
import { Zookeeper } from "./Zookeeper.js";

export class Zoo {
    zebra: Zebra;
    elephant: Elephant;
    tiger: Tiger;
    zookeeper: Zookeeper;

    constructor(zebra:Zebra,elephant:Elephant,tiger:Tiger,zookeeper:Zookeeper){
        this.zebra = zebra;
        this.elephant = elephant;
        this.tiger = tiger;
        this.zookeeper = zookeeper;
    }
}