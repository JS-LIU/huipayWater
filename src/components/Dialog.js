let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import dialogStyle from '../css/dialogStyle.css'

const Dialog = React.createClass({
    render: function () {
        return (
            <div className={dialogStyle.dialog_box}>
                {this.props.children}
            </div>
        )
    }
});

const DeleteDialogContent = React.createClass({
    hideDialog:function(){
        this.props.dialogActionKeys.hideDialog();
    },
    render: function () {
        return (
            <div className={dialogStyle.delete_dialog_body}>
                <p className={dialogStyle.dialog_body_text}>{this.props.content.text}</p>
                <p className={dialogStyle.dialog_body_operate} onClick={this.hideDialog}>{this.props.content.operate}</p>
            </div>
        )
    }
});

const DialogFooter = React.createClass({
    hideDialog:function(){
        this.props.dialogActionKeys.hideDialog();
    },
    render: function () {
        return (
            <div className={dialogStyle.dialog_footer} onClick={this.hideDialog}>
                {this.props.footer.text}
            </div>
        )
    }
});

const NewAddressDialogContent = React.createClass({
    hideDialog:function(){
        this.props.dialogActionKeys.hideDialog();
    },
    render: function () {
        return (
            <div className={dialogStyle.new_address_dialog_body}>
                <p className={dialogStyle.new_address_body_text}>{this.props.content.text}</p>
                <p className={dialogStyle.new_address_body_operate} onClick={this.hideDialog}>{this.props.content.operate}</p>
            </div>
        )
    }
});



module.exports = {Dialog,DeleteDialogContent,DialogFooter,NewAddressDialogContent};