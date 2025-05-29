import { defineComponent, PropType } from 'vue';
import { TableColumn } from '../type';

export default defineComponent({
  name: 'TableRow',
  props: {
    data: { type: Object },
    index: { type: Number },
    columns: { type: Object as PropType<Array<TableColumn>> },
  },
  setup(props) {
    return () => (
      <div style="display: flex">
        <div>
          <input type="checkbox" />
        </div>
        <div>{props.index}</div>
        {props.columns!.map((column: TableColumn) => {
          return <div>{props.data![column.key]}</div>;
        })}
      </div>
    );
  },
});
