export type IBoxItem = {
    label: string,
    value: string,
    checked?: boolean
}

//declare Context interface
export interface BoxContextStateInterface {
    boxList: Array<IBoxItem>;
    allStatus: boolean; // true: Select all  false: Uncheck all
    trigger: number, //trigger 1 multi 2 box
    selectButton:boolean
}

export const initialState:BoxContextStateInterface = {
    boxList: [
        {label: 'aaa', value: '111',},
        {label: 'bbb', value: '222',},
        {label: 'ccc', value: '333',},
        {label: 'ddd', value: '444',},
        {label: 'eee', value: '555',},
        {label: 'fff', value: '666',},
        {label: 'ggg', value: '777',},
        {label: 'hhh', value: '888',},
        {label: 'iii', value: '999',},
    ],
    allStatus: false,
    selectButton: false,
    trigger:2
}

export type State = typeof initialState
