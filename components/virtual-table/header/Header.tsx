import { defineComponent, PropType } from 'vue';
import { TableColumn } from '../type';

export default defineComponent({
  name: 'TableHeader',
  props: {
    columns: { type: Object as PropType<Array<TableColumn>> },
  },
  setup(props) {
    return () => (
      <div class="h-table-header">
        {props.columns!.map((column: TableColumn) => {
          return <div key={`header-column-${column.key}`}>{column.name}</div>;
        })}
      </div>
    );
  },
});
