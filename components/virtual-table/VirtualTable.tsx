import {
  defineComponent,
  PropType,
  ref,
  onMounted,
  provide,
  ExtractPropTypes,
  Ref,
  InjectionKey,
} from 'vue';
import { DataItem, TableColumn, TableSelection } from './type';
import TableHeader from './header/Header';
import TableBody from './body/Body';
import './table.css';

export const tableProps = {
  data: { type: Object as PropType<DataItem[]>, default: () => [] },
  columns: { type: Object as PropType<Array<TableColumn>> },
  // 显示行号
  showLineNumber: { type: Boolean, default: false },
  // 多选配置
  selection: {
    type: Object as PropType<TableSelection>,
    default: {
      multiple: false,
    },
  },
  // 行数据标识属性
  keyField: { type: String, default: 'id' },
  // 自定义行样式
  // 启用斑马线样式
};

export type TableProps = ExtractPropTypes<typeof tableProps>;

export type TableContext = {
  rootProps: TableProps;
  columns: Ref<TableColumn[]>;
  selectedRowIdList: Ref<Set<string>>;
};

export const VIRTUAL_TABLE: InjectionKey<TableContext> = Symbol('VirtualTable');
export default defineComponent({
  name: 'HVirtualTable',
  props: tableProps,
  setup(props, { slots }) {
    const columns = ref(props.columns || []);
    // 选中行集合,使用set保持唯一性
    const selectedRowIdList: Ref<Set<string>> = ref(new Set());
    provide(VIRTUAL_TABLE, { columns, rootProps: props, selectedRowIdList });
    onMounted(() => {});
    // columns.value =
    return () => (
      <div>
        <TableHeader columns={columns.value}></TableHeader>
        {slots.default ? (
          props.data.map((dataItem: DataItem) => <div>{slots.default!({ row: dataItem })}</div>)
        ) : (
          <TableBody data={props.data} columns={columns.value}></TableBody>
        )}
      </div>
    );
  },
});
