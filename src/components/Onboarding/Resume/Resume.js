import React from 'react'

import Button from '../../../core/Button';

export default function Resume({ handleCurrent, history }) {
  const handleNext = () => {
    handleCurrent(+1);
    history.push("/onboarding/personal-info");
  }
  return (
    <div>
      Resume

      <div style={{ display: "flex" }}>
        <Button buttonType="primary" onClick={handleNext}>Next</Button>
      </div>
    </div>
  )
}
