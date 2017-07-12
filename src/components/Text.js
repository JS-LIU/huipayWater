let React = require('react');
let { Link } = require('react-router');

const Text = React.createClass({
    render: function () {
        return (
            <div className={this.props.className}
                 style={textStyle}
                >
                {this.props.children}
            </div>
        )
    }
});

module.exports = Text;

const textStyle={
    wordWrap:'break-word',
    wordBreak:'break-all',
    boxOrient: 'vertical',
    boxClamp: '3',
    overflow: 'hidden',
};