let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {historyUrlsActions} from '../redux/actions/historyUrlsActions';
import {chooseActions} from '../redux/actions/chooseActions';
import chooseStyle from '../css/chooseStyle.css';

const Choose = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/Choose');
    },
    chooseBucket:function(index){
        return()=>{
            this.props.chooseActionKeys.clearSelected();
            this.props.chooseActionKeys.selectedBucket(index);
        }
    },
    render: function () {
        let bucketNodes = this.props.choose.bucketList.map((item,index)=>{
            return(
                <li className={chooseStyle.chooseItem}
                    key={index}
                    onClick={this.chooseBucket(index)}
                    style={item.selected?bucket_selected:{}}>
                    <Link to="/WaterDetail">
                    {item.capacity}
                    </Link>
                </li>
            )
        });
        return (
            <div className={chooseStyle.choose}>
                <p className={chooseStyle.chooseType}>桶</p>
                <ul className={chooseStyle.chooseContent}>
                    {bucketNodes}
                </ul>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        choose:state.choose
    }
}
function mapDispatchToProps(dispatch){
    return{
        chooseActionKeys : bindActionCreators(chooseActions,dispatch),
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(Choose);
const bucket_selected={
    border:"0.01rem solid #4dc0ff",
}