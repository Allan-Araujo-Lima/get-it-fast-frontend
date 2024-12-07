import { Input } from "@/components/ui/input";
import { NumericFormat } from "react-number-format";

export const MonetaryInput = ({ value, onChange, ...props }: any) => {
    return (
        <NumericFormat
            value={value}
            displayType="input"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={2}
            customInput={Input}
            prefix="R$ "
            allowNegative={false}
            isAllowed={(values) => values.floatValue === undefined || values.floatValue <= 1000000}
            onValueChange={(values) => {
                onChange(values.floatValue);
            }}
            {...props}
        />
    )
}

export const AmountInput = ({ value, onChange, ...props }: any) => {
    return (
        <NumericFormat
            value={value}
            displayType="input"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={0}
            customInput={Input}
            isAllowed={(values) => values.floatValue === undefined || values.floatValue <= 1000000}
            onValueChange={(values) => {
                onChange(values.floatValue);
            }}
            {...props}
        />
    )
}

export const MonetaryOutput = ({ value, ...props }: any) => {
    return (
        <NumericFormat
            value={value}
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
            decimalScale={2}
            fixedDecimalScale={2}
            {...props}
        />
    );
};