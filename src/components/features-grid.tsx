import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const FeaturesGrid = ({
  features,
}: {
  features: { icon: React.JSX.Element; title: string; description: string }[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {features.map(({ icon, title, description }, index) => (
        <Card key={index} className="p-8">
          <CardHeader className="justify-center">{icon}</CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};
