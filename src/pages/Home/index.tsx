import { useState } from "react";

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
    const [expression, setExpression] = useState("1 + 1 ");
    const [result, setResult] = useState("2");

    function addValue(value: string) {
        if (!value) {
            return;
        }

        switch (value) {
            case "=":
                break;
            default:
                const updateValues = [...values, value];
                setValues(updateValues);

                setExpression(updateValues.join(""));
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
                    <Button type="mixed" text="CE" />
                    <Button text="C" />
                    <Button icon={Percent} />
                    <Button type="purple" icon={Divide} />

                    <Button text="7"/>
                    <Button text="8" />
                    <Button text="9" />
                    <Button type="purple" icon={Times} />

                    <Button text="4" />
                    <Button text="5" />
                    <Button text="6" />
                    <Button type="purple" icon={Minus} />

                    <Button text="1" />
                    <Button text="2" />
                    <Button text="3" />
                    <Button type="purple" icon={Plus} />

                    <Button icon={PlusMinus} />
                    <Button text="0" />
                    <Button text="," />
                    <Button type="purple" icon={Equal} />
                </div>
            </div>
        </div>
    );
}
