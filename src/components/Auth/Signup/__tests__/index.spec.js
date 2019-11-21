import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Signup from "../Signup";

describe("AccountLinkingModal", () => {
  const makeWrapper = (mocks, myProps) => (
    render(
      <BrowserRouter>
        <Signup {...myProps} />
      </BrowserRouter>
    )
  );

  it("should successfully be rendered", () => {
    const wrapper = makeWrapper([], { accountExists: false });
    expect(wrapper.getByText("Create Account")).toBeDefined();
  });
});
