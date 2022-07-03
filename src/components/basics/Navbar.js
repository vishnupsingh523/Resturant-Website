import React, {useState} from 'react'
import Menu from './menuApi';

const Navbar = ({newData, filterItem}) => {

  return (
        <nav className='navbar'>
                <div className='btn-group'>
                    {
                        newData.map((curEle) => {
                            return (
                            <button className='btn-group__item' onClick={() => filterItem(curEle)}>{curEle}</button>
                            )
                        })
                                                    }
            </div>
    </nav>
  )
                    };

export default Navbar;
