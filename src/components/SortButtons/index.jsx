import React, { useContext,  useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './buttonfilter.css'
function SortButtons() {
  const { sortType, setSortType } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  const chooseIcon = (sortType)=>{
    if(sortType === 'id'){return <img src="/Vector.png" alt="vector" />}
    else if(sortType === 'name'){
      return <img src="/text_format.png" alt="name" />
    }
  }
  return (
    
    <div className='buttonFilter' onClick={() => setVisible(!visible)}>
        {chooseIcon(sortType)}
      {visible && (
        <div className='buttonpokemon'>
            <div className='title2'>
                <h3>
                    Sort by
                </h3>
            </div>
            <div className='buttoncontent'>
                <button onClick={() => setSortType('id')}>Number</button>
                <button onClick={() => setSortType('name')}>Name</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default SortButtons;
