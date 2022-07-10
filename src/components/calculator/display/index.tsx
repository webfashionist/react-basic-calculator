import "./display.calculator.scss";
import {Component} from "react";

class Display extends Component<{ value: number | string, result: number | string, sign: string }> {
    render() {
        let {value, result, sign} = this.props;
        value = value.toLocaleString();
        result = result.toLocaleString();
        return <div className="calculator-display">
            <div className="calculator-display-input">{result} <span className={"calculator-display-sign"}>{sign}</span> </div>
            <div className="calculator-display-value">{value}</div>
        </div>;
    }
}

export default Display;
