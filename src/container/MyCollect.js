let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');

import {ProductList,ProductVerList} from '../components/ProductList';
import myCollectStyle from '../css/myCollectStyle.css'
import {historyUrlsActions} from '../redux/actions/historyUrlsActions';

const MyCollect = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/MyCollect');
        this.setState({
            skip:true,
        })
    },
    cutCollect:function(index){
        return()=>{
            if(index == 1){
                this.setState({
                    skip:false,
                })
            }else{
                this.setState({
                    skip:true,
                })
            }
        }
    },
    render: function () {
        return (
            <div className={myCollectStyle.my_collect_box}>
                <div className={myCollectStyle.collectKindSkip}>
                    <p  onClick={this.cutCollect(0)}
                        style={this.state.skip?cActiveStyle:{}}
                        className={myCollectStyle.skipProduct}>
                        商品
                    </p>
                    <p className={myCollectStyle.halving}> </p>
                    <p  onClick={this.cutCollect(1)}
                        style={this.state.skip?{}:cActiveStyle}
                        className={myCollectStyle.skipProduct}>
                        店铺
                    </p>
                </div>
                {this.state.skip ?
                    <ProductCollect water={this.props.water}/> :
                    <StationCollect station={this.props.station}/>
                }
            </div>
        )
    }
});

const ProductCollect = React.createClass({
    render: function () {
        return (
            <div>
                <ProductList water={this.props.water}>
                    <ProductVerList water={this.props.water}/>
                </ProductList>
            </div>
        )
    }
});

const StationCollect = React.createClass({
    render: function () {
        let stationNodes = this.props.station.stationList.map((item,index)=>{
            return(
                <li key={index}>
                    <Link to="/WaterDetail" className={myCollectStyle.stationList_item} >
                        <div className={myCollectStyle.item_pic_box}>
                            <img src="" alt="" className={myCollectStyle.item_pic}/>
                        </div>
                        <div className={myCollectStyle.item_descript}>
                            <p className={myCollectStyle.item_station_name}>{item.title}
                                {item.approve?<img src={item.approveImg} className={myCollectStyle.item_station_approve}/>:""}
                            </p>
                            <p className={myCollectStyle.item_station_evaluate}>
                                <span>fgdsfgsd</span>
                                <span className={myCollectStyle.item_evaluate_sale}>月售：{item.sale}</span>
                                <span></span>
                            </p>
                            <p className={myCollectStyle.item_station_address}>
                                <span>{item.address}</span>
                                <span></span>
                            </p>
                        </div>
                    </Link>
                </li>
            )
        });
        return (
            <ul className={myCollectStyle.stationList}>
                {stationNodes}
            </ul>
        )
    }
});
function mapStateToProps(state){
    return {
        historyUrls:state.historyUrls,
        water:state.water,
        station:state.station,
    }
}
function mapDispatchToProps(dispatch){
    return{
        historyUrlsActionKeys:bindActionCreators(historyUrlsActions,dispatch),
    }
}
module.exports = connect(mapStateToProps,mapDispatchToProps)(MyCollect);

const cActiveStyle={
    borderBottom:"0.04rem solid #4dc0ff",
    color:"#4dc0ff"
};