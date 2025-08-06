// components/ui/table.tsx

import * as React from "react";

const Table = ({ children, className }: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="w-full overflow-auto">
    <table className={`w-full caption-bottom text-sm ${className || ""}`}>{children}</table>
  </div>
);

const TableHeader = ({ children, className }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={className}>{children}</thead>
);

const TableBody = ({ children, className }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={className}>{children}</tbody>
);

const TableRow = ({ children, className }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={`border-b transition-colors hover:bg-muted/50 ${className || ""}`}>{children}</tr>
);

const TableHead = ({ children, className }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground ${className || ""}`}>
    {children}
  </th>
);

const TableCell = ({ children, className }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={`p-4 align-middle ${className || ""}`}>{children}
  </td>
);

const TableCaption = ({ children, className }: React.HTMLAttributes<HTMLElement>) => (
  <caption className={`mt-4 text-sm text-muted-foreground ${className || ""}`}>{children}</caption>
);

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption
};
