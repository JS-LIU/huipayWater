let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import mySettingStyle from '../css/mySettingStyle.css';

const MySetting = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Station');
        this.props.historyUrlsActionKeys.mark('/Station');
    },
    render: function () {
        return (
            <div className ={mySettingStyle.mySetting}>
                <div className={mySettingStyle.manage}>
                    <p>账号管理</p>
                    <img src="src/images/btn_right_arrow@2x.png" className={mySettingStyle.right_btn}/>
                </div>
                <div className ={mySettingStyle.about}>
                    <p>关于海豹</p>
                    <img src="src/images/btn_right_arrow@2x.png" className={mySettingStyle.right_btn}/>
                </div>
                <div className ={mySettingStyle.userDeal}>
                    <p>用户协议</p>
                    <img src="src/images/btn_right_arrow@2x.png" className={mySettingStyle.right_btn}/>
                </div>
                <div className={mySettingStyle.clearStorage}>
                    <p>清除缓存</p>
                </div>
                <div className ={mySettingStyle.dropOut}>
                    退出登录
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

module.exports = connect(mapStateToProps,mapDispatchToProps)(MySetting);