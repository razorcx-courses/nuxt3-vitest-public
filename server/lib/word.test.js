import { it, expect } from "vitest";
import { word } from "./word"

it("word should be 4 letters long", () => {
    console.log(word)
    expect(word.length).toBe(4);
})
