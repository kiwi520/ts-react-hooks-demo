import {Reducer} from "react";
import {State,IBoxItem} from './state'
import {Action} from './actions'

export const reducer: Reducer<State, Action> = (state: State, action: Action): State => {
    switch (action.type) {
        case 'checkAll':
            return Object.assign({}, state, {
                boxList: state.boxList.map((item) => {
                    item.checked = true
                    return item
                })
            });
        case 'unCheckAll':
            return Object.assign({}, state, {
                boxList: state.boxList.map((item) => {
                    item.checked = false
                    return item
                })
            });
        case 'allStatus':
            return Object.assign({}, state, {
                allStatus: true,
            });
        case 'allNotStatus':
            return Object.assign({}, state, {
                allStatus: false
            });
        case 'selected':
            if (state.boxList.length >0){
                let flag: number = 0
                let list:Array<IBoxItem> = state.boxList.filter(item=> item.value !== action.value)
                if (list.length>0){
                    list.map(item =>{
                        if (item.checked === undefined){
                            flag+=1
                        }else if(!item.checked){
                            flag+=1
                        }
                    })
                }
                if (flag){
                    return Object.assign({}, state, {
                        boxList: state.boxList.map((item) => {
                            if (item.value === action.value)
                                item.checked = action.checked
                            return item
                        })
                    });
                }else{
                    return Object.assign({}, state, {
                        boxList: state.boxList.map((item) => {
                            if (item.value === action.value)
                                item.checked = action.checked
                            return item
                        }),
                        allStatus: true,
                    });
                }
            }else {
                return state
            }

        default:
            return state;
    }
};
