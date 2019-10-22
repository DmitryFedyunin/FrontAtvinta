import React from 'react';
import '../css/ingredients.css';
import Arm from '../img/Layer_13.svg';
import Leg from '../img/Layer_14.svg';
import Gherkin from '../img/Layer_15.svg';
import cn from 'classnames';
class Ingredients extends React.Component {


    handleLegSale = (leg, money) => ()=> {
        this.props.changeMoney(money);
        this.props.changeLeg(leg);
    };

    handleArmSale = (arm, money) => ()=> {
        this.props.changeMoney(money);
        this.props.changeArm(arm);
    };

    handleGherkinSale = (gherkin, money) => ()=> {
        this.props.changeMoney(money);
        this.props.changeGherkin(gherkin);
    };


    render(){
        const {arm} = this.props;
        const {leg} = this.props;
        const {gherkin} = this.props;
        return (
            <div className="more_ingredients">
                <div className="sale">
                    <div className="sale_arm_more">
                        <div className="sale_arm">
                            <div className="sale_num">
                            <img src={Arm}/>
                            <p className={cn("num_length", {no_have_item: arm < 1})}>x {this.props.arm}</p>
                        </div>
                        <button className={cn("sale_arm_button", {disabled_item: arm < 1})} onClick={this.handleArmSale(-1, 3)}>Продать одну
                            </button>
                            <p className="sale_text">за 3 монет
                            </p>
                        </div>
                    </div>
                    <div className="sale_leg_more">
                        <div className="sale_num">
                        <img src={Leg} />
                        <p className={cn("num_length", {no_have_item: leg < 1})}>x {this.props.leg}</p>
                        </div>
                        <div className="sale_leg">
                            <button className={cn("sale_leg_button", {disabled_item: leg < 1})}  onClick={this.handleLegSale(-1, 5)}>Продать одну
                            </button>
                            <p className="sale_text">за 5 монет
                            </p>
                        </div>
                    </div>
                    <div className="sale_gherkin_more">
                        <div className="sale_num">
                        <img src={Gherkin} />
                            <p className={cn("num_length", {no_have_item: gherkin < 1})}>x {this.props.gherkin}</p>
                        </div>
                        <div className="sale_gherkin">
                            <button className={cn("sale_gherkin_button", {disabled_item: gherkin < 1})} onClick={this.handleGherkinSale(-1, 15)}>Продать один
                            </button>
                            <p className="sale_text">за 15 монет
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ingredients;
