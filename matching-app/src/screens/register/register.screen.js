import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import {
    TextField,
    Paper,
    Container,
    Button,
    Typography,
    CircularProgress
} from '@material-ui/core';

// firebase
import {
    auth,
    fs,
} from "../../libraries/firebase/firebase";

// import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
// import { Button } from "@material-ui/core";
// import Typography from '@material-ui/core/Typography';
// import CircularProgress from "@material-ui/core/CircularProgress";
// //  component
// import WorkshopComponent from "./components/workshop.component";
// import OverviewWorkshop from "./components/overviewWorkshop.component";

// firebase
// import { auth } from "../../config/firebase";
// import { fs } from "../../config/firebase";

// // workshop mockup
// const _workshops = [
//     {
//         "title": "Yoga indio",
//         "teacher": "Daniela Parra",
//         "description": "Unete a nuestras clases de yoga, para hacer ejercicios y sacarte el estrés que tienes dentro",
//         "image": "https://images.yogaanytime.com/2017/12/13/large_sarah_170825_YA13140_content-19948.jpg?width=768",
//         "teacherMobileNumber": "+56937827142",
//         "category": "Deportes",
//         "schedule": [
//             "Lunes 8:00 a 9:30",
//             "Miercoles 8:00 a 9:30",
//         ]
//     },

//     {
//         "title": "Baile entretenido",
//         "teacher": "Rodrigo Días",
//         "description": "Unete a nuestras clases unicas de baile entretenido",
//         "image": "https://statics-cuidateplus.marca.com/sites/default/files/images/zumba.jpg",
//         "teacherMobileNumber": "+56937827142",
//         "category": "Deportes",
//         "schedule": [
//             "Lunes 8:00 a 9:30",
//             "Miercoles 8:00 a 9:30",
//         ]
//     },

//     {
//         "title": "Clases de guitarra",
//         "teacher": "Rodrigo Valencia",
//         "description": "Unete a nuestras clases unicas de guitarra",
//         "image": "https://img.fotocommunity.com/guitar-man-ff55a084-e878-4372-a9a0-ee771a3a0fdc.jpg?height=1080",
//         "teacherMobileNumber": "+56937827142",
//         "category": "Musica",
//         "schedule": [
//             "Lunes 8:00 a 9:30",
//             "Miercoles 8:00 a 9:30",
//         ]
//     }

// ];

class Register extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            loading: false,
            email: "",
            password: "",
            // workshopsByCategory: null,
            // email: "",
            // password: "",
        }

        this.on_register = this.on_register.bind(this);

    }

    on_register() {

        const email = this.state.email.trim();
        const password = this.state.password;

        auth.createUserWithEmailAndPassword(email, password)

            .then(res => {

                console.log(res.user.uid);

                // create new user in database
                const newUser = {
                    email: email,
                    name: this.state.name,
                    linkToProfile: this.state.linkToProfile,
                    likesToUsers: [],
                    likesFromUsers: [],
                    matches: [],
                };

                // create new user 
                fs.collection('users').doc(res.user.uid).set(newUser).then(ref => {

                    // console.log("Added document with ID: ", ref.id)

                    // alert("Registered successfully!");
                    alert("Registro exitoso");

                    this.props.history.push('/');

                });
                

            })
            .catch(e => {
                alert(e);
            })
    }

    componentDidMount() {

        // // check if user is logged
        // auth.onAuthStateChanged((user) => {

        //     if (user) {

        //         // console.log("user logged");

        //         this.props.history.push('/home');

        //     }

        //     else {

        //         // console.log("user no logged");

        //         // this.props.history.push('/login/');
        //     }

        // });


    }

    render() {

        // return method
        return (

            <Container
                style={{
                    // margin: 20,
                    // padding: 20,
                    // backgroundColor: "red",
                }}
            >

                {
                    !this.state.loading

                        ?

                        <Container>

                            {/* title */}
                            <Paper
                                style={{
                                    margin: 15,
                                    padding: 5,
                                    display: "flex",
                                    flexDirection: "column",
                                }}

                                elevation={5}
                            >

                                <Typography variant="h6" component="h6">

                                    Registrate

                                </Typography>

                                <Typography variant="body2" component="p">

                                    Ingresa tu información

                                </Typography>

                                <TextField
                                    id="standard-uncontrolled"
                                    label = "Nombre"
                                    margin="normal"
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                    value={this.state.name}
                                />

                                <TextField
                                    id="standard-uncontrolled"
                                    label="Link a un perfil que uses normalmente"
                                    margin="normal"
                                    helperText = "Puede ser el link a tu Instagram o Whatsapp, ya que si haces match, la persona te hablará a este perfil"
                                    onChange={(e) => this.setState({ linkToProfile: e.target.value })}
                                    value={this.state.linkToProfile}
                                />

                                <TextField
                                    id="standard-uncontrolled"
                                    label="Email"
                                    margin="normal"
                                    onChange={(e) => this.setState({ email: e.target.value })}
                                    value={this.state.email}
                                />

                                <TextField
                                    id="standard-uncontrolled"
                                    label="Contraseña para esta plataforma"
                                    type="password"
                                    // defaultValue="Correo electrónico"
                                    margin="normal"
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    value={this.state.password}
                                />


                                {/* register */}
                                <Button align="center" variant="contained" color="secondary" onClick={this.on_register}>
                                    Registrar
                                </Button>

                            </Paper>

                            {/* box to message of register
                            <Paper
                                style = {{
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                We are currently testing this tool to keep track of your help to get a better world! If you want to register, please type your email in the next form and we will send you more information!

                                <Button
                                    align="center" variant="contained" color="primary"
                                    onClick = {() => {

                                        // redirect
                                        window.location.replace("https://forms.gle/1aVeXmFEzNE7b2Sv8");
                                    }}
                                >
                                    Request access to #OneGarbagePerDay
                                </Button>
                            </Paper> */}

                        </Container>

                        :

                        <CircularProgress />

                }

            </Container>
        );

    }

}

export default Register;