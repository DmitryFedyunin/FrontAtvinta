import React from 'react';
import '../css/marketplase.css';
import cn from 'classnames';

class MarketPlace extends React.Component {


    handleLegBuy = (leg, money) => ()=> {
        this.props.changeMoney(money);
        this.props.changeLeg(leg);
    };

    handleArmBuy = (arm, money) => ()=> {
        this.props.changeMoney(money);
        this.props.changeArm(arm);
    };

    handleGherkinBuy = (gherkin, money) => ()=> {
        this.props.changeMoney(money);
        this.props.changeGherkin(gherkin);
    };

    render(){
        const {money} = this.props;
        return (
            <div className="more_marketpalse">
                <div className="buy">
                    <div className="buy_arm"><button className={cn("buy_arm_button", {disabled: money < 5})} onClick={this.handleArmBuy(1, -5)}>Купить ручку </button><p className="buy_text">за 5 монет</p></div>
                    <div className="buy_leg"><button className={cn("buy_leg_button", {disabled: money < 7})} onClick={this.handleLegBuy(1, -7)}>Купить ножку</button><p className="buy_text">за 7 монет</p></div>
                    <div className="buy_gherkin"><button className={cn("buy_gherkin_button", {disabled: money < 20})} onClick={this.handleGherkinBuy(1, -20)}>Купить огуречик</button><p className="buy_text">за 20 монет</p></div>
                </div>
            </div>
        );
    }
}

export default MarketPlace;
