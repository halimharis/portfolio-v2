function FallbackRender({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <h2>Stack Trace:</h2>
      <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}

export default FallbackRender;
