import * as React from "react";
import Box from "@mui/material/Box";

export function RightBox() {
  return (
    <Box
      height={300}
      width={300}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "1px solid grey" }}
    >
      <img style={{objectFit: "cover"}} src="https://picsum.photos/200/300" alt="not found" />
    </Box>
  );
}