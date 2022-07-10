import "./buttonbox.calculator.scss";
import {Component, ReactNode} from "react";

class ButtonBox extends Component<{ children: ReactNode }> {



    render() {
        return (
            <div className="calculator-buttonbox">
                {this.props.children}
            </div>
        );
    }
}

export default ButtonBox;
