import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, FormControl } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import './../../index.css';
import {CovidData} from './covid_data_card.js'; 

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        textAlign: 'left'
    },
    title: {
        textAlign: 'center'
    },
    country: {
        textAlign: 'center'
    },
    native_select: {
        width: 300,
        borderRadius: '5%'
    }
}));

export const SelectCountry = () => {
    const [country_state, country_function] = useState([]);
    const [country_name, countryname_function] = useState("0");

    useEffect(() => {
        async function countries() {
            let country_data = await fetch("https://covid19.mathdro.id/api/countries");
            let data = await country_data.json();
            country_function(
                data['countries'].map((myCountry) =>
                    myCountry['name']
                )
            );
        }
        countries();
    }, [country_name]);

    const classes = useStyles();

    const handleChange = (brot) => {
        countryname_function(brot);
    };

    return (
        <div>
            <br></br>
            <Grid container className={classes.root}>
                <Grid className={classes.title} item md={12} sm={12} xs={12}>
                    <h2 style={{ fontWeight: 'bold' }}>COVID-19 Statistics</h2>
                </Grid>
                <Grid item md={12} className={classes.country}>
                    <FormControl>
                        <NativeSelect className={classes.native_select} onChange={(e) => { handleChange(e.target.value) }}>
                            <option value="0">
                                Global
                                </option>
                            {
                                country_state.map((data, index) =>
                                    <option key={index} value={data}>
                                        {data}
                                    </option>
                                )

                            }
                        </NativeSelect>
                    </FormControl>
                </Grid>
            </Grid>
            <CovidData country_name = {country_name}/>
        </div>
    );
}