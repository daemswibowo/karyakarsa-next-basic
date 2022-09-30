import { render, screen } from "@testing-library/react";
import HelloWorld from "../helloWorld";

describe("HelloWorld component test", () => {
  it("should displaying hello world", async () => {
    render(<HelloWorld />); // panggil component yang akan ditest

    const greeting = await screen.findByTestId("greetings"); // get object dalam component HelloWorld

    expect(greeting).toHaveTextContent("Hello world!"); // expect si component HelloWorld punya text "Hello world!"
  });
});
