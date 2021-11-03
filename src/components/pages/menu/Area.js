import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import axios from "axios";
import './area.css';

// ----------------------------------------------------------------------

const CartImgStyle = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  background: "#059",
});

export default function Area() {
  const [areaData, setAreaData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
      })
      .then((response) => {
        console.log(response.data);
        setAreaData(response.data);
      })
  });

  return (
      <Container>
        <Grid container spacing={3}>
          {areaData.map((users) => {
            const {name ,email,phone,website,username} = users;
            return (
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ pt: 2, pb: 2 }}>
                  <Box sx={{ pt: "100%", position: "relative" }}>
                    <CartImgStyle
                      alt={name}
                      src={
                        `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`
                      }
                    />
                  </Box>
                  <Grid>
                    <Grid
                      item
                      xs={10}
                      sm={10}
                      md={10}
                      sx={{ pl: 2, py: 2 }}
                    >
                        <Typography variant="subtitle2" noWrap>
                          {name}
                        </Typography>
                        <Typography variant="body2" noWrap>
                        <AiIcons.AiOutlineMail />&nbsp;&nbsp;{email}
                        </Typography>
                        <Typography variant="body2" noWrap>
                        <AiIcons.AiOutlinePhone />&nbsp;&nbsp;{phone}
                        </Typography>
                        <Typography variant="body2" noWrap>
                        <GiIcons.GiWorld />&nbsp;&nbsp;{website}
                        </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
  );
}
