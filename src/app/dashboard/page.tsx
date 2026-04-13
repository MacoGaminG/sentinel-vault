import { EmptyVault } from "@/components/empty-vault";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  return (
    <EmptyVault
      title="No Documents yet"
      description="Your vault is currently empty. Add documents to keep your information secure and organized."
    >
      <Button variant="outline">Add Document</Button>
    </EmptyVault>
  );
}
