import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import {   CircularProgress } from '@material-ui/core';
import SavedPatientDetails from '../SavedPatientDetails/SavedPatientDetails'

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 600,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	root: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(0),
		},
	},
}));
export default function AddressForm() {

	const classes = useStyles();
	const [patientfirstname, setpatientfirstname] = useState("");
	const [patientlastname, setpatientlastname] = useState("");
	const [loader, setloader] = useState(0);
	const [gender, setgender] = useState("Male");
	const [age, setage] = useState("");
	const [phonenumber, setphonenumber] = useState("");
	const [pan, setpan] = useState("");
	const [bmi, setbmi] = useState("");
	const [pregnancies, setpregnancies] = useState("");
	const [email, setemail] = useState("");
	const [glucose, setglucose] = useState("");
	const [pressure, setpressure] = useState("");
	const [skin, setskin] = useState("");
	const [insulin, setinsulin] = useState("");
	const [purpose, setpurpose] = useState("");
	const [address, setaddress] = useState("");
	const [city, setcity] = useState("");
	const [state, setstate] = useState("");
	const [zip, setzip] = useState("");
	const [country, setcountry] = useState("");
	const [open, setOpen] = React.useState(false);
	const [mapEncrypt, setmapEncrypt] = useState("Waiting for details");


	const handleClicktest = () => {
		setloader(0)
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};



	const handleChange1 = event => {

		setpatientfirstname(event.target.value);


	}
	const handleChange2 = event => {
		setpatientlastname(event.target.value);

	}

	const handleChange3 = event => {
		setgender(event.target.value)
	}

	const handleChange4 = event => {

		if (event.target.value.length <= 2) {
			setage(event.target.value);
		}



	}

	const handleChange5 = event => {
		setphonenumber(event.target.value);

	}

	const handleChange6 = event => {
		setpan(event.target.value);

	}

	const handleChange7 = event => {
		setbmi(event.target.value);

	}

	const handleChange8 = event => {
		setpregnancies(event.target.value);

	}

	const handleChange9 = event => {
		setemail(event.target.value);

	}

	const handleChange10 = event => {
		setpurpose(event.target.value);

	}

	const handleChange11 = event => {
		setaddress(event.target.value);

	}

	const handleChange12 = event => {
		setcity(event.target.value);

	}

	const handleChange13 = event => {
		setstate(event.target.value);

	}

	const handleChange14 = event => {

		setzip(event.target.value);


	}

	const handleChange15 = event => {
		setcountry(event.target.value);

	}

	const handleChange16 = event => {
		setglucose(event.target.value);

	}

	const handleChange17 = event => {
		setpressure(event.target.value);

	}

	const handleChange18 = event => {
		setskin(event.target.value);

	}

	const handleChange19 = event => {
		setinsulin(event.target.value);

	}

	async function submittt() {



console.log ("sdfkjdshf")
	
	
	}



	



	

	function submitChanges(userfinaldata) {

		console.log ("sdkfjhdsf")



	}


	if (localStorage.getItem("login") == 0){



	return (

		// <center>
		<div style={{ alignItems: 'center', marginLeft: "10%", marginRight: "10%", marginTop: 40 }} >

			<div className={classes.root}>

				<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
					<Alert onClose={handleClose} severity="success">
						Patient Given Informations are save successfully !!!!!!!!!!!!!!!!!!
</Alert>
				</Snackbar>

			</div>
			<React.Fragment>


			


				<h2 style={{ textAlign: 'center', marginTop: 20 }}>Patient Registration Form</h2>

				<Grid container spacing={3} style={{ marginTop: 20 }}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Patient FirstName"
							name="Patient FirstName"
							label="Patient FirstName"
							fullWidth
							autoComplete="given-name"
							variant="outlined"
							value={patientfirstname}
							onChange={handleChange1}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Patient LastName"
							name="Patient LastName"
							label="Patient LastName"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={patientlastname}
							onChange={handleChange2}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>

						<FormControl variant="outlined" fullWidth >
							<InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
							<Select
								inputProps={{
									id: "deviceSource-native-select",
									name: "deviceSource"
								}}
								//   labelId="demo-simple-select-outlined-label"
								//   id="demo-simple-select-outlined"
								value={gender}
								onChange={handleChange3}
								label="Gender"
								MenuProps={{
									anchorOrigin: {
										vertical: "bottom",
										horizontal: "left"
									},
									getContentAnchorEl: null
								}}
								required
							>
								<MenuItem value={"Male"} >Male</MenuItem>
								<MenuItem value={"Female"}>Female</MenuItem>
								<MenuItem value={"Others"}>Others</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Age"
							name="Age"
							label="Age"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={age}
							onChange={handleChange4}
							type="number"
							inputProps={{
								maxLength: 3,
							}}
						/>
					</Grid>



					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Phone Number"
							name="Phone Number"
							label="Phone Number"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							inputProps={{
								maxLength: 10,
							}}
							type="number"
							value={phonenumber}
							onChange={handleChange5}

						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="E-Mail Address"
							name="E-Mail Address"
							label="E-Mail Address"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={email}
							onChange={handleChange9}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="PAN Card Number"
							name="PAN Card Number"
							label="PAN Card Number"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							type="number"

							inputProps={{
								maxLength: 10,
							}}
							value={pan}
							onChange={handleChange6}

						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Pregnancies"
							name="Pregnancies"
							label="Pregnancies"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							inputProps={{
								maxLength: 10,
							}}
							type="number"
							value={pregnancies}
							onChange={handleChange8}

						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="BMI"
							name="BMI"
							label="BMI"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							inputProps={{
								maxLength: 12,
							}}
							value={bmi}
							onChange={handleChange7}

						/>
					</Grid>

						

				

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Blood Glucose Level"
							name="Blood Glucose Level"
							label="Blood Glucose Level"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={glucose}
							onChange={handleChange16}
							type="number"

						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Blood Pressure Level"
							name="Blood Pressure Level"
							label="Blood Pressure Level"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={pressure}
							onChange={handleChange17}
							type="number"


						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Skin Thickness"
							name="Skin Thickness"
							label="Skin Thickness"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={skin}
							onChange={handleChange18}
							type="number"

						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Insulin"
							name="Insulin"
							label="Insulin"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={insulin}
							onChange={handleChange19}
							type="number"

						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="Purpose For Visit"
							name="Purpose For Visit"
							label="Purpose For Visit"
							fullWidth
							autoComplete="family-name"
							variant="outlined"
							value={purpose}
							onChange={handleChange10}
						/>
					</Grid>



					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="address1"
							label="Address"
							fullWidth
							autoComplete="shipping address-line1"
							variant="outlined"
							value={address}
							onChange={handleChange11}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<TextField
							required
							label="City"
							fullWidth
							variant="outlined"
							value={city}
							onChange={handleChange12}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField label="State/Province/Region" fullWidth variant="outlined"
							value={state}
							onChange={handleChange13}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							name="zip"
							label="Zip / Postal code"
							fullWidth
							variant="outlined"
							value={zip}
							onChange={handleChange14}
							inputProps={{
								maxLength: 6,
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							autoComplete="shipping country"
							variant="outlined"
							value={country}
							onChange={handleChange15}

						/>
					</Grid>
				</Grid>
			</React.Fragment>


			{

loader == 1 ?(
	<Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
	<CircularProgress style={{color:'red'}} size={60} />
  </Box>


):(
	null
)


}

			<center>
				<div style={{ marginTop: "5%" }}>
					<Button variant="contained" color="primary" style={{
					}}
						onClick={() => { submittt() }}
					>
						SAVE DETAILS
					</Button>
				</div>

				<h4 style={{textAlign:'center',fontSize:13,marginTop:10,display:'block'}}>Encrytped Value is :  {mapEncrypt}</h4>




			</center>
		</div>
	);

				}

				else {

					return(

						<SavedPatientDetails/>


					)

					
				}
}
