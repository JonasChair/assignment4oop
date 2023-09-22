import { Zoo } from "./Zoo.js";
import { Elephant } from "./Elephant.js";
import { Tiger } from "./Tiger.js";
import { Zebra } from "./Zebra.js";
import { Zookeeper } from "./Zookeeper.js";
import { Logger } from "./Logger.js";
const logger = Logger.getInstance();
const elephant = new Elephant(`Dumbo`, 15, 2000);
const tiger = new Tiger(`Tiger`, 10);
const zebra = new Zebra(`Alan`, 5, 30, `Afrika`);
const zookeeper = new Zookeeper(`Alfonsas`);
const zoo = new Zoo(zebra, elephant, tiger, zookeeper);
logger.log(zoo.zookeeper.feedAnimal(zoo.zebra, 15));
logger.log(zoo.zebra.checkFatigue());
logger.log(zoo.elephant.makeSound());
logger.log(zoo.elephant.walk());
logger.log(zoo.elephant.checkFatigue());
logger.log(zoo.tiger.getLastTimeOutside());
zoo.tiger.leaveCage();
logger.log(zoo.tiger.getLastTimeOutside());
console.log(logger.getLogs());