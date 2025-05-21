export function ProductDescription({ description }: { description: string }) {
  return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
}
