
export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  console.log('slug:',slug);

  return (
    <p>This is the PROJECT PAGE and should be ignored.</p>
  )
}