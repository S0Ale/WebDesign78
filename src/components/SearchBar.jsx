import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FormattedTitles from './FormattedTitles';

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue!='') {
            for(let c=0;c<FormattedTitles.length;c++){
                let title_low=FormattedTitles[c].title_plain.toLowerCase();
                let input_low=inputValue.toLowerCase();
                if(checkStringMatch(title_low, input_low)){
                    if (window.location.pathname !== '/WebDesign78/article')
                        navigate('/article', { state: { def: c } });
                    else
                        navigate(location.pathname, { state: { def: c } });
                    break;
                }
            }
            setInputValue('');
        }
    }

    function checkStringMatch(str, pattern) {
        const regex = new RegExp(pattern);
        return regex.test(str);
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue} />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
    );
}

export default SearchBar;