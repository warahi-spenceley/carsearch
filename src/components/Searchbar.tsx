import React from "react";
import {
  IconButton,
  TextField,
  Grid,
  Menu,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

/**
 * 
 * @param options The options.
 * @param options.label The search bar label.
 * @param options.placeholder The placeholder.
 * @param options.handleQuery A function to handle the query. This will be passed the current input value from this component and can be used like so:
 * <Searchbar
 *   handleQuery = {(input) => console.log(input)}
 * />
 * 
 * @returns 
 */
export default function Searchbar(options: {
  label: string,
  placeholder: string,
  handleQuery: Function
}) {
  const [input, setInput] = React.useState("");

  return (
    <Grid
      container
      spacing={1}
      direction="row"
    >
      <Grid item xs={10}>
        <TextField
          fullWidth
          id = "search-bar"
          label = {options.label}
          placeholder = {options.placeholder}
          onChange = {(event: any) => setInput(event.target.value)}
        />
      </Grid>

      <Grid item xs={2}>
        <IconButton
          size="large"
          onClick={() => options.handleQuery(input)}
        >
          <SearchIcon fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
