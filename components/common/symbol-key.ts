import { InjectionKey, Ref } from 'vue';
import { TableColumn } from '../virtual-table';
import { TableProps } from '../virtual-table/VirtualTable';
export type TableContext = {
  rootProps: TableProps;
  columns: Ref<TableColumn[]>;
};

export const VIRTUAL_TABLE: InjectionKey<TableContext> = Symbol('VirtualTable');
