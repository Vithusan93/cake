import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssueActions = () => {
  return (
    <Button>
      <Link href="new">New Issue</Link>
    </Button>
  );
};

export default IssueActions;
