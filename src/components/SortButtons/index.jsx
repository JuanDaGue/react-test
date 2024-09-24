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
        <div>
          <button onClick={() => setSortType('name')}>Sort by Name</button>
          <button onClick={() => setSortType('id')}>Sort by ID</button>
        </div>
      )}
    </div>
  );
}

export default SortButtons;
