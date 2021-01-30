import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    // onChangeRange: ( value: [number, number]) => void
    //  value: [number, number]
    setValue1: (min: number) => void
    setValue2: (max: number) => void
    min: number
    max: number
}

const AlternativeSuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        min, max, setValue1, setValue2,
        ...restProps
    }
) => {


    return (
        <>
            DoubleRange
            <div style={{position: "relative", textAlign: "center"}}>
                <input
                    style={{transform: "rotate(-180deg)", position: "absolute"}}
                    type={"range"}
                    onChange={(e) => setValue1(+e.currentTarget.value)}
                    value={100 - min}
                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    //min={-150}
                />
                <input
                    style={{position: "absolute", zIndex: "auto", }}
                    type={"range"}
                    onChange={(e) => setValue2(+e.currentTarget.value)}
                    value={max}

                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)

                />

            </div>

        </>
    );
}

export default AlternativeSuperDoubleRange;
