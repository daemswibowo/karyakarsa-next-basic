import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../button";

describe("Button component test", function () {
  it("teks button nya harus bisa diganti-ganti", async function () {
    // isi logic test
    render(<Button>Klik saya</Button>);

    const button = await screen.findByTestId("tombol");

    expect(button).toHaveTextContent("Klik saya");
  });

  it("button nya harus bisa diklik", async () => {
    const func = jest.fn();

    render(<Button onClick={func}>Klik saya</Button>);

    const button = await screen.findByTestId("tombol");

    fireEvent.click(button);

    expect(func).toBeCalledTimes(1);
  });
});
