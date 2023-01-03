import React from 'react'
import './Reset.css'
import './Calculator.css'
import { useState } from 'react'

export default function Calculator() {
    const [number, setNumber] = useState('')
    const [oldNumber, setOldNumber] = useState('')
    const [operator, setOperator] = useState()

    function inputNumber(e) {
        let inputValue = e.target.value
        setNumber(number + inputValue)
    }

    function clearResult(e) {
        setNumber('')
    }

    function percetage() {
        setNumber(number / 100)
    }

    function changeSign() {
        if (number >= 0) setNumber(-number)
        else setNumber(Math.abs(number))
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNumber(number)
        setNumber('')
    }

    function calculate() {
        if(operator === '/') setNumber(oldNumber / number)
        else if(operator === 'x') setNumber(oldNumber * number)
        else if(operator === '-') setNumber(oldNumber - number)
        else if(operator === '+') setNumber(Number(oldNumber) + Number(number))
    }

    return (
            <div className='container'>
                <div className="calculator">
                    <h1>Calculator</h1>

                    <div className="result">{number}</div>

                    <div className="keyboard">
                        <div className="keyboard-line">
                        <button onClick={clearResult} className='gray-100'>AC</button>
                        <button onClick={changeSign} className='gray-100'>+/-</button>
                        <button onClick={percetage} className='gray-100'>%</button>
                        <button onClick={operatorHandler} value={'/'} className='orange'>/</button>
                        </div>

                        <div className="keyboard-line">
                        <button onClick={inputNumber} value={7}>7</button>
                        <button onClick={inputNumber} value={8}>8</button>
                        <button onClick={inputNumber} value={9}>9</button>
                        <button onClick={operatorHandler} value={'x'} className='orange'>x</button>
                        </div>

                        <div className="keyboard-line">
                            <button onClick={inputNumber} value={4}>4</button>
                            <button onClick={inputNumber} value={5}>5</button>
                            <button onClick={inputNumber} value={6}>6</button>
                            <button onClick={operatorHandler} value={'-'} className='orange'>-</button>
                        </div>

                        <div className="keyboard-line">
                            <button onClick={inputNumber} value={1}>1</button>
                            <button onClick={inputNumber} value={2}>2</button>
                            <button onClick={inputNumber} value={3}>3</button>
                            <button onClick={operatorHandler} value={'+'} className='orange'>+</button>
                        </div>

                        <div className="keyboard-line">
                            <button onClick={inputNumber} value={0} className='zero-btn'>0</button>
                            <button onClick={inputNumber} value={'.'}>.</button> {/* MODIFICAR - PERMITR APENAS UM . */}
                            <button onClick={calculate} className='orange'>=</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}