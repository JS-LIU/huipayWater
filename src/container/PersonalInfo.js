let React = require('react');
let { connect } = require('react-redux');
let { bindActionCreators } = require('redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import personalInfoStyle from '../css/personalInfoStyle.css'

const PersonalInfo = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/UserEvaluation');
    },
    render: function () {
        return (
            <div className={personalInfoStyle.personalInfo}>
                <div className={personalInfoStyle.headerPic}>
                    <p className={personalInfoStyle.describe}>头像</p>
                    <p className ={personalInfoStyle.consrete}>
                        <img src={this.props.userInfo.icon}  className={personalInfoStyle.headPic}/>
                        <img src="src/images/btn_right_arrow@2x.png" className={personalInfoStyle.right_btn}/>
                    </p>
                </div>
                <div className={personalInfoStyle.strip}>
                    <p>名字</p>
                    <p className ={personalInfoStyle.nickName}>
                        {this.props.userInfo.cnName}
                        <img src="src/images/btn_right_arrow@2x.png" className={personalInfoStyle.right_btn}/>
                    </p>
                </div>
                <div className={personalInfoStyle.strip}>
                    <p>汇贝号</p>
                    <p className ={personalInfoStyle.nickName}>
                        {this.props.userInfo.hpNum}
                    </p>
                </div>
                <div className={personalInfoStyle.sendAddress}>
                    <p>送货地址</p>
                    <p className ={personalInfoStyle.nickName}>
                        <img src="src/images/btn_right_arrow@2x.png" className={personalInfoStyle.right_btn}/>
                    </p>
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        userInfo:state.userInfo,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(PersonalInfo);