import React, { useContext,  useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './buttonfilter.css'
function SortButtons() {
  const { sortType, setSortType } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
//   console.log('sort ->',sortType)
  return (
    
    <div className='buttonFilter' onClick={() => setVisible(!visible)}>
        <img src="/Vector.png" alt="" />
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
