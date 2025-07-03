import { defineComponent, PropType } from 'vue';
import { TableColumn } from '../type';

export default defineComponent({
  name: 'TableCell',
  props: {
    data: { type: Object },
    index: { type: Number, default: 0 },
    column: { type: Object as PropType<TableColumn> },
  },
  setup(props) {
    return () => <div>{props.data![props.column!.key]}</div>;
  },
});
