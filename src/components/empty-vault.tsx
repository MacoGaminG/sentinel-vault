import { LuFolderLock } from "react-icons/lu";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";

export const EmptyVault = ({
  children,
  title,
  description,
}: {
  children?: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Empty className="border border-dashed flex-none mx-auto">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <LuFolderLock width={48} height={48} />
        </EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
        <EmptyContent>{children}</EmptyContent>
      </EmptyHeader>
    </Empty>
  );
};
