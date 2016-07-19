var React = require('react');
var ReactDOM = require('react-dom');

var LoginView = React.createClass( {
    getInitialState(){
        return {
            text: "LoginView State"
        }
    },
    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
});

module.exports = LoginView;
