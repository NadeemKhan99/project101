import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';
import './../../index.css';

const styles = makeStyles(() => ({
    root: {
        textAlign: 'right',
        justifyContent: 'center',
        paddingTop: 20,

    },
    paper: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 2,
        borderRadius: 20,

    },
    title: {
        textAlign: 'left',
        marginBottom: 0,
        padding: 0
    },
    grid: {
        margin: 14
    }
}));

export const CovidData = ({ country_name }) => {

    const classes = styles();
    const [country_state, country_function] = useState([]);
    let country_num ;
    if(country_name==="0")
        country_num = "Global";
    else
        country_num = country_name;

    useEffect(() => {
        async function country_data() {
            let global_data = 0;
            if (country_name === "0") {
                global_data = await fetch('https://covid19.mathdro.id/api');
                global_data = await global_data.json();

            }
            else {
                global_data = await fetch(`https://covid19.mathdro.id/api/countries/${country_name}`);
                global_data = await global_data.json();
            }
            country_function(Object.keys(global_data).map((value, index) =>
                global_data[value]['value']

            ).slice(0, 3));
        }

        country_data();
    }, [country_name]);



        //---------------bar chart data
        const data = {
            labels: ['Confirmed', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: ['COVID-19 STATS'],
                backgroundColor: ['blue','green','red'],
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                barThickness: 200,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [country_state[0], country_state[1], country_state[2]]
              }
            ]
          };
          
        //---------------------data end--------------

    return (
        <div className="whole_data">
            <Grid container className={classes.root}>
                <Grid item className={classes.title} md={3} sm={12} xs={8}>
                    <h2 className={classes.title}>Covid-19</h2>
                    <p style={{ justifyContent: 'center', marginTop: 0, textAlign: 'justify' }}>
                        The coronavirus, or COVID-19, caused a lot of damage including life, meaning no one has immunity. Scientists finally prepared the vaccines and cases are droping day by day in different countries. We are showing the details of cases in different countries affected by Covid-19.
                    </p>
                </Grid>
                <Grid item md={2} sm={12} xs={8} className={classes.grid}>
                    <Paper className={classes.paper} elevation={6}>
                        <h4 style={{ color: 'blue' }}>Confirmed Cases</h4>
                        <h2 style={{ marginTop: 0, color: 'blue' }}>{country_state[0]}</h2>
                    </Paper>
                </Grid>
                <Grid item md={2} sm={12} xs={8} className={classes.grid}>
                    <Paper className={classes.paper} elevation={6}>
                        <h4 style={{ color: 'green' }}>Recovered Cases</h4>
                        <h2 style={{ marginTop: 0, color: 'green' }}>{country_state[1]}</h2>
                    </Paper>
                </Grid>
                <Grid item md={2} sm={12} xs={8} className={classes.grid}>
                    <Paper className={classes.paper} elevation={6}>
                        <h4 style={{ color: 'red' }}>Death Cases</h4>
                        <h2 style={{ marginTop: 0, color: 'red' }}>{country_state[2]}</h2>
                    </Paper>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <div>
    <h2 style={{ textAlign: 'center' }}>{country_num}</h2>
                        <Bar
                            data={data}
                            // width={0}
                            // height={10}
                            // options={{
                            //     maintainAspectRatio: false
                            // }}
                        />
                    </div>
                </Grid>

            </Grid>


        </div>
    )
}