import React, {useState} from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import AlternativeSuperDoubleRange from "./common/c8-SuperDoubleRange/AlternativeSuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);
    const onChangeRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{textAlign: "center"}}>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    value={value1}
                    onChangeRange={setValue1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                   value={[value1, value2]}
                   onChangeRange={onChangeRange}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            AlternativeSuperDoubleRange
            I've tried =)
            <div>
                <span>{value1}</span>
                <AlternativeSuperDoubleRange max={value2} min={value1} setValue1={setValue1} setValue2={setValue2}/>
                <span>{value2}</span>
            </div>

            <hr/>
        </div>
    );
}

export default HW11;
