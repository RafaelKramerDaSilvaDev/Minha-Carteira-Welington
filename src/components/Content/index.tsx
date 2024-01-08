import { PropsWithChildren } from "react";

import { Container } from "./styles";

export function Content({ children }: PropsWithChildren) {
  return <Container>{children}</Container>;
}
