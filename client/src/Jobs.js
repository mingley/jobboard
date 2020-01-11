import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";


import Job from "./Job";
import JobModal from "./JobModal";

export default function Jobs({jobs}){

    //modal
    const [open, setOpen] = React.useState(false);
    const [selectedJob, selectJob] = React.useState({});
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    //pagination
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs/50);

    const [activeStep, setActiveStep] = useState(0); 

    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50 + 50));

    function handleNext(){
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack(){
        setActiveStep(prevActiveStep => prevActiveStep -1);
    }

    return(
        <div className="jobs">
            <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
          <Typography variant="h4" component="h1">
              Entry Level Software Jobs
          </Typography>
          <Typography variant="h6" component="h1">
              Found {numJobs} Jobs.
          </Typography>
          {
              jobsOnPage.map(
                  (job, i) => <Job key={i}job={job} onClick={() => {
                      handleClickOpen();
                      selectJob(job)
                    }}/>
              )
          }

        <div>
            Page {activeStep+1} of {numPages} 
        </div>

        <MobileStepper
            variant="progress"
            steps={Math.ceil(numJobs/50)}
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