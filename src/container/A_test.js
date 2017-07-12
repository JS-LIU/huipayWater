let React = require('react');
let Button = require ('../components/Button');
let Text = require ('../components/Text');

import aTestStyle from '../css/aTestStyle.css';

const A_test = React.createClass({
    point:function(){
        alert(0);
    },
    render: function () {
        return(
            <div>
                <Button
                    className={aTestStyle.buttonStyle}
                    title="Button"
                    disabled
                    onPress={this.point}/>
                <Text className ={aTestStyle.textStyle}
                      numberOfLines='2'>
                    TextjrgklasdngkfsdjkflTextjrgklasdngkfsdjkflgskldgfsjkldfjksldgfskldgfskdgfksdjgfkhsgdkfgsdklfgsdgjfsdjkjgfsd
                </Text>
            </div>
        )
    }
});
module.exports =A_test;

