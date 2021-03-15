import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./Styleproject.css";

import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // flexWrap: "wrap",
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(3),
    padding: "10px",
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    // width: "50ch",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // backgroundColor: "#dff9fb",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const [values, setValues] = React.useState({});

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} className="msgContainer">
        <Grid container>
          <Grid item xs={12} sm={5}>
            <div style={{ color: "#130f40" }}>
              <div data-aos="fade-right">
                {" "}
                <strong className="send_a_message_btn">
                  Send a <br /> <u> Message. </u>
                </strong>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={7}>
            <div className="sendmsginput">
              <OutlinedInput
                id="outlined-adornment-weight"
                onChange={handleChange}
                aria-describedby="outlined-weight-helper-text"
                placeholder="email"
                style={{
                  backgroundColor: "#0e102c",
                  color: "#d4ffe4",
                  marginBottom: "2rem",
                }}
                fullWidth
              />
              <OutlinedInput
                id="outlined-adornment-weight"
                onChange={handleChange("weight")}
                aria-describedby="outlined-weight-helper-text"
                style={{
                  backgroundColor: "#0e102c",
                  color: "#d4ffe4",
                  marginBottom: "2rem",
                }}
                placeholder="Title"
                labelWidth={0}
                fullWidth
              />
              <OutlinedInput
                id="outlined-adornment-weight"
                value={values.weight}
                multiline
                rows={4}
                onChange={handleChange("weight")}
                style={{
                  backgroundColor: "#0e102c",
                  color: "#d4ffe4",
                  marginBottom: "2rem",
                }}
                placeholder="Message"
                labelWidth={0}
                fullWidth
              />
              <span>
                <input type="submit" className="btnsubmit" value="SUBMIT" />
              </span>
            </div>

            {/* </FormControl> */}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
