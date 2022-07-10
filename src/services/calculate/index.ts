import {CalculationSettings} from "./calculationSettings";

export default class Calculate {

    public input (buttonValue: string | number, calculationSettings: CalculationSettings) {
        switch (buttonValue) {
            case 'C':
                return Calculate.resetHandler();
            case '+-':
                return Calculate.invertHandler(calculationSettings);
            case '%':
                return Calculate.percentHandler(calculationSettings);
            case '=':
                return Calculate.equalsHandler(calculationSettings);
            case '+':
            case '-':
            case '*':
            case '/':
                return Calculate.signHandler(calculationSettings, buttonValue);
            case '⇽':
                return Calculate.deleteHandler(calculationSettings);
            case '.':
                return Calculate.commaHandler(calculationSettings, buttonValue);
            default:
                return Calculate.numberHandler(calculationSettings, buttonValue.toString());

        }
    }

    private static numberHandler (settings: CalculationSettings, buttonValue: string): CalculationSettings {
        if (settings.input.toString().length > 15) {
            return settings;
        }
        return {
            sign: settings.sign,
            // @ts-ignore
            input: buttonValue === '0' && this.hasComma(settings) ? settings.input + '' + buttonValue : Number(settings.input + '' + buttonValue),
            result: Number(settings.result)
        }
    }

    private static hasComma (settings: CalculationSettings): boolean {
        return settings.input.toString().includes('.');
    }

    private static commaHandler (settings: CalculationSettings, buttonValue: string): CalculationSettings {
        if (this.hasComma(settings)) {
            return settings;
        }
        return {
            sign: settings.sign,
            // @ts-ignore
            input: settings.input.toString() + '.',
            result: settings.result
        }
    }

    private static signHandler (settings: CalculationSettings, buttonValue: string): CalculationSettings {
        return {
            sign: buttonValue,
            input: 0,
            result: settings.input ? Number(settings.input) : settings.result
        }
    }

    private static equalsHandler (settings: CalculationSettings): CalculationSettings {
        const result = this.calculateHandler(settings);
        return {
            sign: '',
            input: result,
            result: 0
        }
    }

    private static invertHandler (settings: CalculationSettings): CalculationSettings {
        return {
            sign: settings.sign,
            input: Number(settings.input) * -1,
            result: settings.result
        }
    }

    private static deleteHandler (settings: CalculationSettings): CalculationSettings {
        if (settings.input.toString().length === 1) {
            return {
                sign: settings.sign,
                input: 0,
                result: settings.result
            }
        }
        return {
            sign: settings.sign,
            input: settings.input.toString().slice(0, -1),
            result: settings.result
        }
    }

    private static resetHandler (): CalculationSettings {
        return {
            sign: '',
            input: 0,
            result: 0,
        }
    }

    private static percentHandler (settings: CalculationSettings): CalculationSettings {
        const input = settings.input ? parseFloat(settings.input.toString()) : 0;
        const result = settings.result ? parseFloat(settings.result.toString()) : 0;
        return {
            sign: settings.sign,
            input: (input / Math.pow(100, 1)),
            result: (result / Math.pow(100, 1))
        }
    }

    private static calculateHandler (settings: CalculationSettings): number {
        switch (settings.sign) {
            case '-':
                return Number(settings.result) - Number(settings.input);
            case '+':
                return Number(settings.result) + Number(settings.input);
            case '/':
                if (settings.input === 0) {
                    return 0;
                }
                return Number(settings.result) / Number(settings.input);
            case '*':
            case 'X':
                return Number(settings.result) * Number(settings.input);
        }
        return settings.result;
    }

}
