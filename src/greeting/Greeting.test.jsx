import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import {describe, it, expect} from "vitest"
import "@testing-library/jest-dom/vitest"

describe("Greeting", () => {
    it("renders a default greeting", () => {
        render(<Greeting />)
        expect(screen.getByText("Hello, World!")) .toBeInTheDocument();
    })

    it("renders with a name", () => {
        render(<Greeting name={"test"}/>)
        expect(screen.getByText("Hello, test")).toBeInTheDocument();
    })
})