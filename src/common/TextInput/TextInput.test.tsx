import React from "react";
import renderer from "react-test-renderer";
import TextInput from "./TextInput";

describe("TextInput Block", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TextInput
          label={""}
          onChange={function (value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
