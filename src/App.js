import Hello from "./hello.mdx";

function MyH1() {
  return "MyH1";
}

export function App() {
  return (
    <Hello
      // This doesn't do anything!
      components={{
        h1: MyH1,
      }}
    />
  );
}
