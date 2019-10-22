import React from 'react';
import './css/App.css';
import MoneyBox from './components/moneybox';
import MarketPlace from './components/marketplace';
import Ingredients from './components/ingredients';
import Production from './components/production';



class App extends React.Component {
    state = {
        arm:0,
        leg:0,
        gherkin:0,
        money: 0,
    };

    changeMoney = (amount) => {
        this.setState((prevState) => {
            return {
                money: prevState.money + amount,
            };
        });
    };

    saleHuman = (amount) => {
        this.setState((prevState) => {
            return {
                money: prevState.money + amount,
            };
        });
    };


    changeArm = (amount) => {
        this.setState((prevState) => {
            return {
                arm: prevState.arm + amount,
            };
        });
    };

    changeLeg = (amount) => {
        this.setState((prevState) => {
            return {
                leg: prevState.leg + amount,
            };
        });
    };

    changeGherkin = (amount) => {
        this.setState((prevState) => {
            return {
                gherkin: prevState.gherkin + amount,
            };
        });
    };

    render() {
        return (
            <div>
                <section className="header">
                    <p className="header_text">«Фабрика человечков»</p>
                </section>
                <section className="moneybox">
                    <div className="money_box">
                        <div className="money_line"></div>
                        <a className="save_money">Копилка</a>
                        <div className="money_line"></div>
                    </div>
                    <MoneyBox money={this.state.money} changeMoney={this.changeMoney} />
                </section>
                <section className="marketplace">
                    <div className="market_box">
                        <div className="market_line"></div>
                        <a className="text_market">Рынок ингредиентов</a>
                        <div className="market_line"></div>
                    </div>
                    <MarketPlace money={this.state.money} arm={this.state.arm} leg={this.state.leg} gherkin={this.state.gherkin} changeLeg={this.changeLeg} changeArm={this.changeArm} changeMoney={this.changeMoney} changeGherkin={this.changeGherkin}/>
                </section>
                <section className="ingredients">
                    <div className="ingredients_box">
                        <div className="ingredients_line"></div>
                        <a className="text_ingredients">Ингредиенты в сумке</a>
                        <div className="ingredients_line"></div>
                    </div>
                    <Ingredients money={this.state.money} changeMoney={this.changeMoney} leg={this.state.leg} changeLeg={this.changeLeg} arm={this.state.arm} changeArm={this.changeArm} gherkin={this.state.gherkin} changeGherkin={this.changeGherkin}/>
                </section>
                <section className="production">
                    <div className="production_box">
                        <div className="production_line"></div>
                        <a className="text_production">Производство человечка</a>
                        <div className="production_line"></div>
                    </div>
                    <Production money={this.state.money} saleHuman={this.saleHuman} leg={this.state.leg} changeLeg={this.changeLeg} arm={this.state.arm} changeArm={this.changeArm} gherkin={this.state.gherkin} changeGherkin={this.changeGherkin} />
                </section>
            </div>
        );
    }
}

export default App;