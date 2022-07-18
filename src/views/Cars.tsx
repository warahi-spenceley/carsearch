import React from 'react';
import {
  Grid,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Box
} from '@mui/material';
import Searchbar from '../components/Searchbar';

import * as CarsApi from '../api/Cars';
/** Car interfaces for type checking */
import { car } from '../api/Cars';

export default function Cars() {
  const [carsFound, setCarsFound] = React.useState([]);

  React.useEffect(function setCarsFound() {
    console.log(carsFound);
  }, [carsFound]); // eslint-disable-line react-hooks/exhaustive-deps

  const queryCars = (query: string) => {
    if (!query) return;
    const carsFound: any = CarsApi.find(query);
    setCarsFound(carsFound);
  }

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
      >

        {/** Search bar */}
        <Grid item xs={1}>
          <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{ paddingTop: 40 }}
          >
            <Grid item xs={8}>
            <Searchbar
              label = "Cars"
              placeholder = "Enter a car name"
              handleQuery={(input: string) => queryCars(input)}
            />
            </Grid>
          </Grid>
        </Grid>

        {/** Search result(s) */}
        <Grid item xs={11}>
          <Box
            display="flex" 
            alignItems="center"
            justifyContent="center"
          >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              {
                carsFound.map((car:any) => (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Car Cartoon" src="/images/car_cartoon.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={car.Name}
                        secondary={
                          <Grid
                            container
                            spacing={0}
                            direction="column"
                          >
                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Year: 
                              </Typography>
                              {' ' + car.Year}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Origin:
                              </Typography>
                              {' ' + car.Origin}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Miles_per_Gallon:
                              </Typography>
                              {' ' + car.Miles_per_Gallon}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Cylinders:
                              </Typography>
                              {' ' + car.Cylinders}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Displacement:
                              </Typography>
                              {' ' + car.Displacement}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Horsepower:
                              </Typography>
                              {' ' + car.Horsepower}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Weight:
                              </Typography>
                              {' ' + car.Weight_in_lbs + 'lbs'}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                Acceleration:
                              </Typography>
                              {' ' + car.Acceleration}
                            </Grid>
                          </Grid>
                        }
                      />
                    </ListItem>

                    <Divider component="li"/>
                  </>
                ))
              }
            </List>
          </Box>
        </Grid>

      </Grid>
    </>

  );
}