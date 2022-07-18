import React from "react";
import {
  IconButton,
  TextField,
  Grid,
  Menu,
  MenuItem
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface filter {
  title: string;
  value: any;
}

export interface queryProperties {
  query: string;
  filter?: any;
  anchorElement?: any;
  hasFilterBeenSelected?: boolean;
}

/**
 * 
 * @param options The options.
 * @param options.[label] The search bar label.
 * @param options.[placeholder] The placeholder.
 * @param options.handleQuery A function to handle the query. This will be passed the current input value from this component and can be used like so:
 * <Searchbar
 *   handleQuery = {(input) => console.log(input)}
 * />
 * @param options.[filters] filters
 * @param options.[filters.title] The value of the title
 * @param options.[filters.value] The value of the filter
 * @returns 
 */
export default function Searchbar(options: {
  label?: string,
  placeholder?: string,
  handleQuery: Function,
  filters?: Array<filter>
}) {
  const [currentInputValue, setCurrentInputValue] = React.useState("");
  const [queryProperties, setQueryProperties] = React.useState<queryProperties>({
    query: "",
    filter: "",
    anchorElement: null,
    hasFilterBeenSelected: false,
  });

  React.useEffect(function handleQueryWithFilter() {
    if (queryProperties.hasFilterBeenSelected) options.handleQuery(queryProperties);
  }, [queryProperties.hasFilterBeenSelected]);
  
  return (
    <>
      {
        <Menu
          anchorEl={queryProperties.anchorElement}
          open={Boolean(queryProperties.anchorElement)}
          onClose={() => setQueryProperties({
            query: "",
            filter: "",
            anchorElement: null,
            hasFilterBeenSelected: false,
          })}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {
            options.filters?.map((filter: filter) => (
              <MenuItem
                onClick={() => setQueryProperties({
                  query: currentInputValue,
                  filter: filter.value,
                  anchorElement: null,
                  hasFilterBeenSelected: true
                })}
              >
                {filter.title}
              </MenuItem>
            ))
          }
        </Menu>
      }
      
      <Grid
        container
        spacing={1}
        direction="row"
        >
        <Grid item xs={10}>
          <TextField
            fullWidth
            id = "search-bar"
            label = {options.label || ""}
            placeholder = {options.placeholder || ""}
            onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setCurrentInputValue(event.target.value)}
            />
        </Grid>

        <Grid item xs={2}>
          <IconButton
            size="large"
            onClick={
              options.filters ? 
                (event) => setQueryProperties({
                  anchorElement: event.currentTarget,
                  query: "",
                  filter: "",
                  hasFilterBeenSelected: false,
                })
              : 
                options.handleQuery(currentInputValue)
            }
            >
            <SearchIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      </>
  );
};
