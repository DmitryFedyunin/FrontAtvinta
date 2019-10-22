import React from 'react';
import '../css/production.css';
import Arms from '../img/Layer_13_copy_8.svg';
import Legs from '../img/Leg.svg';
import Gherkins from '../img/gherkins.svg';
import Copy from '../img/Layer_18.svg';
import Img_Human from '../img/Layer_5_copy.svg';
import Female from '../img/white.svg';
import cn from "classnames";
import ReactTooltip from 'react-tooltip'

const sexImgData = {
    male: Img_Human,
    female: Female,
};

const skinData = {
    white: " ",
    black:"black_man",
}

const col_arm = {
    arm1:'Не хватает одной ручки',
    arm_more: ' '
}
const col_leg = {
    leg1:'одной ножки',
    leg_more: ' '
}
const col_gherkin = {
    gherkin2:'и огуречика ',
    gherkin_more: ''
}
const col_money = {
    money1:'и денег',
    money_more: ' '
}
class Production extends React.Component {

    state = {
        sex: null,
        skin:null,
        qualityArm:'Не хватает двух ручек',
        qualityLeg:'двух ножек',
        qualityGherkin:'и огуречика',
        qualityMoney:' ',
    };

    handleChangeSex = (gender) => () => {
        this.setState({sex: gender});
    };

    handleChangeSkin = (color) => () => {
        this.setState({skin: color});
    };

    handleBuyHuman = (arm, leg, gherkin, money) => () => {
        this.props.saleHuman(money);
        this.props.changeArm(arm);
        this.props.changeLeg(leg);
        this.props.changeGherkin(gherkin);
    };

    componentDidUpdate(prevProps) {
        const {arm} = this.props;
        const {arm: prevArm} = prevProps;
        const {leg} = this.props;
        const {leg: prevLeg} = prevProps;
        const {gherkin} = this.props;
        const {gherkin: prevGherkin} = prevProps;
        const {money} = this.props;
        const {money: prevMoney} = prevProps;

        if (arm !== prevArm) {
            this.updateQualityArm();
        }else if (leg !== prevLeg){
            this.updateQualityLeg();
        }else if (gherkin !== prevGherkin){
            this.updateQualityGherkin();
        }else if (money !== prevMoney){
            this.updateQualityMoney();
        }
    }


    updateQualityArm(){
        const {arm}= this.props;
        let arms = '';

        if (arm < 2 && arm >= 1){
            arms = col_arm.arm1
        }else if (arm == 0 ){
            arms = 'Не хватает двух ручек'
        }else{
            arms = col_arm.arm_more
        };

        this.setState({
            qualityArm: arms
        });
    }

    updateQualityLeg(){
        const {leg}= this.props;
        let legs = '';

        if (leg < 2 && leg >= 1 ){
            legs = col_leg.leg1
        }else if (leg == 0){
            legs = 'двух ножек'
        }else{
            legs = col_leg.leg_more
        };

        this.setState({
            qualityLeg: legs
        });
    }

    updateQualityGherkin(){
        const {gherkin}= this.props;
        let gherkins = '';

        if (gherkin < 1 ){
            gherkins = col_gherkin.gherkin2
        }else if (gherkin == 0) {
            gherkins = 'и огуречика'
        }else {
            gherkins = col_gherkin.gherkin_more
        };

        this.setState({
            qualityGherkin: gherkins
        });
    }

    updateQualityMoney(){
        const {money}= this.props;
        let moneys = '';

        if (money < 10 && money !== 10){
            moneys = col_money.money1
        }else if (money >= 10){
            moneys = ''
        }else {
            moneys= col_money.money_more
        };

        this.setState({
            qualityMoney: moneys
        });
    }

    render(){
        const {money} = this.props;
        const {arm}= this.props;
        const {leg} = this.props;
        const {gherkin} = this.props;
        return (
            <div className="more_production">
                <div className="sex_and_ingredients">
                  <div className="sex">
                      <div className="more_sex">
                        <label className="sex_name">Пол:</label>
                          <input type="radio" id="man"  name="button" onClick={this.handleChangeSex('male')}/><label className="label_man" for="man">Мужчина</label>
                          <input type="radio" id="female" name="button" onClick={this.handleChangeSex('female')}/><label className="label_female" for="female">Женщина</label>
                      </div>
                      <div className="sex_color">
                        <label className="color_name">Цвет:</label>
                        <input type="radio" id="white" name="selector" onClick={ this.handleChangeSkin(" ") }/><label className="label_color" for="white">Белый</label>
                        <input type="radio" id="black" name="selector" onClick={ this.handleChangeSkin("black_man") }/><label className="label_color" for="black">Черный</label>
                      </div>
                  </div>
                  <div className="ingredients">
                    <div className="legs_arms_gherkin">
                      <img src={Arms} className={cn("", {disabled_ingredients: arm < 1})}/>
                      <img src={Arms} className={cn("", {disabled_ingredients: arm < 2})}/>
                      <img src={Legs} className={cn("", {disabled_ingredients: leg < 1})}/>
                      <img src={Legs} className={cn("", {disabled_ingredients: leg < 2})}/>
                      <img src={Gherkins} className={cn("", {disabled_ingredients: gherkin < 1})}/>
                    </div>
                  </div>
                </div>
                  <div className="make">
                        <div className="make_arrow" >
                            <div className="arrow_left"></div>
                            <img src={Copy} data-tip={`${this.state.qualityArm} ${this.state.qualityLeg}  ${this.state.qualityGherkin} ${this.state.qualityMoney}`}/>
                            <div className="arrow_right"></div>
                        </div>
                      <button className={cn("create_human", {disabled: arm < 2 || leg < 2 || gherkin < 1 ||money < 10})} onClick={this.handleBuyHuman(-2, -2, -1, -10)}>Создать человечка </button><p className="create_human_text">за 10 монет</p>
                  </div>
                    <div className="human">
                        <div datasrc={skinData[this.state.skin]}  className={this.state.skin}>
                            <img src={sexImgData[this.state.sex]} className={cn("", {disabled_ingredients: arm < 2 || leg < 2 || gherkin < 1})}/>
                        </div>
                    </div>
                <ReactTooltip
                    className='extraClass'
                    insecure={true}
                    delayHide={10000000000}
                    effect='solid'
                />
            </div>
        );
    }
}

export default Production;
