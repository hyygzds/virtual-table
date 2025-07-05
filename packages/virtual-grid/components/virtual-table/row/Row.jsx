import { computed, defineComponent, inject } from 'vue';
import { VIRTUAL_TABLE } from '../VirtualTable';
import TableCell from '../cell/Cell';
export default defineComponent({
    name: 'TableRow',
    props: {
        data: {
            type: Object,
            default: () => {
                return {};
            },
        },
        index: { type: Number, default: 0 },
        columns: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { rootProps, selectedRowIdList } = inject(VIRTUAL_TABLE);
        const selected = computed(() => {
            return selectedRowIdList.value.has(props.data[rootProps.keyField]);
        });
        const tableRowClass = computed(() => {
            return {
                'h-table__row--hover': true,
                'h-table__row--selected': selected.value,
            };
        });
        // click row event
        function onClickRow(event) {
            event.stopPropagation();
            const id = props.data[rootProps.keyField];
            if (!rootProps.selection.multiple) {
                selectedRowIdList.value.clear();
            }
            selectedRowIdList.value.add(id);
        }
        return () => (<div class={tableRowClass.value} style="display: flex" onClick={onClickRow}>
        <div>
          <input type="checkbox"/>
        </div>
        {rootProps.showLineNumber && <div>{props.index + 1}</div>}
        {props.columns.map((column, index) => {
                return <TableCell data={props.data} column={column} index={index}></TableCell>;
            })}
      </div>);
    },
});
//# sourceMappingURL=Row.jsx.map