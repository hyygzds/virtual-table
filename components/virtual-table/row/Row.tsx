import { computed, defineComponent, inject, PropType } from 'vue';
import { DataItem, TableColumn } from '../type';
import { TableContext, VIRTUAL_TABLE } from '../VirtualTable';
import TableCell from '../cell/Cell';

export default defineComponent({
  name: 'TableRow',
  props: {
    data: {
      type: Object as PropType<DataItem>,
      default: () => {
        return {};
      },
    },
    index: { type: Number, default: 0 },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => [],
    },
  },
  setup(props) {
    const { rootProps, selectedRowIdList } = inject(VIRTUAL_TABLE) as TableContext;
    const selected = computed(() => {
      return selectedRowIdList.value.has(props.data[rootProps.keyField] as string);
    });
    const tableRowClass = computed(() => {
      return {
        'h-table__row--hover': true,
        'h-table__row--selected': selected.value,
      };
    });
    // click row event
    function onClickRow(event: MouseEvent) {
      event.stopPropagation();
      const id = props.data[rootProps.keyField] as string;
      if (!rootProps.selection.multiple) {
        selectedRowIdList.value.clear();
      }
      selectedRowIdList.value.add(id);
    }
    return () => (
      <div class={tableRowClass.value} style="display: flex" onClick={onClickRow}>
        <div>
          <input type="checkbox" />
        </div>
        {rootProps.showLineNumber && <div>{props.index + 1}</div>}
        {props.columns.map((column: TableColumn, index: number) => {
          return <TableCell data={props.data} column={column} index={index}></TableCell>;
        })}
      </div>
    );
  },
});
