import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Snackbar from '@mui/material/Snackbar';
import { useState } from "react";

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'right',
    })

    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({...state, open: false});
      };

    const handleFormSubmit = (values) => {
        console.log(values)
        setState({...state, open: true});
    }

    return (
        <Box m="20px">
            <Header title="CREATE PROFILE" subtitle="Create a New Profile"/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values, 
                    errors, 
                    touched, 
                    handleBlur, 
                    handleChange, 
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                            display="grid" 
                            gap="30px" 
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx= {{
                                //if it is a Mobile then it will take a hole span of line
                                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                            }}
                        >
                            <TextField
                                fullWidth
                    	        variant="filled"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact }
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}> 
                                Create New User
                            </Button>
                            <Snackbar
                                anchorOrigin={{ vertical, horizontal }}
                                open={open}
                                autoHideDuration={1000}
                                onClose={handleClose}
                                message="User Created"
                                key={vertical + horizontal}
                            />
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

//This will show the user which field needs to be filled inorder to successfuly create a profile
const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup
        .string()
        .email("invalid email")
        .required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid").required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
})

export default Form