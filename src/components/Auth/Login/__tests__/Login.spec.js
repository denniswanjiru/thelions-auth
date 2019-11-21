import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Login from "../Login";

describe("AccountLinkingModal", () => {
  const makeWrapper = (mocks, myProps) => (
    render(
      <BrowserRouter>
        <Login {...myProps} />
      </BrowserRouter>
    )
  );

  it("should successfully be rendered", () => {
    const wrapper = makeWrapper([], { accountExists: false });
    expect(wrapper.getByText("Account Login")).toBeDefined();
  });
});
