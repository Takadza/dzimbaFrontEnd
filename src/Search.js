import React, { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import './Search.css';
import "react-date-range/dist/styles.css";
import 'react-date-range/dist/theme/default.css';
import { House } from '@material-ui/icons';
import { Button } from '@mui/material';



function Search() {


    const [startDate, SetStartDate] = useState
    (new Date());
    const [endDate, setEndDate] = useState
    (new Date());


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        SetStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className = "search">
            <DateRangePicker ranges={
                [selectionRange]} onChange=
                {handleSelect}/>
                <h2>
                    How man rooms do you want
                    <House/>
                </h2>
                <input min={0}
                defaultValue= {1}
                type= "number"/>
                
               <Button>Search Dzimba.com</Button>
            
        </div>
    )
}

export default Search

