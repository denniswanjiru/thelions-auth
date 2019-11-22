import React from 'react'
import Button from '../../../core/Button';

export default function Education({ history, handleCurrent }) {
  const handleNext = () => {
    handleCurrent(+1);
    history.push("/onboarding/experience");
  }

  const handleBack = () => {
    handleCurrent(-1);
    history.push("/onboarding/experience");
  }

  return (
    <div>
      Eduction

      <div style={{ display: "flex", marginTop: "30px" }}>
        <Button buttonType="ghost" onClick={handleBack} mr={20}>Back</Button>
        <Button buttonType="primary">Submit</Button>
      </div>
    </div>
  )
}
