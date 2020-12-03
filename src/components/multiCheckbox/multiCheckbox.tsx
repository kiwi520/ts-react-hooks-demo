import React, {useReducer} from "react";
import classNames from "classnames";
import {v4 as uuidV4} from 'uuid';

import Checkbox from "../checkbox/Checkbox";
import './multiCheckbox.css';
import {BoxContext} from '../context'
import {IBoxItem} from '../context/state'
import {reducer} from "../context/reducers";
import {initialState} from '../context/state'
export interface MultiCheckBoxProps {
    boxList: Array<IBoxItem>;
    onChangeHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}



const MultiCheckbox: React.FC<MultiCheckBoxProps> = (props) => {

    const { style, className, onChangeHandle} = props
    const classNamesList = classNames('multicheckbox', className, style)

    const [state,dispatch] = useReducer(reducer,initialState)

    const _onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked){
            dispatch({ type: 'checkAll' })
            dispatch({type:'allStatus'})
        }else{
            dispatch({ type: 'unCheckAll' })
            dispatch({ type: 'allNotStatus' })
        }

        state.trigger =1
    }

    return (
        <>
            <div className={'main'}>
                <div className="header">Status</div>
                <div className={classNamesList}>
                    <div className="checkbox">
                        <h3 className='title'>{'select all'}</h3>
                        <div>
                            <input type="checkbox" value={'all'} onChange={_onChangeHandle} checked={state.allStatus}
                                   id="checkboxFiveInput" name="Checkbox" data-testid="box-all"/>
                            <label htmlFor="checkboxFiveInput"/>
                        </div>
                    </div>
                    <BoxContext.Provider value={{state,dispatch}}>
                        {state.boxList.map((item, index) => {
                            return (<Checkbox key={uuidV4()} onChange={onChangeHandle} title={item.label}
                                              value={item.value} index={index}/>)
                        })}
                    </BoxContext.Provider>
                </div>
            </div>
        </>
    )
}

export default MultiCheckbox
