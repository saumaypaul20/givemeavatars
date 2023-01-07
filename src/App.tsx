import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import "./App.css";
import AvatarComp from "./components/AvatarComp/AvatarComp";
import { generateRandomStyle } from "./utils/data";
import CssBaseline from "@mui/joy/CssBaseline";
import { Sheet, Typography } from "@mui/joy";

 

function App() {
  const [dataSet, setDataSet] = useState<any[]>([]);
  console.log("🚀 ~ file: App.tsx ~ line 11 ~ App ~ dataSet", dataSet);
  const [count, setCount] = useState(1);
  const arrayNumber = 16;
  useEffect(() => {
    setDataSet(
      Array.from({ length: arrayNumber }, () => {
        return { ...generateRandomStyle() };
      })
    );
  }, []);

  const loadMore = () => {
    const newItems = Array.from({ length: arrayNumber }, () => {
      return { ...generateRandomStyle() };
    });
    setDataSet([...dataSet, ...newItems]);
    setCount(count + 1);
  };

  return (
    <CssBaseline>
      <Sheet
        sx={{
          mx: "auto", // margin left & right
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          boxShadow: "md",
          background:
            "linear-gradient(90deg, rgba(255,181,7,1) 0%, rgba(255,89,0,1) 45%, rgba(166,121,255,1) 100%)",
          textAlign: "center",
        }}
        variant="outlined"
      >
        <Typography
          // className="nanoseconds_text"
          level="h1"
          component="h1"
          textColor="white"
          sx={(theme) => theme.typography.display1}
        >
          Give Me Avatar!
        </Typography>
        <Typography
          level="h5"
          component="h1"
          textColor="white"
          sx={{fontStyle:"italic" , pb:5, fontSize:22, fontFamily:""}}
        >
          A free online random avatar generator for making beautiful personal avatar within seconds   
        </Typography>

        <div className="App">
          <div>
            {dataSet.map((i, idx) => {
              return (
                <AvatarComp
                  key={idx.toString()}
                  index={idx.toString()}
                  style={{ width: 200, height: 200, padding: "30px" }}
                  {...i}
                />
              );
            })}
          </div>
          <Button
            color="neutral"
            size="lg"
            variant="outlined"
            onClick={() => loadMore()}
            sx={{ color: "white", fontSize: 20, my: 4 }}
          >
            Load More
          </Button>
        </div>
      </Sheet>
    </CssBaseline>
  );
}

export default App;
