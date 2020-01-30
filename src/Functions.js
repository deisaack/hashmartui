import React from "react";
import SweetAlert from "react-bootstrap-sweetalert/dist";

export class Functions {
    constructor(that, ...requiredFields) {
        this.requiredFields = requiredFields;
        this.state = {
            that: that
        };
        this.that = that;
    }

    float = value => {
        try {
            value = value.replace(/,/g, "");
        } catch (e) {
            value = value;
        }
        if (isNaN(value)) {
            value = 0;
        }
        return parseFloat(value);
    };

    twoDp = value => {
        value = this.float(value);
        return Math.ceil(value * 100) / 100;
    };

    handleChange = event => {
        this.that.setState({ [event.target.name]: event.target.value });
    };

    handleBlur = event => {
        let name = event.target.name;
        document.getElementById(name).classList.remove("is-valid");
        if (
            this.requiredFields.includes(name) &&
            (this.that.state[name] === "" ||
                this.that.state[name] === undefined ||
                this.that.state[name] === null)
        ) {
            document.getElementById(name).classList.add("is-invalid");
        }
    };

    handleFocus = event => {
        let name = event.target.name;
        document.getElementById(name).classList.remove("is-valid");
        document.getElementById(name).classList.remove("is-invalid");
    };

    refresh = () => {
        window.location.reload();
    };

    doNothing = event => {};

    handleClickSubmit = () => {
        const empty = [];
        this.requiredFields.forEach(field =>
            this.that.state[`${field}`] === "" ? empty.push(field) : false
        );

        if (empty.length > 0) {
            this.that.setState({
                error: true,
                errorMessage: "It appears there are required fields you haven't filled!"
            });
            empty.forEach(emptyField =>
                document.getElementById(`${emptyField}`).classList.add("is-invalid")
            );
            setTimeout(() => {
                this.that.setState({ error: false, errorMessage: "" });
            }, 8000);
        } else {
            this.showConfirm();
        }
    };

    showConfirm = () => {
        let alert = (
            <SweetAlert
                info
                title="Proceed !!"
                showCloseButton={false}
                onConfirm={this.proceedSubmission}
                onCancel={this.hideAlert}
                />
                    );
        this.that.setState({ alert: alert });
    };

    proceedSubmission = () => {
        // this.hideAlert();
        this.that.setState({ isLoading: true });
        this.that.submitForm();
    };

    clearForm = () => {
        var inputs, index;
        inputs = document.getElementsByTagName("input");
        for (index = 0; index < inputs.length; ++index) {
            let input = inputs[index];
            let name = inputs[index].name;
            this.that.setState({ [name]: "" });
            input.value = "";
        }
    };

    clearFields = (...fields) => {
        for (let index = 0; index < fields.length; ++index) {
            let input = document.getElementById(fields[index]);
            if (input) {
                let name = input.name;
                this.that.setState({ [name]: "" });
                input.value = "";
            } else {
                console.log(fields["index"]);
                console.log(input);
            }
        }
    };

    logoutUser = () => {
        alert("Hello")
        localStorage.removeItem("authToken");
        localStorage.removeItem("created");
        localStorage.removeItem("role");
        localStorage.removeItem("businessCode");
        // window.location.href = "/";
        this.refresh();
    };
}

export default Functions;
