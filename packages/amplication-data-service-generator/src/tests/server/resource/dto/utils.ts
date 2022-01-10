import { ASTNode } from "ast-types";
import { format } from "prettier";
import { print } from "recast";
export function printTypescript(ast: ASTNode): string {
  return format(print(ast).code, { parser: "typescript" });
}
