type DataItem = {
  [key: string]: object | string | number | boolean;
};
interface TableColumn {
  key: string;
  name: string;
}

interface DataRow {
  visible?: boolean;
  disabled?: boolean;
  raw: DataItem;
}

interface TableSelection {
  multiple: boolean;
}

export type { DataItem, DataRow, TableColumn, TableSelection };
