import { DialogDocument } from "@/components/dialog-document";
import { EmptyVault } from "@/components/empty-vault";

export default async function DashboardPage() {
  return (
    <div className="p-12 w-auto sm:flex sm:w-full sm:items-center">
      <EmptyVault
        title="No Documents yet"
        description="Your vault is currently empty. Add documents to keep your information secure and organized."
      >
        <DialogDocument />
      </EmptyVault>
    </div>
  );
}
