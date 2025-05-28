import { VIRTUAL_TABLE } from '@/components/common/symbol-key';
import { defineComponent, inject } from 'vue';
import { TableColumn } from '../type';

export default defineComponent({
  name: 'HTableColumn',
  props: {
    id: { type: String },
    name: { type: String },
  },
  setup(props, { slots }) {
    const tableContext = inject(VIRTUAL_TABLE);
    if (tableContext) {
      const foundColumn = tableContext.columns.value.find(
        (column: TableColumn) => column.key === props.id,
      );
      if (!foundColumn) {
        tableContext.columns.value.push({ key: props.id, name: props.name });
      }
    }
    return () => slots.default?.();
  },
});
