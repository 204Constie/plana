import { ReactElement } from "react";
import Box from '@mui/material/Box';
import { ChartBuilder } from "../ChartBuilder";

function Chart(): ReactElement {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ChartBuilder />
    </Box>
  )
}

export default Chart;
