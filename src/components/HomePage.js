let React = require('react');
let Footer = require ('../components/Footer');

let HomePage = React.createClass({
    render: function () {
        return(
            <div>
                {this.props.children}
                <Footer footData={[
                    {name:'订水',url:'/BuyWater',checked:"src/images/tab_btn_order water_s.png",unchecked:"src/images/tab_btn_order water_n.png",isChecked:false},
                    {name:'水站',url:'/Station',checked:"src/images/tab_btn_station_s.png",unchecked:"src/images/tab_btn_station_n.png",isChecked:false},
                    {name:'购物车',url:'/ShoppingCart',checked:"src/images/tab_btn_shoppingcart_s.png",unchecked:"src/images/tab_btn_shoppingcart_n.png",isChecked:false},
                    {name:'我',url:'/My',checked:"src/images/tab_btn_me_s.png",unchecked:"src/images/tab_btn_me_n.png",isChecked:false}
                    ]}
                    pathName={this.props.location.pathname}
                />
            </div>
        )
    }
});

module.exports = HomePage;