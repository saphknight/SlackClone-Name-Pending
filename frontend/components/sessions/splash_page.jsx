import React from 'react';

class SplashPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            email: "",
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true});
        debugger 
        this.props.history.push(
            {
                pathname: '/get-started',
                state: { email: this.state.email}
            }
        );
    }

    handleInput(field) {
        return (e) => {
            this.setState({
                [field]: e.target.value
            })
        }
    }

    render(){ 
        return (
            <div className="splash-div">
                <h1 className="splash-desc">
                    Imagine what you'll accomplish together
                </h1>
                <div className="app-desc">
                    Slack is a collaboration hub for work, no matter what work you do. It’s a place where conversations happen, decisions are made, and information is always at your fingertips. With Slack, your team is better connected.
                </div>
                <form className="splash-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="splash-email" placeholder="Email address" onChange={this.handleInput("email")}/> 
                    <input type="submit" className="splash-started" value="GET STARTED"/>
                </form>
            </div>
    );}
}

export default SplashPage;