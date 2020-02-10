import React from "react";
import axios from "axios";

export class Services {
    constructor(that) {
        this.that = that;
        this.BASE_URL = "https://hashmart.nyumbapap.com";
        this.AUTH = {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Access-Control-Allow-Origin": "*"
        };
        this.CONFIG = {headers: this.AUTH};
    }
    getProductsMainMenu = e =>{
        return axios.get(`${this.BASE_URL}/api/v1/hashmart/get-products-main-menue`, this.CONFIG);
    };

    getProducts = () =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-products-main-menue`, this.CONFIG).then(resp=>{
            this.that.setState({fetchedProducts: resp.data});
        }).catch(err=>{this.__handleCatch(err)});
    };

    fetchCorousel = () =>{
        axios.get(`${this.BASE_URL}/api/v1/hashmart/get-active-dashboard-images`, this.CONFIG).then(resp=>{
            this.that.setState({
                slides: [
                    {
                        title: 'Big choice of<br>Plumbing products',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                        image_classic: {
                            ltr: 'images/slides/slide-1-ltr.jpg',
                            rtl: 'images/slides/slide-1-rtl.jpg',
                        },
                        image_full: {
                            ltr: 'images/slides/slide-1-full-ltr.jpg',
                            rtl: 'images/slides/slide-1-full-rtl.jpg',
                        },
                        image_mobile: {
                            ltr: 'images/slides/slide-1-mobile.jpg',
                            rtl: 'images/slides/slide-1-mobile.jpg',
                        },
                    },
                    {
                        title: 'Screwdrivers<br>Professional Tools',
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Etiam pharetra laoreet dui quis molestie.',
                        image_classic: {
                            ltr: 'images/slides/slide-2-ltr.jpg',
                            rtl: 'images/slides/slide-2-rtl.jpg',
                        },
                        image_full: {
                            ltr: 'images/slides/slide-2-full-ltr.jpg',
                            rtl: 'images/slides/slide-2-full-rtl.jpg',
                        },
                        image_mobile: {
                            ltr: 'images/slides/slide-2-mobile.jpg',
                            rtl: 'images/slides/slide-2-mobile.jpg',
                        },
                    },
                ]
            })
        }).catch(err=>{this.__handleCatch(err)})
    };


    __handleCatch(error) {
        console.log(error);
        if (error.response) {
            let status = error.response.status;
            let data = error.response.data;
            let errorMessage =
                "Something went wrong processing your request! Please Try Again!";
            if (status === 428) {
                this.that.setState({
                    warning: true,
                    isLoading: false,
                    errorMessage: data.message
                });
            } else if (status === 400) {
                try {
                    errorMessage = data.errors[0].description;
                } catch (e) {}
                this.that.setState({
                    isLoading: false,
                    error: true,
                    errorMessage: errorMessage
                });
            } else {
                this.that.setState({
                    isLoading: false,
                    error: true,
                    errorMessage: errorMessage
                });
            }
            // this.that.funcs.toastError();
            // this.that.funcs.showFailed()
        } else {
            this.that.setState({
                isLoading: false,
                error: true,
                errorMessage: "Something went wrong processing your request"
            });
        }
        setTimeout(() => {
            this.that.setState({
                error: false,
                isLoading: false,
                errorMessage: "",
                warning: false
            });
        }, 7000);
    }


    handleLoggedIn = (resp) => {
        let role = resp.data.roles.result[0];
        localStorage.setItem("authToken", resp.data.token);
        localStorage.setItem("role", role);
        localStorage.setItem("initialTime", Date.now());
        // if (role === "Business") {
        //     this.services.getMyBusinesses()
        // } else if (role === "Admin") {
        window.location.href = "/";
        // }
        // window.Env.refreshTokenInterval();
    };

    doLogin = (data) => {
        this.that.setState({ isLoading: true, alert: null });
        axios
            .post(`${this.BASE_URL}/api/v1/hashmart/login`, data)
            .then(response => {
                if (response.status === 200) {
                    this.handleLoggedIn(response)
                }
            })
            .catch(error => {
                this.setState({ isLoading: false });
                let errors = [...this.state.errors];

                if (error.response === undefined) {
                    errors.push("Oops network error, kindly check your connection!");
                } else {
                    if (error.response.status === 401) {
                        if (error.response.data.isLockedOut === true) {
                            errors.push(
                                "Your Account has been blocked due to many invalid attempts! Kindly contact your administrator for assistance"
                            );
                        } else {
                            errors.push("Incorrect Password!");
                        }
                    } else if (error.response.status === 403) {
                        errors.push(
                            "Your account has been deactivated! Kindly contact the administrator for assistance!"
                        );
                    } else if (error.response.status === 404) {
                        errors.push(error.response.data);
                    } else {
                        errors.push(error.response.data.message);
                    }
                }
                this.setState({ errors });
            });
    };

}
