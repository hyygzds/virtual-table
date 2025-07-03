import { defineComponent, PropType } from 'vue';
import { DataItem, TableColumn } from '../type';
import TableRow from '../row/Row';

export default defineComponent({
  name: 'TableBody',
  props: {
    data: { type: Object },
    columns: { type: Object as PropType<Array<TableColumn>> },
  },
  setup(props) {
    return () =>
      props.data!.map((dataItem: DataItem, index: number) => {
        return <TableRow data={dataItem} columns={props.columns} index={index}></TableRow>;
      });
  },
});
