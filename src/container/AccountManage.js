let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import accountManageStyle from '../css/accountManageStyle.css';

const AccountManage = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AccountManage');
    },
    render: function () {
        return (
            <div className ={accountManageStyle.accountManage}>
                <div className ={accountManageStyle.userName}>
                    <p>用户名</p>
                    <p>154876545</p>
                </div>
                <div className ={accountManageStyle.hbPassword}>
                    <p>汇贝密码</p>
                    <p>*****
                        <img src="src/images/btn_right_arrow@2x.png" className={accountManageStyle.right_btn}/>
                    </p>
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,

    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(AccountManage);