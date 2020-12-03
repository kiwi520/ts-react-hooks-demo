export type Action =
    | { type: 'checkAll' }
    | { type: 'unCheckAll' }
    | { type: 'allStatus' }
    | { type: 'allNotStatus' }
    | { type: 'selected', value:string, checked: boolean }

export const checkAll:Partial<Action>={ type: 'checkAll' }
export const unCheckAll:Partial<Action>={ type: 'unCheckAll' }
export const selected:Partial<Action>={ type: 'selected' }
