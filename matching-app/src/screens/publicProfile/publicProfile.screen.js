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


class PublicProfile extends React.Component {

    // constructor
    constructor(props) {

        // constructur of parent
        super(props);

        // initial states
        this.state = {
            loading: true,
            userName: "default",
            // workshopsByCategory: null,
            // garbagesPerDay: [],
            // email: "",
            // password: "",
        }
        
        this.likeToUser = this.likeToUser.bind(this);

    }

    componentDidMount() {

        
        // get user name
        fs.collection('users').doc(this.props.match.params.userId)
        .get().then(doc => {
            
            console.log("getting user name");
            console.log(doc.data());

            this.setState({
                loading: false,
                userName: doc.exists ? doc.data().name : "",
            });
            
        })
        .catch(er => {
            console.log(er);
        });

    }
    
    likeToUser() {
        
        // check if user is logged
        auth.onAuthStateChanged((user) => {
            
            if (!user) {
                
                console.log("user not logged");
                
                alert("You need an account (and login in) in our platform in order to 'give likes'");
                
                // this.props.history.push('/');
                
                // console.log("aosjid");
                
            }
            
            else {
                
                // if like user is different from logged user
                if (user.uid != this.props.match.params.userId) {

                    const loggedUserRef = fs.collection("users").doc(user.uid);
                    const likeUserRef = fs.collection("users").doc(this.props.match.params.userId);
                    
                    // get logged user
                    loggedUserRef.get()
                    .then(doc_ => {
                        
                        var loggedUser = doc_.data();
                        loggedUser["id"] = doc_.id;
                        
                        // check if like already exists
                        // if it does not exists
                        if (!loggedUser.likesToUsers.includes(this.props.match.params.userId)) {
                            
                            // add like to like user
                            loggedUser.likesToUsers.push(this.props.match.params.userId);
                            
                            // get user to give like
                            likeUserRef.get()
                            .then(doc => {
                                
                                var likeUser = doc.data();
                                likeUser["id"] = doc.id;
                                
                                // update likes of like user
                                if (!likeUser.likesFromUsers.includes(loggedUser.id)) {
                                    likeUser.likesFromUsers.push(loggedUser.id);
                                };
                                
                                // check if match already exists
                                if (likeUser.matches.includes(loggedUser.id) & loggedUser.matches.includes(likeUser.id)) {
                                    
                                    alert("You already did match! Check your profile in order to start to speak!");
                                    
                                }
                                
                                // if match does not exist yet
                                else {
                                    
                                    // check if users are both with likes (match)
                                    if (likeUser.likesToUsers.includes(loggedUser.id) & loggedUser.likesToUsers.includes(likeUser.id)) {
                                        // console.log("match");
                                        
                                        // create match
                                        likeUser.matches.push(loggedUser.id);
                                        loggedUser.matches.push(likeUser.id);
                                        
                                        // user message
                                        alert("Congratulations! You did match! Go to your profile and start talking!");
                                        
                                        // create notification in DB
                                        fs.collection("matches").add({

                                            user1: likeUser.id,
                                            user2: loggedUser.id,
                                            notified: false,
                                            // date: fs.FieldValue.serverTimestamp(),

                                        }).then(res => {

                                            // console.log("new notification")

                                            
                                        });
                                        
                                    }
                                    
                                    // do not match yet
                                    else {
                                        
                                        // usre message
                                        alert("Your like was saved, now you have to wait if the other person gives you like too! Good luck!");
                                        // console.log("other person don't like you");
                                        
                                    };
                                    
                                    
                                };
                                
                                // update users on BD
                                console.log("logged user updated: ", loggedUser);
                                console.log("like user updated: ", likeUser);

                                // update logged user
                                loggedUserRef.update(loggedUser)
                                .then(res => {
                                    console.log("logged user updated successfully");
                                })
                                .catch(er => {
                                    console.log(er);
                                });
                                
                                // update like user
                                likeUserRef.update(likeUser)
                                .then(res => {
                                    console.log("like user updated successfully");
                                })
                                .catch(er => {
                                    console.log(er);
                                });
                                
                            });
                            
                        }
                        
                        // if like already exists
                        else{
                            alert("You already liked this person. Must to wait until other person give you like!");
                        };
                        
                    });
                    
                }

                // it's the same user
                else {
                    alert("You can not do like to yourself");
                };

            };

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
                                <Typography variant="h6" component="h6" style={{ textAlign: "center", }}>

                                    Hi! This is {this.state.userName}

                                </Typography>

                                <Typography variant="p" component="body2" style={{ textAlign: "center", }}>

                                    You can give me "like me" if I like to you :) If I gave you like too, so we will do match :) and we will be notified, otherwise I will never know you gave me like :), so don't worry about it!

                                </Typography>

                                {/* like button */}
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    onClick={() => {
                                        // alert("If I give you like too, we will do match, otherwise I will never know you gave me like :)")
                                        this.likeToUser();
                                    }}
                                >
                                    Like me
                                </Button>

                                <Typography variant="p" component="body2" style={{ textAlign: "center", }}>

                                    If you are not logged, click here:

                                </Typography>
                                
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        // alert("Go to register");
                                        // this.s
                                        this.props.history.push('/');
                                    }}
                                >
                                    Sign in
                                </Button>

                            </Paper>

                        </Container>

                        :

                        <CircularProgress />

                }

            </Container>
        );

    }

}

export default PublicProfile;