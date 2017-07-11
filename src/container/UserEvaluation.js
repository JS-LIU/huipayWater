let React = require('react');
let { connect } = require('react-redux');
let { bindActionCreators } = require('redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import userEvaluationStyle from '../css/userEvaluationStyle.css'

const UserEvaluation = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/UserEvaluation');
    },
    render: function () {
        return (
            <div className={userEvaluationStyle.consume_judge}>
                {/*<p className={userEvaluationStyle.proPromote}>*/}
                    {/*<span className={userEvaluationStyle.productJudge}>商品评价（121）</span>*/}
                    {/*<span className={userEvaluationStyle.examine}>查看更多 <img src="src/images/btn_right_arrow@2x.png" className={userEvaluationStyle.more_right_btn}/></span>*/}
                {/*</p>*/}
                <div className={userEvaluationStyle.promoteContent}>
                    <div className={userEvaluationStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={userEvaluationStyle.portrait}/>
                        <div className={userEvaluationStyle.userName}>
                            <p>林***小</p>
                            <p className={userEvaluationStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={userEvaluationStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={userEvaluationStyle.judgeContent}>
                        <p>用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾!</p>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className={userEvaluationStyle.promoteContent}>
                    <div className={userEvaluationStyle.consumer}>
                        <img src="src/images/tempHeader.png" className={userEvaluationStyle.portrait}/>
                        <div className={userEvaluationStyle.userName}>
                            <p>林***小</p>
                            <p className={userEvaluationStyle.degree}>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_orange.png" alt=""/>
                                <img src="src/images/icon_star_gray.png" alt=""/>
                            </p>
                        </div>
                        <p className={userEvaluationStyle.judgeTime}>2016-03-07</p>
                    </div>
                    <div className={userEvaluationStyle.judgeContent}>
                        <p>用币兑换太划算了，送货也及时，快递师傅也很辛苦！很划算，下次还会光顾!</p>
                        {/*<img src="" alt=""/>*/}
                        {/*<img src="" alt=""/>*/}
                        {/*<img src="" alt=""/>*/}
                        {/*<img src="" alt=""/>*/}
                        <p className={userEvaluationStyle.triangle}></p>
                        <div className={userEvaluationStyle.reply}>
                            商家回复：谢谢您的好评，我们会不断进步以越来越好的优质服务来接待您。
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(UserEvaluation);