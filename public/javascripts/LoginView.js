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
    },
    componentDidMount(){
        // return function(){
            // var root = 'http://jsonplaceholder.typicode.com';
            //
            // $.ajax({
            //     url: root + '/posts/1',
            //     method: 'GET'
            // }).then(function(data) {
            //     console.log(data);
            // });
        // }
    }

});

module.exports = LoginView;
