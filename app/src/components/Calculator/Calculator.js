import React from 'react';
import calculatorImg from '../../calculator.png';

class Calculator extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            header: "Calculator",
            display: "0",
            operator: "",
            temp: 0,
            resetDisplay: false
        }

        this.updateHeader = this.updateHeader.bind(this);
    }

    updateHeader(event) {
        this.setState({
            header: event.target.value
        })
    }

    setDisplay(num) {
        let display = this.state.display === '0' ? num : this.state.display + num;
        if (this.state.display.length < 13) {
            this.setState({
                display: display
            })
        }
        else {
            this.setState({
                display: this.state.display
            })
        }
    }

    setOperator(operator) {
        if (!this.state.operator) {
            this.setState({
                operator: operator,
                display: "0",
                temp: parseInt(this.state.display)
            })
        }
    }

    calculate() {
        if (!this.state.operator) return;
        let result;
        switch (this.state.operator) {
            case '+':
                result = this.state.temp + parseInt(this.state.display, 10);
                break;
            case '-':
                result = this.state.temp - parseInt(this.state.display, 10);
                break;
            case '*':
                result = this.state.temp * parseInt(this.state.display, 10);
                break;
            case '/':
                result = this.state.temp / parseInt(this.state.display, 10);
                break;
            default:
                break;
        }
        this.setState({
            display: String(result)
        })
    }

    clearDisplay() {
        this.setState({
            header: "Calculator",
            display: "0",
            operator: "",
            temp: 0,
            resetDisplay: false
        })
    }

    render() {
        return (
            <div id="calculator-container">
                <input id="header-input" onChange={this.updateHeader} />
                <h1 id="header" value={this.state.header}> { this.state.header } </h1>
                <img className="remove-highlight" src={calculatorImg} alt="calculator" />
                <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                    <span className="total">{ this.state.display }</span>
                </div>

                <div onClick={() => this.clearDisplay()} className="btn clear"></div>

                <div onClick={ () => this.setDisplay('0') } className="btn zero"></div>
                <div onClick={ () => this.setDisplay('1') } className="btn one"></div>
                <div onClick={ () => this.setDisplay('2') } className="btn two"></div>
                <div onClick={ () => this.setDisplay('3') } className="btn three"></div>
                <div onClick={ () => this.setDisplay('4') } className="btn four"></div>
                <div onClick={ () => this.setDisplay('5') } className="btn five"></div>
                <div onClick={ () => this.setDisplay('6') } className="btn six"></div>
                <div onClick={ () => this.setDisplay('7') } className="btn seven"></div>
                <div onClick={ () => this.setDisplay('8') } className="btn eight"></div>
                <div onClick={ () => this.setDisplay('9') } className="btn nine"></div>

                <div onClick={ () => this.calculate() } className="btn equal"></div>
                <div onClick={ () => this.setOperator('*') } className="btn multiply"></div>
                <div onClick={ () => this.setOperator('/') } className="btn divide"></div>
                <div onClick={ () => this.setOperator('-') } className="btn subtract"></div>
                <div onClick={ () => this.setOperator('+') } className="btn add"></div>
                </div>
            </div>
        )
    }
}

export default Calculator;