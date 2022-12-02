import "./App.css";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=b119R_GedAUgNQzACbrG92gqz7-zbCTBGeyknM1H06g&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  };

  return (
    <>
      <Box width="50%" marginLeft={40} marginTop={4} height="100vh">
        <Box display="flex" flexDirection="row" width="100%">
          <TextField
            label="Search"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button variant="text" onClick={fetchImages}>
            Search
          </Button>
        </Box>
        <Box>
          {results.map((item) => {
            return <img src={item.urls.regular} alt="images" />;
          })}
        </Box>
      </Box>
    </>
  );
}

export default App;
