import React from "react";

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// material ui
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Button, Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CircularProgress from "@material-ui/core/CircularProgress";
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// import LiveTv from '@material-ui/icons/LiveTv';

import {
    fs,
    auth,
} from "../../libraries/firebase/firebase";


// //  component
// import WorkshopComponent from "./components/workshop.component";
// import OverviewWorkshop from "./components/overviewWorkshop.component";

// firebase
// import { auth } from "../../config/firebase";
// import { fs } from "../../config/firebase";

// fake data
const matchesWithUsers = [
    {
        "userName": "Emma Watson",
        "linkToUser": "https://www.instagram.com/emmawatson/",
    },
    {
        "userName": "person 2",
        "linkToUser": "https://www.google.com",
    },
];

class UserDashboard extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            loading: true,
            matchesWithUsers: []
            // workshopsByCategory: null,
            // garbagesPerDay: [],
            // email: "",
            // password: "",
        }

    }

    logout() {
        auth.signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });

    }

    componentDidMount() {

        // // temp
        // this.setState({
        //     loading: false,
        //     matchesWithUsers: matchesWithUsers,
        // });

        // check if user is logged
        auth.onAuthStateChanged((user) => {

            if (!user) {

                // console.log("user not logged");

                this.props.history.push('/');

                // console.log("aosjid");

            }

            else {

                // console.log("user: ", user);

                // get number of garbage
                fs.collection('users').doc(user.uid).
                    get().then(doc_ => {

                        // console.log("doc: ", doc_);

                        // console.log("doc_ data(): ", doc_.data());

                        if (doc_.exists) {

                            var matchesWithUsers = [];
    
                            if (doc_.data().matches.length > 0){
    
                                // get users data
                                fs.collection("users")
                                .where("__name__", "in", doc_.data().matches)
                                .get().then(snapshotquery => {
        
                                    // iterate over each item
                                    snapshotquery.forEach(doc => {
                                    
                                        // console.log("response: ",doc.data());
        
                                        matchesWithUsers.push(doc.data());
        
                                    });
                                    
                                    console.log(matchesWithUsers);
    
                                    // // update state
                                    this.setState({
            
                                        matchesWithUsers: matchesWithUsers,
                                        loading: false,
                                        userId: user.uid,
            
                                    });
        
                                });
    
                            }
    
                            else {
    
                                // // update state
                                this.setState({
        
                                    loading: false,
                                    userId: user.uid,
        
                                });
    
                            }

                        }

                        else {

                            // // update state
                            this.setState({

                                loading: false,
                                userId: user.uid,

                            });

                        }

                    });


            }

        });

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
                                }}

                                elevation={5}
                            >   

                                <Button variant="contained" color="primary"
                                    onClick={() => this.props.history.push("/publicProfile/" + this.state.userId)}
                                >
                                    See my public profile
                                </Button>

                                <Button variant="contained" color="primary"
                                    onClick={() => this.logout()}
                                >
                                    Logout
                                </Button>
                                
                                <Typography variant="h6" component="h6" style={{ textAlign: "center", }}>

                                    Your matches
 
                                </Typography>

                                {/* collection of likes */}

                                {
                                    this.state.matchesWithUsers.map((item) => {

                                        return (
                                            <Box>

                                                <Typography variant="body2">
                                                    
                                                    {item.name} 

                                                </Typography>

                                                <Typography variant="body2"
                                                    onClick = {
                                                        () => {
                                                            // alert("aisod");
                                                            // console.log(this);
                                                            // this.window.props.location.href(item.linkToUser)
                                                            window.open(item.linkToProfile);
                                                        }
                                                    }
                                                >

                                                    Let's talk!

                                                </Typography>

                                                {/* <img
                                                    width={200}
                                                    height={200}
                                                    src={item.image}
                                                /> */}

                                            </Box>
                                        )
                                    })
                                }

                            </Paper>

                        </Container>

                        :

                        <CircularProgress />

                }

            </Container>
        );

    }

}

export default UserDashboard;