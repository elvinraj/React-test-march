import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { autocompleteClasses } from "@mui/material/Autocomplete";
import CheckIcon from "@mui/icons-material/Check";

import Popper from "@mui/material/Popper";

export default function CustonSelect({
  searchOff,
  dropdownPosition,
  showCheckmark,
}) {
  const [value, setValue] = React.useState(null);
  const [isSearchEnabled, setSearchEnabled] = React.useState(true);
  const [isDropdownUp, setDropdownUp] = React.useState(false);

  const CustomPopper = (props) => (
    <Popper {...props} placement={dropdownPosition} />
  );

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        PopperComponent={CustomPopper}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            label=""
            inputProps={{
              ...params.inputProps,
              readOnly: searchOff,
            }}
          />
        )}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            {showCheckmark ? (
              <>
                {selected ? (
                  <CheckIcon fontSize="small" style={{ marginLeft: 0 }} />
                ) : (
                  <span style={{ marginLeft: 20 }} />
                )}
              </>
            ) : (
              <></>
            )}

            <span style={{ marginLeft: 10 }}>{option.label}</span>
          </li>
        )}
      />
    </div>
  );
}

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];
