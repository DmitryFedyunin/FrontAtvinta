import React from 'react';
import '../css/moneybox.css';
import Coin_img from '../img/Layer_19_copy_117.svg';

class MoneyBox extends React.Component {

    state = {
        itemList: [],
    };

    componentDidMount() {
        this.updateItemList();
    }


    updateItemList() {
        const {money} = this.props;

        this.setState({
            itemList: [],
        });

        for (let i=0; i<money; i++) {
            this.setState((prevState) => {
                const newItemList = [...prevState.itemList];
                newItemList.push(Coin_img);
                return {
                    itemList: newItemList,
                };
            });
        }
    }

    componentDidUpdate(prevProps) {
        const {money} = this.props;
        const {money: prevMoney} = prevProps;

        if (money !== prevMoney) {
            this.updateItemList();
        }
    }

    handleClick = () => {
        this.props.changeMoney(1);
    };

    renderItemList = (img, index) => <img className="trans" src={img} key={index} />

    render(){

        return (
            <div className="coins">
                <div className="items"> {this.state.itemList.map(this.renderItemList)}</div>
                <span className="quantity_coin"> {this.props.money} монет </span>
                <a  className="add_one_coin" onClick={this.handleClick} >Добавить одну монету</a>
            </div>
        );
    }
}

export default MoneyBox;
