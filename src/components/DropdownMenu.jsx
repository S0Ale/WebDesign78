import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoriesNames from './CategoriesNames';

const DropdownMenu = () => {
    const navigate = useNavigate();

    const handleChange = (event) => {
        navigate('/categories', { state: { def:  Number(event.target.value)} });
    };

    return (
        <div className="dropdown-container">
            <select className='dropdown' onChange={handleChange}>
                <option className={CategoriesNames[0].color} value="0">{CategoriesNames[0].name}</option>
                <option className={CategoriesNames[1].color} value="1">{CategoriesNames[1].name}</option>
                <option className={CategoriesNames[2].color} value="2">{CategoriesNames[2].name}</option>
                <option className={CategoriesNames[3].color} value="3">{CategoriesNames[3].name}</option>
            </select>
        </div>
    );
};

export default DropdownMenu;