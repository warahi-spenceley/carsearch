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

/** interfaces for type checking */
import { car as carInterface } from '../api/Cars';
import { queryProperties as queryPropertiesInterface } from '../components/Searchbar';

export default function Cars() {
  const [carsFound, setCarsFound] = React.useState([]);

  const findCars = (queryProperties: queryPropertiesInterface) => {
    if (!queryProperties.query) return;
    const carsFound: any = CarsApi.find(queryProperties.query, { filter: queryProperties.filter });
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
              handleQuery={(queryProperties: any) => findCars(queryProperties)}
              filters={[
                {
                  title: 'Loose match',
                  value: 'looseMatch'
                },
                {
                  title: 'Exact match',
                  value: 'exactMatch'
                }
              ]}
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
                carsFound.map((car:carInterface|null) => (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Car Cartoon" src="/images/car_cartoon.png" />
                      </ListItemAvatar>
                      <ListItemText
                        primary={ <Typography style={{ fontWeight: 800, paddingBottom: 10 }} variant="h6">{car?.Name}</Typography>}
                        secondary={
                          <Grid
                            container
                            spacing={0}
                            direction="column"
                          >
                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                variant="overline"
                                color="text.primary"
                              >
                                Year: 
                              </Typography>
                              {' ' + car?.Year}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Origin:
                              </Typography>
                              {' ' + car?.Origin}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Miles_per_Gallon:
                              </Typography>
                              {' ' + car?.Miles_per_Gallon}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Cylinders:
                              </Typography>
                              {' ' + car?.Cylinders}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Displacement:
                              </Typography>
                              {' ' + car?.Displacement}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Horsepower:
                              </Typography>
                              {' ' + car?.Horsepower}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Weight:
                              </Typography>
                              {' ' + car?.Weight_in_lbs + 'lbs'}
                            </Grid>

                            <Grid item xs={1}>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="overline"
                                color="text.primary"
                              >
                                Acceleration:
                              </Typography>
                              {' ' + car?.Acceleration}
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