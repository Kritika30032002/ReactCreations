import React, { useState, useEffect } from "react";
import { Slider } from "baseui/slider";
import { Button, SHAPE } from "baseui/button";
import generator from "generate-password";
import { Checkbox, LABEL_PLACEMENT } from "baseui/checkbox";
import "./main.css";

const Main = () => {
  const [value, setValue] = useState([10]);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [lower, setLower] = useState(false);
  const [upper, setUpper] = useState(false);
  const [similar, setSimilar] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState("");

  const generate = () => {
    if (symbols || lower || upper || numbers) {
      var password = generator.generate({
        length: value,
        numbers: numbers,
        uppercase: upper,
        lowercase: lower,
        symbols: symbols,
        excludeSimilarCharacters: similar,
      });
      setResults(password);
      setShowResults(true);
    } else {
      alert("Tick atleast one from numbers, symbols, uppercase & lowercase");
    }
  };

  return (
    <div className="container">
      <h1
        style={{
          fontSize: 24,
          textAlign: "center",
        }}>
        Select the length of Password
      </h1>
      <Slider
        value={value}
        max={20}
        onChange={({ value }) => value && setValue(value)}
        onFinalChange={({ value }) => console.log(value)}
      />
      <div className="box">
        <Checkbox
          checked={numbers}
          onChange={(e) => setNumbers((prev) => !prev)}
          labelPlacement={LABEL_PLACEMENT.right}>
          include numbers
        </Checkbox>
        <Checkbox
          checked={symbols}
          onChange={(e) => setSymbols((prev) => !prev)}
          labelPlacement={LABEL_PLACEMENT.right}>
          include symbols
        </Checkbox>
        <Checkbox
          checked={lower}
          onChange={(e) => setLower((prev) => !prev)}
          labelPlacement={LABEL_PLACEMENT.right}>
          include lowercase
        </Checkbox>
        <Checkbox
          checked={upper}
          onChange={(e) => setUpper((prev) => !prev)}
          labelPlacement={LABEL_PLACEMENT.right}>
          include uppercase
        </Checkbox>
        <Checkbox
          checked={similar}
          onChange={(e) => setSimilar((prev) => !prev)}
          labelPlacement={LABEL_PLACEMENT.right}>
          exclude similar characters
        </Checkbox>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}>
        <Button
          style={{ margin: 20, width: "50%", backgroundColor: "#011A31" }}
          onClick={() => generate()}
          shape={SHAPE.pill}>
          Generate
        </Button>
      </div>
      <div className="result">
        {showResults ? (
          <p style={{ textAlign: "center", fontSize: 20, width: "100%" }}>
            {results}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
