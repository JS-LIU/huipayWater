let React = require('react');

let FlatList = require('../components/FlatList');

const A_flatList = React.createClass({
    componentWillMount:function(){
        this.props.historyUrlsActionKeys.pushUrl('/AllIndents');
        this.props.historyUrlsActionKeys.mark('/AllIndents');
    },
    _header:function() {
        return <div style={{backgroundColor:'black'}}>这是头部</div>;
    },
    _footer:function() {
        return <div style={{backgroundColor:'black'}}>这是尾部</div>;
    },
    _separator :function() {
        return <div style={{height:2,backgroundColor:'yellow'}}></div>;
    },
    _renderItem:function (item){
        let txt = '第' + item.index + '个' + ' title=' + item.title;
        let bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <div style={{flex:1,backgroundColor:bgColor}}>{txt}</div>
    },
    render: function () {
        var data = [];
        for (let i = 0; i < 5; i++) {
            data.push({key: i, title: i + ''});
        }
        return (
            <FlatList listHeader={this._header()}
                      listFooter={this._footer()}
                      _separator={this._separator()}
                      renderItem={this._renderItem(item)}
                      data={data}/>
        )
    }
});

module.exports = A_flatList;