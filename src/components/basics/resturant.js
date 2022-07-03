import React, {useState} from 'react'
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(
        Menu.map((currEle) => {
            return currEle.category;
    
        })
    ),
    "All",
];

const Resturant = () => {
    
    const [menuData, setMenuData] = useState(Menu);
    const [newData, setNewData] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curEle) => {
            return curEle.category === category;
        })

        setMenuData(updatedList);
    };

    return (
        <div>
            <Navbar filterItem={filterItem} newData={newData} />
            <MenuCard menuData={menuData} />
      </div>
  )
}

export default Resturant;
