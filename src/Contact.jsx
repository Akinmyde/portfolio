import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = { 
            data: { name: '', email: '', phone: '', message: '' }, 
            showAlert: false
        };
    }
  
    handleChange = ({ currentTarget: input }) => {
      const { data } = this.state;
      data[input.id] = input.value;
      this.setState({ data });
    };

    onAlertClick = () => this.setState({ showAlert: false });

    onSubmit = async e => {
        e.preventDefault();
        // const { email, name, phone, message } = this.state;
        this.setState({ showAlert: true })
        // Hi, my name is ${name} i have a something for you
        // you can contact me on ${phone}
    }
  
    onButtonCLick = () => {
      this.setState({ formClassName: 'was-validated' });
    }
  
    render() {
      return (
        <div className="row">
        <div className="col-lg-12">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" onChange={this.handleChange} id="name" type="text" placeholder="Your Name *" required />
                </div>
                <div className="form-group">
                  <input className="form-control" onChange={this.handleChange} id="email" type="email" placeholder="Your Email *" required />
                </div>
                <div className="form-group">
                  <input className="form-control" onChange={this.handleChange} id="phone" type="tel" placeholder="Your Phone" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" onChange={this.handleChange} id="message" placeholder="Your Message *" required></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                {this.state.showAlert && (
                    <div id="success">
                        <div onClick={this.onAlertClick} class="alert alert-danger">
                            <button type="button" class="close" data-dismiss="alert">x</button>
                            <strong>{`Sorry ${this.state.data.name}, it seems that my mail server is not responding. Please try again later!`}
                            </strong>
                        </div>
                    </div>
                )}
                <button className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      );
    }
  }


export default Contact