import "./button.calculator.scss";
import {Component} from "react";

class Button extends Component<{ value: number | string, onClick: any }> {
    render() {
        let {value, onClick} = this.props;
        let className = "calculator-button";
        switch (value) {
            case 'C':
            case '+-':
            case '%':
                className += " gray";
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                className += " blue";
                break;
            case '=':
                className += " darkblue equals";
                break;
        }
        return <button className={className} onClick={onClick}>{value}</button>;
    }
}

export default Button;
