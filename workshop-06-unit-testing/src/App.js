import React from 'react';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitClick = () => {
        if ((this.state.username === "2017781") && (this.state.password === "testing")) {
            this.setState({isLoggedIn: true});
        }
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="form-group">
                            <input type="text" className="form-control" name="username" hint="username" onChange={this.handleInputChange}/>
                            <input type="password" className="form-control" name="password" hint="password" onChange={this.handleInputChange}/>
                            <button className="btn btn-primary" name="submit" onClick={this.submitClick}> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
