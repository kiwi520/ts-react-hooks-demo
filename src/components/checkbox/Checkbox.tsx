import React, {useCallback, useEffect, useState, useContext} from "react";
import classNames from 'classnames';
import './Checkbox.css';
import {BoxContext, BoxContextInterface} from '../context'

export interface BoxProps {
    title: string;
    value: string;
    index: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    className?: string;
}

const Checkbox: React.FC<BoxProps> = (props) => {
    const {className, title, value, index} = props;
    const {state, dispatch} = useContext<BoxContextInterface>(BoxContext);
    const [check, setCheck] = useState<boolean>(false);
    const [selected, SetSelected] = useState<boolean>(false);

    const classNamesList = classNames(className, {
        'is-checked': selected
    })

    useEffect(() => {
        if (state.boxList.length) {
            state.boxList.forEach((item) => {
                if (item.value === value && item.checked === true) {
                    setCheck(item.checked)
                    SetSelected(item.checked)
                }
            })
        }
    }, [state.boxList])

    const onChangeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        state.trigger = 2
        if (!state.allStatus) {
            if (e.target.checked) {
                dispatch({type: 'selected', value: e.currentTarget.value, checked: e.currentTarget.checked})
            } else {
                dispatch({type: 'selected', value: e.currentTarget.value, checked: e.currentTarget.checked})
            }
        }

    }, [])

    return (
        <div>
            <div className="checkbox">
                <h3 className='title'>{title}</h3>
                <div className={classNamesList}>
                    <input type="checkbox" value={value} onChange={onChangeHandle} checked={check} name="Checkbox"
                           data-testid={`box-index-${index}`}/>
                </div>
            </div>
        </div>
    )
}

export default Checkbox
