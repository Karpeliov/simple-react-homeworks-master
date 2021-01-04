import {initialStateArrayType} from "./tests/homeWorkReducer.test";
import {isNumber} from "util";

export const homeWorkReducer = (state: Array<initialStateArrayType>, action: { type: string, payload: any }): initialStateArrayType[] => {
    switch (action.type) {
        case "sort": {
            let newArr = state.sort((a, b) => {
                switch (a.name > b.name) {
                    case true:
                        if (action.payload === "up") {
                            return 1
                        } else if (action.payload === "down") {
                            return -1
                        }

                    case false:
                        if (action.payload === "up") {
                            return -1
                        } else if (action.payload === "down") {
                            return 1
                        }
                    default:
                        return 0
                }
            })
            return [...newArr]
        }
        case "check": {

            return state.filter((e: initialStateArrayType) => e.age >= action.payload)
        }
        default:
            return state
    }
};