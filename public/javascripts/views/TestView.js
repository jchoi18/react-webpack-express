var React = require('react');
var ReactDOM = require('react-dom');
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

var TestView = React.createClass( {
    getInitialState(){
        return {
            text: ""
        }
    },

    render() {
        return (
            <div>
                {this.state.text}
                <input type="text" id="datePicker"/>
            </div>
        );
    },

    componentWillMount(){
        console.log("About to mount TestView")
    },
    
    componentDidMount(){
        $('#datePicker').datepicker((function(_this) {
            return ({
                onSelect(dateText){
                    console.log(dateText);
                    _this.handleChange(dateText)
                }
            });

        })(this));

        $.ajax({
            url: '/api',
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });
    },

    handleChange(date){
        this.setState({
            text: date
        });
    }

});

module.exports = TestView;
