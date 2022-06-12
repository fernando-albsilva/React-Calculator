import React from 'react';
import './ButtonsManager.css';
import Button from './button/Button';
import {ButtonOption} from'../models/CalculatorModels'; 

const ButtonsManager = (props) => {

    
    return (
        <div className='ButtonsManager'>
            <div class='grid-container'>
                <Button class={'row1col1'}     styleType={'clearButton'}  label={'x'}          onClick={() => {props.onButtonClicked(ButtonOption.clear)}}/>
                <Button class={'row1col2'}     styleType={'standard'}     label={'botao2'}/>
                <Button class={'row1col3'}     styleType={'standard'}     label={'botao3'}/>
                <Button class={'row1col4'}     styleType={'standard'}     label={'botao4'}/>
                <Button class={'row1col5'}     styleType={'standard'}     label={'botao5'}/>

                <Button class={'row2col1'}     styleType={'standard'}     label={'7'}          onClick={() => {props.onButtonClicked(ButtonOption.seven)}}/>
                <Button class={'row2col2'}     styleType={'standard'}     label={'8'}          onClick={() => {props.onButtonClicked(ButtonOption.eight)}}/>
                <Button class={'row2col3'}     styleType={'standard'}     label={'9'}          onClick={() => {props.onButtonClicked(ButtonOption.nine)}}/>
                <Button class={'row2col4'}     styleType={'standard'}     label={'/'}          onClick={() => {props.onButtonClicked(ButtonOption.divisor)}}/>
                <Button class={'row2col5'}     styleType={'standard'}     label={'botao10'}/>

                <Button class={'row3col1'}     styleType={'standard'}     label={'4'}          onClick={() => {props.onButtonClicked(ButtonOption.fourth)}}/>
                <Button class={'row3col2'}     styleType={'standard'}     label={'5'}          onClick={() => {props.onButtonClicked(ButtonOption.five)}}/>
                <Button class={'row3col3'}     styleType={'standard'}     label={'6'}          onClick={() => {props.onButtonClicked(ButtonOption.six)}}/>
                <Button class={'row3col4'}     styleType={'standard'}     label={'*'}          onClick={() => {props.onButtonClicked(ButtonOption.multiplier)}}/>
                <Button class={'row3col5'}     styleType={'standard'}     label={'botao15'}/>

                <Button class={'row4col1'}     styleType={'standard'}     label={'1'}          onClick={() => {props.onButtonClicked(ButtonOption.one)}}/>
                <Button class={'row4col2'}     styleType={'standard'}     label={'2'}          onClick={() => {props.onButtonClicked(ButtonOption.two)}}/>
                <Button class={'row4col3'}     styleType={'standard'}     label={'3'}          onClick={() => {props.onButtonClicked(ButtonOption.three)}}/>
                <Button class={'row4col4'}     styleType={'standard'}     label={'-'}          onClick={() => {props.onButtonClicked(ButtonOption.divisor)}}/>
                <Button class={'resultButton'} styleType={'resultButton'} label={'='}          onClick={() => {props.onButtonClicked(ButtonOption.result)}}/>

                <Button class={'row5col1'}     styleType={'standard'}     label={'0'}          onClick={() => {props.onButtonClicked(ButtonOption.zero)}}/>
                <Button class={'row5col2'}     styleType={'standard'}     label={','}          onClick={() => {props.onButtonClicked(ButtonOption.comma)}}/>
                <Button class={'row5col3'}     styleType={'standard'}     label={'%'}          onClick={() => {props.onButtonClicked('%')}}/>
                <Button class={'row5col4'}     styleType={'standard'}     label={'+'}          onClick={() => {props.onButtonClicked(ButtonOption.sum)}}/>
            </div>
        </div>
    );
}

export default ButtonsManager;