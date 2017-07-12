let React = require('react');

const Button = React.createClass({
    render: function () {
        return (
            <button onClick={this.props.onPress}
                    className={this.props.className}
                    disabled={this.props.disabled}
            >
                {this.props.title}
            </button>
        )
    }
});

module.exports = Button;
