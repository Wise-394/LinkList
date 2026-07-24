interface Props {
  name: string;
  description: string;
}
export function ProfileDescriptionSection({ name, description }: Props) {
  return (
    <div className="flex flex-col items-center pt-8">
      <h1 className="text-center text-2xl">{name}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}
