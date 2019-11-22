import React from 'react'
import Button from '../../../core/Button';

export default function Experience({ history, handleCurrent }) {
  const handleNext = () => {
    handleCurrent(+1);
    history.push("/onboarding/education");
  }

  const handleBack = () => {
    handleCurrent(-1);
    history.push("/onboarding/personal-info");
  }

  return (
    <div>
      Experience

      <div style={{ display: "flex" }}>
        <Button buttonType="ghost" onClick={handleBack} style={{ marginRight: "20px!important" }}>Back</Button>
        <Button buttonType="primary" onClick={handleNext}>Next</Button>
      </div>
    </div>
  )
}
