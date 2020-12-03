import React from 'react';
import MultiCheckbox from "./components/multiCheckbox/multiCheckbox";
import {IBoxItem} from "./components/context/state";

const options: IBoxItem[] = [
  {label: 'aaa', value: '111',},
  {label: 'bbb', value: '222',},
  {label: 'ccc', value: '333',},
  {label: 'ddd', value: '444',},
  {label: 'eee', value: '555',},
  {label: 'fff', value: '666',},
  {label: 'ggg', value: '777',},
  {label: 'hhh', value: '888',},
  {label: 'iii', value: '999',},
]

function App() {
  const onChangeHandle = (e:React.ChangeEvent<HTMLInputElement>) =>{}
  return (
    <div className="App">
      <MultiCheckbox onChangeHandle={onChangeHandle} boxList={options} className={'test'} />
    </div>
  );
}

export default App;
