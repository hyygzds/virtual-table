import { defineComponent, PropType, ref, onMounted, provide } from 'vue';
import { DataItem, TableColumn } from './type';
import Header from './header/Header';
import Body from './body/Body';
// import './table.css';
import { VIRTUAL_TABLE } from '../common/symbol-key';

export default defineComponent({
  name: 'HVirtualTable',
  props: {
    data: { type: Object },
    columns: { type: Object as PropType<Array<TableColumn>> },
    // 显示行号
    showRowIndex: { type: Boolean, default: false },
    // 行数据标识属性
    keyField: { type: String, default: '' },
  },
  setup(props, { slots }) {
    const columns = ref(props.columns || []);
    provide(VIRTUAL_TABLE, { columns, tableContext: props });
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
