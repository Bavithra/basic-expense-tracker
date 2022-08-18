import React from "react";
import DatePicker from "./DatePicker";
import renderer from "react-test-renderer";

describe("DatePicker Block", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <DatePicker
          selectedDate={new Date()}
          placeholder={'Select Date'}
          onChange={function (date: Date | null): void {
            throw new Error("Function not implemented.");
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
