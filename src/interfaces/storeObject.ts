import { decisionObject } from "./decisionObject";
import { stateObject } from "./stateObject";

export interface storeObject {
    state: stateObject,
    decisions:decisionObject,
}