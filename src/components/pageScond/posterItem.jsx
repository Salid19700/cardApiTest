import * as React from 'react';
import Box from '@mui/material/Box';
import { LeftBox } from './LeftBox';
import { RightBox } from './RightBox';
import { useParams } from 'react-router-dom';


export function PosterItem(){

   

    return(
        <Box
        height={500}
        width={"100%"}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
      >
        <LeftBox titlee={"slvguhrsg"} descrip={"doiubhdfob"}/>
        <RightBox />
        </Box>
    );
}