import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

import Auth from "../Auth";

describe("AccountLinkingModal", () => {
  const makeWrapper = (mocks, myProps) => (
    render(
      <BrowserRouter>
        <Auth {...myProps} />)
      </BrowserRouter>
    )
  );

  it("should successfully be rendered", () => {
    const wrapper = makeWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
