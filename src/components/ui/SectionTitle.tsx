interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="text-4xl font-bold mb-12">{title}</h3>;
}

export default SectionTitle;
