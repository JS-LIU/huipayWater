let React = require('react');
let { bindActionCreators } = require('redux');
let { Link } = require('react-router');
let { connect } = require('react-redux');
let _h = require('../Util/HB');

let {chooseActions} = require('../redux/actions/chooseActions');
let ticketComboStyle = require('../css/ticketComboStyle.css');

const TicketCombo = React.createClass({
    chooseCombo:function(index){
        return()=>{
            this.props.chooseActionKeys.clearComboSelected();
            this.props.chooseActionKeys.selectedCombo(index);
        }
    },
    render: function () {
        let comboList = this.props.choose.comboList.map((item,index)=>{
            return(
                <p key={index}
                   className={ticketComboStyle.comboNode}
                   onClick={this.chooseCombo(index)}
                   style={item.selected?cActiveStyle:{}}>
                    <Link to='/WaterTicketDetail'>
                        {item.favorable}
                    </Link>
                </p>
            )
        });
        return (
            <div className={ticketComboStyle.ticketCombo}>
                <div className={ticketComboStyle.title}>选择套餐</div>
                <p className={ticketComboStyle.comboTitle}>水票优惠套餐限时抢购，赶紧购买吧！</p>
                <div className={ticketComboStyle.comboList}>
                    {comboList}
                </div>
            </div>
        )
    }
});

function mapStateToProps(state){
    return {
        choose:state.choose,
    }
}
function mapDispatchToProps(dispatch){
    return{
        chooseActionKeys : bindActionCreators(chooseActions,dispatch),
    }
}

module.exports = connect(mapStateToProps,mapDispatchToProps)(TicketCombo);

const cActiveStyle={
    border:"0.01rem solid #4dc0ff",
    color:"#4dc0ff"
};