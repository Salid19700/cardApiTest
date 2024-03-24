import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function LeftBox({titlee, descrip}) {
  return (
    <Box
      height={400}
      width={500}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      <Typography variant="h2" gutterBottom>
        {titlee}
      </Typography>
      <Typography variant="p" gutterBottom>
        {descrip}
      </Typography>
    </Box>
  );
}
