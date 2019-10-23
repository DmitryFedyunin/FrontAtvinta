import React from 'react';
import '../css/production.css';
import Arms from '../img/Layer_13_copy_8.svg';
import Legs from '../img/Leg.svg';
import Gherkins from '../img/gherkins.svg';
import Copy from '../img/Layer_18.svg';
import Img_Human from '../img/Layer_5_copy.svg';
import Female from '../img/white.svg';
import cn from "classnames";
//import ReactTooltip from 'react-tooltip'
import Modal from 'react-modal';
//import Man_Gost from '../img/not_created.svg';

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
    gherkin1:'и огуречика ',
    gherkin_more: ''
}
const col_money = {
    money1:'и денег',
    money_more: ' '
}

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)'
    }
};
class Production extends React.Component {

    state = {
        sex: null,
        skin:null,
        qualityArm:'Не хватает двух ручек',
        qualityLeg:'двух ножек',
        qualityGherkin:'и огуречика',
        qualityMoney:' ',
        showModal: false,
    };
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    handleChangeSex = (gender) => () => {
        this.setState({sex: gender});
    };


    handleChangeSkin = (color) => () => {
        this.setState({skin: color});
    };

    handleBuyHuman = ( money, arm2, leg2, gherkin2) => () => {
        this.props.saleHuman(money);
        this.props.changeArm2(arm2);
        this.props.changeLeg2(leg2);
        this.props.changeGherkin2(gherkin2);
        this.handleOpenModal();
    };

    componentDidUpdate(prevProps) {
        const {arm2} = this.props;
        const {arm2: prevArm} = prevProps;
        const {leg2} = this.props;
        const {leg2: prevLeg} = prevProps;
        const {gherkin2} = this.props;
        const {gherkin2: prevGherkin} = prevProps;
        const {money} = this.props;
        const {money: prevMoney} = prevProps;

        if (arm2 !== prevArm) {
            this.updateQualityArm();
        }else if (leg2 !== prevLeg){
            this.updateQualityLeg();
        }else if (gherkin2 !== prevGherkin){
            this.updateQualityGherkin();
        }else if (money !== prevMoney){
            this.updateQualityMoney();
        }
    }


    updateQualityArm(){
        const {arm2}= this.props;
        let arms = '';

        if (arm2 < 2 && arm2 >= 1){
            arms = col_arm.arm1
        }else if (arm2 == 0 ){
            arms = 'Не хватает двух ручек'
        }else{
            arms = col_arm.arm_more
        };

        this.setState({
            qualityArm: arms
        });
    }

    updateQualityLeg(){
        const {leg2}= this.props;
        let legs = '';

        if (leg2 < 2 && leg2 >= 1 ){
            legs = col_leg.leg1
        }else if (leg2 == 0){
            legs = 'двух ножек'
        }else{
            legs = col_leg.leg_more
        };

        this.setState({
            qualityLeg: legs
        });
    }

    updateQualityGherkin(){
        const {gherkin2}= this.props;
        let gherkins = '';

        if (gherkin2 < 1 ){
            gherkins = col_gherkin.gherkin1
        }else if (gherkin2 == 0) {
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
        const  {arm2} = this.props;
        const  {leg2} = this.props;
        const  {gherkin2} = this.props;
        return (
            <div className="more_production">
                <div className="sex_and_ingredients">
                  <div className="sex">
                      <div className="more_sex">
                        <label className="sex_name">Пол:</label>
                          <input type="radio" id="man"  name="button" onChange={this.handleChangeSex('male')}/><label className="label_man" for="man">Мужчина</label>
                          <input type="radio" id="female" name="button" onChange={this.handleChangeSex('female')}/><label className="label_female" for="female">Женщина</label>
                      </div>
                      <div className="sex_color">
                        <label className="color_name">Цвет:</label>
                        <input type="radio" id="white" name="answer" onChange={ this.handleChangeSkin(" ")} /><label className="label_color" for="white">Белый</label>
                        <input type="radio" id="black" name="answer" onChange={ this.handleChangeSkin("black_man") }/><label className="label_color" for="black">Черный</label>
                      </div>
                  </div>
                  <div className="ingredients">
                    <div className="legs_arms_gherkin">
                      <img src={Arms} className={cn("", {disabled_ingredients: arm2 < 1})}/>
                      <img src={Arms} className={cn("", {disabled_ingredients: arm2 < 2})}/>
                      <img src={Legs} className={cn("", {disabled_ingredients: leg2 < 1})}/>
                      <img src={Legs} className={cn("", {disabled_ingredients: leg2 < 2})}/>
                      <img src={Gherkins} className={cn("", {disabled_ingredients: gherkin2 < 1})}/>
                    </div>
                  </div>
                </div>
                  <div className="make">
                      <Modal
                          isOpen={this.state.showModal}
                          onRequestClose={this.handleCloseModal}
                          shouldCloseOnOverlayClick={false}
                          style={customStyles}
                          className="modal"
                      >
                          <p className="modal_text">Человечек создан!</p>
                          <button className="create_human" onClick={this.handleCloseModal.bind(this)}>закрыть</button>
                      </Modal>
                      <div className="extraClass"> {this.state.qualityArm} {this.state.qualityLeg}  {this.state.qualityGherkin} {this.state.qualityMoney} </div>
                        <div className="make_arrow" >
                            <div className="arrow_left"></div>
                            <img src={Copy} />
                            <div className="arrow_right"></div>
                        </div>
                      <button className={cn("create_human", {disabled: arm2 < 2 || leg2 < 2 || gherkin2 < 1 ||money < 10})} onClick={this.handleBuyHuman( -10,-2,-2,-1)}>Создать человечка </button><p className="create_human_text">за 10 монет</p>

                  </div>
                    <div className="human">
                        <div datasrc={skinData[this.state.skin]}  className={this.state.skin}>
                            <img srcSet={sexImgData[this.state.sex]} src={Img_Human}  className={cn("", {disabled_ingredients: arm2 < 2 || leg2 < 2 || gherkin2 < 1 || money < 10})}/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Production;
/*
<ReactTooltip
    className='extraClass'
    insecure={true}
    delayHide={10000000000}
    effect='solid'
/>
data-tip={`${this.state.qualityArm} ${this.state.qualityLeg}  ${this.state.qualityGherkin} ${this.state.qualityMoney}`}*/