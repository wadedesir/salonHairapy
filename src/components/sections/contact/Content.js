import React from 'react';
import Contacthelper from '../../../helper/Contacthelper';
import ReCAPTCHA from "react-google-recaptcha";
import { Alert } from 'react-bootstrap';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import Stylist from '../../../assets/img/author.png';
import Kathy from "../../../assets/img/custom/kathy.jpg";

class Content extends Contacthelper {
    render() {
        // const Map = ReactMapboxGl({
        //     accessToken:
        //         'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'
        // });
        return (
            <section className="contact-part pt-115 pb-115">
                <div className="container d-flex flex-column-reverse flex-md-column">
                    {/* Contact Info */}
                    <div className='col-12 d-flex justify-content-center'>
                        <div className="col-md-7 order-1 order-md-2">
                            <div className="social-links d-flex justify-content-center">
                                <a className='contact-icons' href="https://www.twitter.com/SalonHairapy"> <i className="fab fa-twitter" /> </a>

                                <a className='contact-icons' href="https://www.yelp.com/biz/salon-hairapy-malden"> <i className="fab fa-yelp" /> </a>

                                <a className='contact-icons' href="https://www.linkedin.com/in/kathy-montrevil-ba32ab22"> <i className="fab fa-linkedin" /> </a>

                                <a className='contact-icons' href="https://www.youtube.com/@salonhairapy4486"> <i className="fab fa-youtube" /> </a>

                            </div>
                        </div>
                    </div>
                    <div className="contact-info mt-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6 col-10">
                                <div className="info-box">
                                    <div className="icon">
                                        <i className="flaticon-home" />
                                    </div>
                                    <div className="desc">
                                        <h4>Office Address</h4>
                                        <p>902 Salem St, MA 02148</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-10">
                                <div className="info-box">
                                    <div className="icon">
                                        <i className="flaticon-phone" />
                                    </div>
                                    <div className="desc">
                                        <h4>Phone Number</h4>
                                        <p>+1 (781) 480-3629</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-10">
                                <div className="info-box">
                                    <div className="icon">
                                        <i className="flaticon-message" />
                                    </div>
                                    <div className="desc">
                                        <h4>Email Address</h4>
                                        <p>Salonhairapy4u@gmail.com </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Mapts */}
                    {/* <Map
                        // eslint-disable-next-line react/style-prop-object
                        style="mapbox://styles/mapbox/light-v10"
                        className="contact-maps mb-30"
                    >
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[-77.04, 38.907]} zoom={11.5} />
                        </Layer>
                    </Map> */}
                    {/* Contact Form */}
                    <div className="contact-form">
                        <h2 className="text-center mb-30">Book Appointment</h2>
                        <form onSubmit={this.handleSubmit} method="GET">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group mb-30">
                                        <span className="icon"><i className="far fa-user" /></span>
                                        <input type="text" placeholder="Your full name" name="name" value={this.state.name} onChange={this.onNameChange} required />
                                    </div>
                                </div>
                                {/* <div className="col-md-6">
                                    <div className="input-group mb-30">
                                        <span className="icon"><i className="far fa-envelope" /></span>
                                        <input type="email" placeholder="Enter email address" name="email" value={this.state.email} onChange={this.onEmailChange} required />
                                    </div>
                                </div> */}
                                <div className="col-md-6">
                                    <div className="input-group mb-30">
                                        <span className="icon"><i className="far fa-phone" /></span>
                                        <input type="text" placeholder="Add phone number" name="phone" value={this.state.phone} onChange={this.onPhoneChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-30">
                                        {/* <span className="icon"><i className="far fa-book" /></span> */}
                                        <input placeholder="Date:" style={{ colorScheme: 'dark', width: '200px' }} type="date" name="date" value={this.state.date} onChange={this.onDateChange} required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group mb-30">
                                        {/* <span className="icon"><i className="far fa-clock" /></span> */}
                                        <input placeholder='Time:' style={{ colorScheme: 'dark', width: '200px' }} type="time" name="time" value={this.state.time} onChange={this.onTimeChange} required />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className="input-group mb-30">
                                        {/* <span className="icon"><i className="far fa-phone" /></span> */}
                                        <input type="text" placeholder="Enter Service" name="service" value={this.state.service} onChange={this.onServiceChange} required />
                                    </div>
                                </div>
                                <div className='col-12' >
                                    <div className='text-center'>
                                        <h4 style={{ color: '#FCD462' }}>Choose Your Stylist<h6 style={{ color: '#FCD462' }}>(if you have a preference!)</h6></h4>
                                    </div>
                                    {/* <div>

                                    </div> */}
                                    <div className="col-12 input-group mb-30 mt-30 d-flex flex-column flex-md-row justify-content-around"  >
                                        <div className="d-flex flex-column justify-content-center align-items-center">
                                            <img className="d-block mx-auto mb-30" src={Kathy} alt="stylist" width='150' />
                                            <h4 style={{ color: '#FCD462' }} className='text-center'>KATHY</h4>
                                            <p className='text-center my-2'>(specializes in all natural hair health and protective styles, extensions and colors)</p>
                                            <input style={{ accentColor: '#FCD462' }} className="mb-30 stylistRadio " type="radio" value='Kathy' name='stylist' onClick={this.onStylistChange} />
                                        </div>
                                        <div className="">
                                            <img className="d-block mx-auto mb-30" src={Stylist} alt="stylist" width='150' />
                                            <h4 style={{ color: '#FCD462' }} className='text-center my-2'>CASANDRA</h4>
                                            <p className='text-center'>(specializes in sew-ins, wigs, colors and chemical treatments)</p>
                                            <input style={{ accentColor: '#FCD462' }} className="mb-30 stylistRadio" type="radio" value='Casandra' name='stylist' onClick={this.onStylistChange} />
                                        </div>
                                        <div className="">
                                            <img className="d-block mx-auto mb-30" src={Stylist} alt="stylist" width='150' />
                                            <h4 style={{ color: '#FCD462' }} className='text-center my-2'>MELISSA</h4>
                                            <p className='text-center'>(specializes in natural braids and twists, locs and kids styles)</p>
                                            <input style={{ accentColor: '#FCD462' }} className="mb-30 mx-auto stylistRadio" type="radio" value='Melissa' name='stylist' onClick={this.onStylistChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label style={{ color: '#FCD462' }} for="message">Please provide any other DATE and TIME options that may work in case your first choice is unavailable...</label>
                                    <div className="input-group textarea mb-30">
                                        <span className="icon"><i className="far fa-pen" /></span>
                                        <input type="text" placeholder="Enter Times..." name="message" value={this.state.extraTimes} onChange={this.onExtraTimesChange} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group textarea mb-30">
                                        <span className="icon"><i className="far fa-pen" /></span>
                                        <textarea placeholder="Message to stylist..." name="message" value={this.state.message} onChange={this.onMessageChange} required />
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    {/* <ReCAPTCHA
                                        sitekey="6LdxUhMaAAAAAIrQt-_6Gz7F_58S4FlPWaxOh5ib"
                                        onChange={this.reCaptchaLoaded.bind(this)}
                                        size="invisible"
                                    /> */}
                                    <button type="submit" className="main-btn btn-filled">Request Appointment</button>
                                    {/* Form Messages */}
                                    <Alert variant="success" className="d-none mt-3 mb-0" id="server_response_success">
                                        <strong>Success!</strong> Contact form has been successfully submitted.
                                    </Alert>
                                    <Alert variant="danger" className="d-none mt-3 mb-0" id="server_response_danger">
                                        <strong>Oops!</strong> Something bad happened. Please try again later.
                                    </Alert>
                                    {/* Form Messages */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </section >
        );
    }
}

const stylistBlock = {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    width: '30%'
}
export default Content;