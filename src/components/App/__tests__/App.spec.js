import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("AccountLinkingModal", () => {
  const makeWrapper = (mocks, myProps) => (
    render(<App {...myProps} />)
  );

  it("should successfully be rendered", () => {
    const wrapper = makeWrapper();
    expect(wrapper).toMatchSnapshot();
  });
});
