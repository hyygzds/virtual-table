import { computed, defineComponent, inject, PropType } from 'vue';
import { DataItem, TableColumn } from '../type';
import { TableContext, VIRTUAL_TABLE } from '../VirtualTable';
import TableCell from '../cell/Cell';

export default defineComponent({
  name: 'TableRow',
  props: {
    data: { type: Object as PropType<DataItem>, default: () => {} },
    index: { type: Number, default: 0 },
    columns: { type: Object as PropType<Array<TableColumn>> },
  },
  setup(props) {
    const { rootProps, selectedRowIdList } = inject(VIRTUAL_TABLE) as TableContext;
    const selected = computed(() => {
      return selectedRowIdList.value.includes(props.data[rootProps.keyField] as string);
    });
    const tableRowClass = computed(() => {
      return {
        'h-table__row--hover': true,
        'h-table__row--selected': selected.value,
      };
    });
    function onClickRow(event: MouseEvent) {
      event.stopPropagation();
      const id = props.data[rootProps.keyField] as string;
      if (rootProps.selection.multiple) {
        if (selectedRowIdList.value.includes(id)) {
          selectedRowIdList.value.push(id);
        }
      } else {
        selectedRowIdList.value.splice(0, selectedRowIdList.value.length);
        selectedRowIdList.value.push(id);
      }
    }
    return () => (
      <div class={tableRowClass.value} style="display: flex" onClick={onClickRow}>
        <div>
          <input type="checkbox" />
        </div>
        {rootProps.showLineNumber && <div>{props.index + 1}</div>}
        {props.columns!.map((column: TableColumn, index: number) => {
          return <TableCell data={props.data} column={column} index={index}></TableCell>;
        })}
      </div>
    );
  },
});
