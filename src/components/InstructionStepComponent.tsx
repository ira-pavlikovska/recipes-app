import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import React from "react";

type Props = {
    step: string,
    handleDeleteInstructionStep: (step: string) => void
}


const InstructionStepComponent = ({step, handleDeleteInstructionStep}: Props) => {

    return (
        <Grid style={{flex: 12, paddingLeft: 120}} container spacing={2}>
            <Grid item xs={10}>
                <div>{step}</div>
            </Grid>
            <Grid item xs={2}>
                <div><Button
                    style={{marginLeft: 15}}
                    onClick={() => handleDeleteInstructionStep(step)}
                >X</Button></div>
            </Grid>
        </Grid>
    );
};
export default InstructionStepComponent;
