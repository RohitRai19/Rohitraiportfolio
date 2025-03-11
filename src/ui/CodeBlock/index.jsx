import React from "react";
import "./CodeBlock.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock({ language,code }) {
  return (
    <div className="code__block">
      <div className="flex__center dot__container">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={a11yLight}
        customStyle={{
          background: "rgba(var(--color-primary-rgb),0.03)",
          color: "skyblue",
          padding: "20px",
          fontSize: "14px",
        }}
        wrapLongLines={true}
      >{code}</SyntaxHighlighter>
    </div>
  );
}
