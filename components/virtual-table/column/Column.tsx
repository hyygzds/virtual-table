import { defineComponent, inject } from 'vue';
import { TableColumn } from '../type';
import { TableContext, VIRTUAL_TABLE } from '../VirtualTable';

export default defineComponent({
  name: 'HTableColumn',
  props: {
    id: { type: String },
    name: { type: String },
  },
  setup(props, { slots }) {
    const { columns } = inject(VIRTUAL_TABLE) as TableContext;
    const foundColumn = columns.value.find((column: TableColumn) => column.key === props.id);
    if (!foundColumn) {
      columns.value.push({ key: props.id!, name: props.name! });
    }
    return () => slots.default?.();
  },
});
