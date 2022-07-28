import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Formik } from "formik";
import Button from "@mui/material/Button";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from "@mui/material/Modal";
import Router from "next/router";
import * as Yup from "yup";

import { countryList } from "../../constants/countries";
import { heardAboutUs } from "../../constants/heardAboutus";
import styles from "./application.module.css";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const validationSchema = Yup.object().shape({
  v: Yup.string().required(),
});

const Application = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const onSubmit = async (req) => {
    if (video) {
      let formData = new FormData();

      function getUUID() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
        );
      }

      formData.append("api_key", "652669247923232");
      formData.append("file", video);
      formData.append("public_id", getUUID());
      formData.append("upload_preset", "ms6rua0l");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      setLoading(true);
      try {
        const result = await axios.post(
          "https://api.cloudinary.com/v1_1/erbilmc/upload",
          formData,
          {
            onUploadProgress: (progressEvent) =>
              setProgress(progressEvent.loaded / progressEvent.total),
            // setProgress(
            //   Math.round(progressEvent.loaded / progressEvent.total)
            // ),
          }
        );
        req.video = result.data.secure_url;
        try {
          const res = await axios.post(
            "https://sheet.best/api/sheets/7c775446-e23f-4f09-9afc-75ac596b0ae6",
            req
          );
          setLoading(false);
          Router.push({
            pathname: "/cnn-academy/success",
          });
        } catch (e) {
          console.log(e);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const containerStyles = {
    height: 20,
    width: "50%",
    backgroundColor: "rgb(224 224 222 / 30%)",
    borderRadius: 10,
    margin: 10,
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress * 100}%`,
    backgroundColor: "#df2127",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <>
      <Modal
        open={loading}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
          <div style={containerStyles}>
            <div style={fillerStyles}>
              <span style={labelStyles}>{`${Math.round(
                progress * 100
              )}%`}</span>
            </div>
          </div>
        </Box>
      </Modal>
      <div className={styles.application}>
        <nav className={styles.application__nav}>
          <div className={styles.application__imageContainer}>
            <Image
              src={"/images/academy_logo_light_big.png"}
              alt="Tunisia"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <Link href={"/cnn-academy/en"}>
            <a
              style={{
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Home
            </a>
          </Link>
        </nav>
        <div className={styles.application__wrapper}>
          <Grid className={styles.application__container} container>
            <h2 className="heading-2">Application Form - CNN Academy Erbil</h2>
            <p className="paragraph">
              Through online workshops and webinar sessions with senior CNN
              journalists, you will learn how CNN gathers information, verifies
              sources and produces content for its multiple platforms. Submit
              your application now to get the opportunity to boost your
              journalism career and join CNN Academy.
            </p>
            <p className="paragraph">
              Submit your application now to get the opportunity to boost your
              journalism career and join CNN Academy.
            </p>
            <Formik
              initialValues={{
                forename: "",
                surname: "",
                dateOfBirth: null,
                email: "",
                phone_number: "",
                nationality: "Iraq",
                countryofResidence: "Iraq",
                arabicLanguageSkill: "",
                kurdishLanguageSkill: "",
                englishLanguageSkill: "",
                address: "",
                heardAboutUs: "",
                videoFilmingSkills: "",
                videoEditingSkills: "",
                blurb: "",
                v: "",
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({
                values,
                handleChange,
                setFieldValue,
                handleSubmit,
                errors,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Grid
                    alignItems="center"
                    container
                    // spacing={2}
                    style={{ marginTop: 20 }}
                    gap={2}
                  >
                    <Grid xs={12} md={5}>
                      <TextField
                        required
                        id="Forename"
                        name="forename"
                        value={values.forename}
                        onChange={handleChange}
                        label="Forename"
                        fullWidth
                      />
                    </Grid>
                    <Grid xs={12} md={5}>
                      <TextField
                        fullWidth
                        required
                        value={values.surname}
                        onChange={handleChange}
                        name="surname"
                        id="Surname"
                        label="Surname"
                      />
                    </Grid>
                    <Grid xs={12} md={5}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          className={styles.width}
                          label="Date Of Birth"
                          inputFormat="MM/dd/yyyy"
                          value={values.dateOfBirth}
                          name={values.dateOfBirth}
                          onChange={(e) => setFieldValue("dateOfBirth", e)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid xs={12} md={5}>
                      <TextField
                        fullWidth
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                        id="email"
                        label="email"
                      />
                    </Grid>
                    <Grid xs={12} md={5}>
                      <TextField
                        fullWidth
                        name="phone_number"
                        value={values.phone_number}
                        onChange={handleChange}
                        required
                        id="phone_number"
                        label="Phone Number"
                      />
                    </Grid>
                    <Grid xs={12} md={5}>
                      <FormControl fullWidth required>
                        <InputLabel id="Nationality">Nationality</InputLabel>
                        <Select
                          labelId="Nationality"
                          id="Nationality"
                          name="nationality"
                          label="AgNationalitye"
                          value={values.nationality}
                          onChange={handleChange}
                          fullWidth
                          required
                        >
                          {countryList?.map((country) => (
                            <MenuItem key={country} value={country}>
                              {country}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid xs={12} md={5}>
                      <TextField
                        fullWidth
                        required
                        defaultValue={"Iraq"}
                        disabled
                        name="countryofResidence"
                        id="CountryofResidence"
                        label="Country of Residence"
                      />
                    </Grid>
                    <Grid xs={12} md={5}>
                      <TextField
                        fullWidth
                        required
                        name="address"
                        id="Address"
                        onChange={handleChange}
                        label="Address (Street, City)"
                      />
                    </Grid>
                    <Grid xs={12} md={10}>
                      <FormControl fullWidth required>
                        <InputLabel id="heardAboutUse">
                          How Did You Hear About CNN Academy Erbil?
                        </InputLabel>
                        <Select
                          labelId="heardAboutUs"
                          id="heardAboutUs"
                          name="heardAboutUs"
                          label="How Did You Hear About CNN Academy Erbil?"
                          onChange={handleChange}
                          fullWidth
                          required
                        >
                          {heardAboutUs?.map((option) => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid xs={12} md={12} marginTop={5}>
                      <FormControl required>
                        <FormLabel id="Language Skills">
                          Language Skills
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="arabicLanguageSkill"
                          onChange={handleChange}
                        >
                          <p style={{ marginRight: 30 }}>Arabic</p>
                          <FormControlLabel
                            value="Beginner"
                            control={<Radio />}
                            label="Beginner"
                          />
                          <FormControlLabel
                            value="Intermediate"
                            control={<Radio />}
                            label="Intermediate"
                          />
                          <FormControlLabel
                            value="Expert"
                            control={<Radio />}
                            label="Expert"
                          />
                        </RadioGroup>

                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="kurdishLanguageSkill"
                          onChange={handleChange}
                        >
                          <p style={{ marginRight: 30 }}>Kurdish</p>
                          <FormControlLabel
                            value="Beginner"
                            control={<Radio />}
                            label="Beginner"
                          />
                          <FormControlLabel
                            value="Intermediate"
                            control={<Radio />}
                            label="Intermediate"
                          />
                          <FormControlLabel
                            value="Expert"
                            control={<Radio />}
                            label="Expert"
                          />
                        </RadioGroup>

                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="englishLanguageSkill"
                          onChange={handleChange}
                        >
                          <p style={{ marginRight: 30 }}>English</p>
                          <FormControlLabel
                            value="Beginner"
                            control={<Radio />}
                            label="Beginner"
                          />
                          <FormControlLabel
                            value="Intermediate"
                            control={<Radio />}
                            label="Intermediate"
                          />
                          <FormControlLabel
                            value="Expert"
                            control={<Radio />}
                            label="Expert"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid xs={12} md={5} marginTop={5}>
                      <FormControl required>
                        <FormLabel id="Language Skills">
                          Video Filming Skills
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="VideoFilmingSkills"
                          name="videoFilmingSkills"
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="Beginner"
                            control={<Radio />}
                            label="Beginner"
                          />
                          <FormControlLabel
                            value="Intermediate"
                            control={<Radio />}
                            label="Intermediate"
                          />
                          <FormControlLabel
                            value="Expert"
                            control={<Radio />}
                            label="Expert"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid xs={12} md={5} marginTop={5}>
                      <FormControl required>
                        <FormLabel id="Language Skills">
                          Video Editing Skills
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby="VideoEditingSkills"
                          name="videoEditingSkills"
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="Beginner"
                            control={<Radio />}
                            label="Beginner"
                          />
                          <FormControlLabel
                            value="Intermediate"
                            control={<Radio />}
                            label="Intermediate"
                          />
                          <FormControlLabel
                            value="Expert"
                            control={<Radio />}
                            label="Expert"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid xs={12} md={12} style={{ marginTop: 20 }}>
                      <FormControl required fullWidth>
                        <FormLabel
                          id="Language Skills"
                          style={{ fontWeight: "bold" }}
                        >
                          Blurb
                        </FormLabel>
                        <p className="paragraph">
                          Please tell us about your motivation for pursuing this
                          program and how you aim to apply the learnings in your
                          career going forward. (Maximum 500 words)
                        </p>
                        <TextField
                          fullWidth
                          required
                          name="blurb"
                          onChange={handleChange}
                          id="Blurb"
                          label="Blurb"
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Grid xs={12} md={12} marginTop={3} position="relative">
                    <p className="paragraph">
                      Please upload a video (maximum 1:30 minutes) introducing
                      yourself and your work so far. Feel free to include
                      examples and make it as creative as you want.
                    </p>
                    {video ? (
                      <>
                        <DeleteOutlinedIcon
                          onClick={() => setVideo(null)}
                          style={{
                            position: "absolute",
                            top: 10,
                            right: 10,
                            cursor: "pointer",
                            zIndex: 100,
                          }}
                          color="error"
                        />
                        <video
                          src={URL.createObjectURL(video)}
                          width={"100%"}
                          controls
                          height={300}
                        />
                      </>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          component="label"
                        >
                          Upload File
                          <input
                            type="file"
                            hidden
                            name="v"
                            accept="video/mp4,video/x-m4v,video/*"
                            onChange={(e) => {
                              handleChange(e);
                              setVideo(e.target.files[0]);
                            }}
                          />
                        </Button>
                        <div style={{ marginTop: 7, color: "#df2127" }}>
                          {errors.v && "Please upload the video"}
                        </div>
                      </div>
                    )}
                  </Grid>
                  <Grid xs={12} md={5} marginTop={3}>
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  </Grid>
                </form>
              )}
            </Formik>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Application;
