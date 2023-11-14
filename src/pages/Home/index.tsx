import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./style.scss";

import { Button } from "../../components/Button";

import Equal from "../../assets/equals.svg";
import Divide from "../../assets/divide.svg";
import Minus from "../../assets/minus.svg";
import Percent from "../../assets/percent.svg";
import Plus from "../../assets/plus.svg";
import PlusMinus from "../../assets/plusMinus.svg";
import Times from "../../assets/times.svg";

export function Home() {
    const [values, setValues] = useState<string[]>([]);
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");
    const error = () => {
        toast("invalid format used");
    };

    function evaluatexpression() {
        try {
            const res = eval(expression);
            setResult(res);
        } catch (err) {
            setResult("");
            error();
        }
    }

    function addValue(value: string) {
        if (!value) {
            return;
        }

        setResult("");
        let updatedValues: string[];

        switch (value) {
            case "CE":
                setValues([]);
                setExpression("");
                break;
            case "C":
                updatedValues = values.slice(0, values.length - 1);
                setValues(updatedValues);
                setExpression(updatedValues.join(""));
                break;
            case "=":
                evaluatexpression();
                break;
            default:
                updatedValues = [...values, value];
                setValues(updatedValues);
                setExpression(updatedValues.join(""));
                break;
        }
    }

    return (
        <div className="Container">
            <div className="Content">
                <div className="Expression">
                    <span>{expression}</span>
                </div>

                <div className="Result">
                    <span>=</span>

                    <span>{result}</span>
                </div>

                <div className="Numbers">
                    <Button type="mixed" text="CE" onClick={addValue} />
                    <Button text="C" onClick={addValue} />
                    <Button text="%" icon={Percent} onClick={addValue} />
                    <Button
                        text="/"
                        type="purple"
                        icon={Divide}
                        onClick={addValue}
                    />

                    <Button text="7" onClick={addValue} />
                    <Button text="8" onClick={addValue} />
                    <Button text="9" onClick={addValue} />
                    <Button
                        text="*"
                        type="purple"
                        icon={Times}
                        onClick={addValue}
                    />

                    <Button text="4" onClick={addValue} />
                    <Button text="5" onClick={addValue} />
                    <Button text="6" onClick={addValue} />
                    <Button
                        text="-"
                        type="purple"
                        icon={Minus}
                        onClick={addValue}
                    />

                    <Button text="1" onClick={addValue} />
                    <Button text="2" onClick={addValue} />
                    <Button text="3" onClick={addValue} />
                    <Button
                        text="+"
                        type="purple"
                        icon={Plus}
                        onClick={addValue}
                    />

                    <Button text="#" icon={PlusMinus} onClick={addValue} />
                    <Button text="0" onClick={addValue} />
                    <Button text="." onClick={addValue} />
                    <Button
                        text="="
                        type="purple"
                        icon={Equal}
                        onClick={addValue}
                    />
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                theme="dark"
            />
        </div>
    );
}
