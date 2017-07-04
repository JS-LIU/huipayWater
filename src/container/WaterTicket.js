let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

let {waterTicketActions} = require('../redux/actions/waterTicketActions');
let waterTicketStyle = require('../css/waterTicketStyle.css');

const WaterTicket = React.createClass({
    componentDidMount:function(){
        _h.ui.scrollToTheBottom(()=>{
        });
    },
    render: function () {
        return (
            <div className={waterTicketStyle.bgColor}>
                <div className={waterTicketStyle.title}>水票</div>
                <WaterTicketList
                    waterTicket={this.props.waterTicket}
                    waterTicketActionKeys={this.props.waterTicketActionKeys}/>
                {/*<WaterTicketFooter/>*/}
                <Link to="/Order">
                    <div className={waterTicketStyle.shopping_cart}>
                        <img src="src/images/tab_btn_shoppingcart_n.png" alt="" className={waterTicketStyle.cart_pic}/>
                        <span className={waterTicketStyle.cart_corner}>1</span>
                    </div>
                </Link>
            </div>
        )
    }
});

let WaterTicketList = React.createClass({
    render:function(){
        let ticketListNodes = this.props.waterTicket.ticketList.map((item,index)=>{
            return(
                <li className={waterTicketStyle.ticketList_item} key={index}>
                    <div className={waterTicketStyle.item_pic_box}>
                        <img src="" alt="" className={waterTicketStyle.item_pail}/>
                        <div className={waterTicketStyle.item_text}>
                            <p className={waterTicketStyle.item_ticket_title}>{item.title}</p>
                            <p className={waterTicketStyle.item_ticket_subTitle}>{item.subTitle}</p>
                        </div>
                        <div className={waterTicketStyle.item_scope}>{item.scope}</div>
                    </div>
                    <div className={waterTicketStyle.item_detail_box}>
                        <span className={waterTicketStyle.item_price}><span className={waterTicketStyle.item_price_unit}>￥</span>{item.price}</span>
                        <span className={waterTicketStyle.item_phase}>{item.promote.onePhase}</span>
                        <span className={waterTicketStyle.item_phase}>{item.promote.twoPhase}</span>
                        <span className={waterTicketStyle.item_phase}>{item.promote.thrPhase}</span>
                        <img src="src/images/list_commom_btn_shopping-cart-.png" alt="" className={waterTicketStyle.item_cart}/>
                    </div>
                </li>
            )
        });
        return(
            <div className={waterTicketStyle.ticketList}>
                <WaterTicketType
                    waterTicket={this.props.waterTicket}
                    waterTicketActionKeys={this.props.waterTicketActionKeys}/>
                <ul>
                    {ticketListNodes}
                </ul>
            </div>
        )
    }
});


let WaterTicketType = React.createClass({
    cutType:function(index){
        return()=>{
            this.props.waterTicketActionKeys.getTicketList(index);
        }
    },
    render:function(){
        let typeNodes = this.props.waterTicket.type.map((item,index)=>{
            return(
                <li
                    key={index}
                    onClick={this.cutType(index)}
                    className={waterTicketStyle.product_type_item}
                    style={item.selected?cActiveStyle:{}}>
                    <span className={waterTicketStyle.type_item_title}>{item.title}</span>
                </li>
            )
        });
        return(
            <ul className={waterTicketStyle.product_type}>
                {typeNodes}
            </ul>
        )
    }
});
const WaterTicketFooter = React.createClass({
    render: function () {
        return (
            <div className={waterTicketStyle.footer}>
                <div className={waterTicketStyle.serve}>
                    <div className={waterTicketStyle.service}>客服</div>
                    <div className={waterTicketStyle.refer}><a href="tel:400-607-8300">咨询</a></div>
                    <div className={waterTicketStyle.cart}>
                        <span className={waterTicketStyle.cart_num}>7</span>
                        <p>购物车</p>
                    </div>
                </div>
                <div className={waterTicketStyle.settle}>
                    去结算
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        waterTicket:state.waterTicket,
        order:state.order,
    }
}
function mapDispatchToProps(dispatch){
    return{
        waterTicketActionKeys : bindActionCreators(waterTicketActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(WaterTicket);

const cActiveStyle = {
    color:"#0A89FE"
};