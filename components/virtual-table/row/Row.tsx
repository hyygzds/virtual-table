import { defineComponent, PropType } from 'vue';
import { TableColumn } from '../type';

export default defineComponent({
  name: 'TableRow',
  props: {
    data: { type: Object },
    columns: { type: Object as PropType<Array<TableColumn>> },
  },
  setup(props) {
    return () => (
      <div style="display: flex">
        {props.columns!.map((column: TableColumn) => {
          return <div>{props.data![column.key]}</div>;
        })}
      </div>
    );
  },
});
