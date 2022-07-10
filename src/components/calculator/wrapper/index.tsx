import "./wrapper.calculator.scss";
import {Component, ReactNode} from "react";

class Wrapper extends Component<{ children: ReactNode }> {
    render() {
        let {children} = this.props;
        return <div className="calculator-outer">{children}</div>;
    }
}

export default Wrapper;
