import React, { useContext,  useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FaSort } from 'react-icons/fa';
import './buttonfilter.css'
function SortButtons() {
  const { sortType, setSortType } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  return (
    
    <div className='buttonFilter' onClick={() => setVisible(!visible)}>
        <img src="../../public/Vector.png" alt="" />
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
