import Posts from "@/app/post/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Test Load Page", () => {
  it("render page", () => {
    render(<Posts />);
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
})