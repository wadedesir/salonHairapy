import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Contacthelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            date: '',
            time: '',
            extraTimes: '',
            service: '',
            message: '',
            stylist: '',
            isVerified: false
        }
        this.formId = '1FAIpQLSe6fJHL0pCXCDAwkzC3gE0nqtnPt5AI5EXhUcU-sMXl_xxyfA'
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.onExtraTimesChange = this.onExtraTimesChange.bind(this);
        this.onServiceChange = this.onServiceChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onStylistChange = this.onStylistChange.bind(this);
        this.reCaptchaLoaded = this.reCaptchaLoaded.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onDateChange(event) {
        this.setState({ date: event.target.value })
    }
    onTimeChange(event) {
        this.setState({ time: event.target.value })
    }
    onExtraTimesChange(event) {
        this.setState({ extraTimes: event.target.value })
    }
    onServiceChange(event) {
        this.setState({ service: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }
    onStylistChange(event) {
        this.setState({ stylist: event.target.value })
    }
    // REcaptcha
    reCaptchaLoaded(value) {
        console.log("Captcha Successfully Loaded", value);
    }

    sendForm = (url) => {
        let response;
        try {
            response = axios.post(url, null, null)
        } catch (e) {
            response = e;
        }
        console.log(response)
    }

    queryString = (url, data) => {
        return Object.keys(data).reduce((ret, val, i) => {
            return ret + val + '=' + data[val] + '&'
        }, url + '?')
    }

    handleSubmit(e) {
        e.preventDefault();
        const date = new Date(this.state.date)
        console.log(date)
        // date.setTime(this.state.time)
        console.log(this.state.time.slice(0, 2))
        const returnData = {
            'entry.1371264164': this.state.name,
            'entry.848681351_year': date.getFullYear(),
            'entry.848681351_month': date.getMonth() + 1,
            'entry.848681351_day': date.getDate() + 1,
            'entry.369379582_hour': this.state.time.slice(0, 2),
            'entry.369379582_minute': this.state.time.slice(3, 5),
            'entry.1921125763': this.state.service + this.state.extraTimes + this.state.message + this.state.phone + this.state.stylist
        }
        console.log(e, this.state)
        console.log(returnData)

        const formUrl = "https://docs.google.com/forms/d/e/" + this.formId + "/formResponse";
        const q = this.queryString(formUrl, returnData)
        this.sendForm(q)
        // fetch(`https://docs.google.com/forms/d/${this.formId}/formResponse`, {
        //     method: "POST",
        //     body: JSON.stringify(returnData),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(
        //     (response) => (response.json())
        // ).then((response) => {
        //     if (response.id !== '') {
        //         document.getElementById("server_response_success").classList.add("d-block");
        //         this.resetForm();
        //         this.setState({
        //             isVerified: true
        //         })
        //     } else {
        //         document.getElementById("server_response_danger").classList.add("d-block");
        //     }
        // })
        document.getElementById("server_response_success").classList.add("d-block");
    }
    resetForm() {
        this.setState({ name: "", phone: "", date: "", time: "", extraTimes: '', service: '', message: "", })
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default Contacthelper;