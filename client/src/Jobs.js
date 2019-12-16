import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


import Job from "./Job";

export default function Jobs({jobs}){

    const [activeStep, setActiveStep] = useState(0);

    function handleNext(){
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack(){
        setActiveStep(prevActiveStep => prevActiveStep -1);
    }

    return(
        <div className="jobs">
          <Typography variant="h4" component="h1">
              Entry Level Software Jobs
          </Typography>
          {
              jobs.map(
                  (job, i) => <Job key={i}job={job} />
              )
          }

        <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                Next
                <KeyboardArrowLeft /><KeyboardArrowRight />
                </Button>
            }
            backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <KeyboardArrowRight /><KeyboardArrowLeft />
                Back
                </Button>
            }
            />
        </div>
    )
};