import React,{useState} from 'react';
import {useLocation, useHistory } from 'react-router-dom'

function Search({cb = Function.prototype}) {
    const[value, setValue] = useState([])

    const handleKey = (e) => {
        if(e.key === 'Enter'){
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }
    return (
        <div className='row'>
           <div className='input-fields col s12'>
                <input type="search" 
                       placeholder='Search...'
                       id='search-field'
                       onKeyDown={handleKey} 
                       onChange={(e) => setValue(e.target.value)}
                       value={value}  />
                <button className='btn' style={{position: "absolute", top:0, right:0}} onClick={handleSubmit}>Search</button>
            </div> 
        </div>
    );
}

export default Search;