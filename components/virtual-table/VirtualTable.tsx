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
import { DataItem, TableColumn } from './type';
import Header from './header/Header';
import Body from './body/Body';
import './table.css';

export const tableProps = {
  data: { type: Object },
  columns: { type: Object as PropType<Array<TableColumn>> },
  // 显示行号
  showLineNumber: { type: Boolean, default: false },
  // 多选配置
  selection: { type: Object, default: () => {} },
  // 行数据标识属性
  keyField: { type: String, default: '' },
};

export type TableProps = ExtractPropTypes<typeof tableProps>;

export type TableContext = {
  rootProps: TableProps;
  columns: Ref<TableColumn[]>;
};

export const VIRTUAL_TABLE: InjectionKey<TableContext> = Symbol('VirtualTable');
export default defineComponent({
  name: 'HVirtualTable',
  props: tableProps,
  setup(props, { slots }) {
    const columns = ref(props.columns || []);
    provide(VIRTUAL_TABLE, { columns, rootProps: props });
    onMounted(() => {});
    // columns.value =
    return () => (
      <div>
        <Header columns={columns.value}></Header>
        {slots.default ? (
          props.data!.map((dataItem: DataItem) => <div>{slots.default!({ row: dataItem })}</div>)
        ) : (
          <Body data={props.data} columns={columns.value}></Body>
        )}
      </div>
    );
  },
});
