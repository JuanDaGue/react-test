import React, { useContext,  useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { FaSort } from 'react-icons/fa';

function SortButtons() {
  const { sortType, setSortType } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);
  return (
    
    <div>
      <FaSort onClick={() => setVisible(!visible)} style={{ cursor: 'pointer' }} />
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
