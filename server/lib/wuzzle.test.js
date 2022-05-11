import { it, expect } from "vitest";
import { wuzzle } from "./wuzzle"

it("word should be 6 letters long", () => {
    expect(wuzzle.length).toBe(6);
})