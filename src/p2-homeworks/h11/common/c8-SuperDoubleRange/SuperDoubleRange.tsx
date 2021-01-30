import React, {ChangeEvent} from "react";
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
   onChangeRange: ( value: number[]) => void
    value: number[]

}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        ...restProps
    }
) => {
        const handleChange = (event: any, newValue: number | number[]) => {
            onChangeRange(newValue as number[]);
        };

    return (
        <>
            DoubleRange
            <Slider
                style={{textAlign: "center", width: "300px", }}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
