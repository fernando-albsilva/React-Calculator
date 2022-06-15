import React from 'react';
import './ButtonsManager.css';
import Button from './button/Button';
import {ButtonOption} from'../models/CalculatorModels'; 

const ButtonsManager = (props) => {

    
    return (
        <div className='ButtonsManager'>
            <div className='grid-container'>
                <Button clazz={'row1col1'}     styleType={'clearButton'}  label={'x'}          onClick={() => {props.onButtonClicked(ButtonOption.clear)}}/>
                <Button clazz={'row1col2'}     styleType={'standard'}     label={'botao2'}/>
                <Button clazz={'row1col3'}     styleType={'standard'}     label={'botao3'}/>
                <Button clazz={'row1col4'}     styleType={'standard'}     label={'botao4'}/>
                <Button clazz={'row1col5'}     styleType={'standard'}     label={'botao5'}/>

                <Button clazz={'row2col1'}     styleType={'standard'}     label={'7'}          onClick={() => {props.onButtonClicked(ButtonOption.seven)}}/>
                <Button clazz={'row2col2'}     styleType={'standard'}     label={'8'}          onClick={() => {props.onButtonClicked(ButtonOption.eight)}}/>
                <Button clazz={'row2col3'}     styleType={'standard'}     label={'9'}          onClick={() => {props.onButtonClicked(ButtonOption.nine)}}/>
                <Button clazz={'row2col4'}     styleType={'standard'}     label={'/'}          onClick={() => {props.onButtonClicked(ButtonOption.divisor)}}/>
                <Button clazz={'row2col5'}     styleType={'standard'}     label={'botao10'}/>

                <Button clazz={'row3col1'}     styleType={'standard'}     label={'4'}          onClick={() => {props.onButtonClicked(ButtonOption.fourth)}}/>
                <Button clazz={'row3col2'}     styleType={'standard'}     label={'5'}          onClick={() => {props.onButtonClicked(ButtonOption.five)}}/>
                <Button clazz={'row3col3'}     styleType={'standard'}     label={'6'}          onClick={() => {props.onButtonClicked(ButtonOption.six)}}/>
                <Button clazz={'row3col4'}     styleType={'standard'}     label={'*'}          onClick={() => {props.onButtonClicked(ButtonOption.multiplier)}}/>
                <Button clazz={'row3col5'}     styleType={'standard'}     label={'botao15'}/>

                <Button clazz={'row4col1'}     styleType={'standard'}     label={'1'}          onClick={() => {props.onButtonClicked(ButtonOption.one)}}/>
                <Button clazz={'row4col2'}     styleType={'standard'}     label={'2'}          onClick={() => {props.onButtonClicked(ButtonOption.two)}}/>
                <Button clazz={'row4col3'}     styleType={'standard'}     label={'3'}          onClick={() => {props.onButtonClicked(ButtonOption.three)}}/>
                <Button clazz={'row4col4'}     styleType={'standard'}     label={'-'}          onClick={() => {props.onButtonClicked(ButtonOption.sub)}}/>
                <Button clazz={'resultButton'} styleType={'resultButton'} label={'='}          onClick={() => {props.onButtonClicked(ButtonOption.result)}}/>

                <Button clazz={'row5col1'}     styleType={'standard'}     label={'0'}          onClick={() => {props.onButtonClicked(ButtonOption.zero)}}/>
                <Button clazz={'row5col2'}     styleType={'standard'}     label={','}          onClick={() => {props.onButtonClicked(ButtonOption.comma)}}/>
                <Button clazz={'row5col3'}     styleType={'standard'}     label={'%'}/>
                <Button clazz={'row5col4'}     styleType={'standard'}     label={'+'}          onClick={() => {props.onButtonClicked(ButtonOption.sum)}}/>
            </div>
        </div>
    );
}

export default ButtonsManager;