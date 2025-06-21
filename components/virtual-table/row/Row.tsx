import { defineComponent, inject, PropType } from 'vue';
import { TableColumn } from '../type';
import { TableContext, VIRTUAL_TABLE } from '@/components/common/symbol-key';

export default defineComponent({
  name: 'TableRow',
  props: {
    data: { type: Object },
    index: { type: Number, default: 0 },
    columns: { type: Object as PropType<Array<TableColumn>> },
  },
  setup(props) {
    const { rootProps } = inject(VIRTUAL_TABLE) as TableContext;
    return () => (
      <div style="display: flex">
        <div>
          <input type="checkbox" />
        </div>
        {rootProps.showLineNumber && <div>{props.index + 1}</div>}
        {props.columns!.map((column: TableColumn) => {
          return <div>{props.data![column.key]}</div>;
        })}
      </div>
    );
  },
});
