export function middlewarePipeline(
  context: App.RouteContext,
  middleware: Record<number, App.Any>,
  index: number,
): () => void {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1);
    nextMiddleware({ ...context, next: nextPipeline });
  };
}
