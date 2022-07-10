import Wrapper from "./wrapper";
import Display from "./display";
import ButtonBox from "./buttonbox";
import './calculator.scss';
import Button from "./button";
import {useState} from "react";
import Calculate from "../../services/calculate";

const Calculator = () => {

    const buttonValues = [
        ['C', '+-', '%', '/'],
        [7, 8, 9, '*'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '⇽', '='],
    ]

    let [calc, setCalc] = useState({
        sign: "",
        input: 0,
        result: 0
    });

    return (
        <Wrapper>
            <div className={"calculator"}>
                <Display sign={calc.sign} value={calc.input} result={calc.result ? calc.result : ''} />
                <ButtonBox>
                    {
                        buttonValues.flat().map((button, i) => {
                            return (
                                <Button
                                    key={i}
                                    value={button}
                                    onClick={() => {
                                        const calculate = new Calculate();
                                        setCalc(calculate.input(button, calc));
                                    }}
                                />
                            );
                        })
                    }
                </ButtonBox>
            </div>
        </Wrapper>
    );
};

export default Calculator;
