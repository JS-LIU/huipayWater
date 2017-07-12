let React = require('react');
import flatListStyle from '../css/flatListStyle.css';

const FlatList = React.createClass({
    render: function () {
        let listNodes = this.props.data.map((item,index)=>{
            return(
                <li></li>
                // {this.props.renderItem(item)}
            )
        });
        return (
            <div className={flatListStyle.flatList}>
                <ListHeader listHeader={this.props.listHeader}/>
                <div>
                    {listNodes}
                </div>
                <ListFooter listFooter={this.props.listFooter}/>
            </div>
        )
    }
});

const ListHeader = React.createClass({
    render: function () {
        return (
            <div className={flatListStyle.listHeader}>
                {this.props.listHeader}
            </div>
        )
    }
});

const ListFooter = React.createClass({
    render: function () {
        return (
            <div className={flatListStyle.listFooter}>
                {this.props.listFooter}
            </div>
        )
    }
});

const ItemSeparator = React.createClass({
    render: function () {
        return (
            <div style={this.props.style} className={flatListStyle.itemSeparator}>

            </div>
        )
    }
});

module.exports = FlatList;
