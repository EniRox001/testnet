import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import ChildButton from "./childButton";

export default function Home() {
    const [count, setCount] = useState(0);

    const handleCountChange = () => {
        setCount(count + 1);
    }
    
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100vh'
          }}>
            <Box sx={{
              height: '50vh',
              width: '50%',
              borderRadius: '10px',
            }}>
              <Typography>The current number is: {count}</Typography>
              <Button variant='contained' onClick={handleCountChange}>Add Count</Button>
              <ChildButton count={count} changeCount={handleCountChange}/>
            </Box>
        </Box>
    )
}