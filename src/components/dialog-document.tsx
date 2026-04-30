"use client";

import { useActionState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Field, FieldGroup } from "./ui/field";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { revalidatePath } from "next/cache";

type Document = {
  title: string;
  content: string;
};

export const DialogDocument = () => {
  const defaultDocument: Document = {
    title: "",
    content: "",
  };
  const [document, submitAction, isPending] = useActionState(
    async (_previousState: Document, formData: FormData) => {
      return {
        title: String(formData.get("title") ?? ""),
        content: String(formData.get("content") ?? ""),
      };
    },
    defaultDocument,
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add document</Button>
      </DialogTrigger>
      <DialogContent>
        <form action={submitAction} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>New document</DialogTitle>
            <DialogDescription>
              Notice that your document is going to be encrypted in the
              database.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="document-title">Title</Label>
              <Input
                id="document-title"
                name="title"
                placeholder="Title for the document"
                defaultValue={document.title}
              />
            </Field>
            <Field>
              <Label htmlFor="document-content">Content</Label>
              <Textarea
                id="document-content"
                name="content"
                placeholder="Text to encrypt"
                className="max-h-80 sm:max-h-96"
                defaultValue={document.content}
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
