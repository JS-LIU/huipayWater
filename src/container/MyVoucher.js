let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import myVoucherStyle from '../css/myVoucherStyle.css';
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';


const MyVoucher = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AddressManage');
    },
    render: function () {
        let voucherItems = this.props.myVoucher.voucherList.map((item,index)=>{
            return(
                <li className={myVoucherStyle.voucherItems}>
                    <div className={myVoucherStyle.voucher_left}>
                        <p className ={myVoucherStyle.left_top}>
                            <span className={myVoucherStyle.unit}>￥</span>
                            <span className ={myVoucherStyle.price}>{item.price}</span>
                        </p>
                        <p className={myVoucherStyle.condition}>满{item.condition}元可用</p>
                    </div>
                    <div className={myVoucherStyle.voucher_right}>
                        <p className={myVoucherStyle.stationName}>{item.stationName}</p>
                        <p className={myVoucherStyle.validity}>有效期至{item.validity}</p>
                    </div>
                    {item.amount>1?
                    <p className={myVoucherStyle.amount}>{item.amount}张</p>:''}
                </li>
            )
        });
        return (
            <div className={myVoucherStyle.myVoucher}>
                {this.props.myVoucher.voucherList==''?
                    <div className={myVoucherStyle.noVoucher}>
                        <img src="src/images/no_address.png" className = {myVoucherStyle.noVoucherPic}/>
                        <p className={myVoucherStyle.voucherTip}>您当前无代金券</p>
                    </div>:
                    <ul className={myVoucherStyle.voucherList}>
                        {voucherItems}
                    </ul>}
                <div className={myVoucherStyle.view_more}>
                    <span className ={myVoucherStyle.striping}></span>
                    <span className={myVoucherStyle.pull}>上拉查看历史代金券</span>
                    <span className ={myVoucherStyle.triangle}></span>
                    <span className ={myVoucherStyle.striping}></span>
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        myVoucher:state.myVoucher,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(MyVoucher);
