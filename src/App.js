import { MDXProvider } from "@mdx-js/react";
import Hello from "./hello.mdx";

function MyH1() {
  return "MyH1";
}

export function App() {
  return (
    <MDXProvider
      components={{
        h1: MyH1,
      }}
    >
      <Hello />
    </MDXProvider>
  );
}
