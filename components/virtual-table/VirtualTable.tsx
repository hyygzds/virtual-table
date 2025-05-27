import { defineComponent, PropType } from 'vue';
import { TableColumn } from './type';
import Header from './header/Header';
import Body from './body/Body';
import './table.css';

export default defineComponent({
  name: 'HVirtualTable',
  props: {
    data: { type: Object },
    columns: { type: Object as PropType<Array<TableColumn>> },
    keyField: { type: String, default: '' },
  },
  setup(props, { slots }) {
    return () => (
      <div>
        {slots.default ? (
          slots.default()
        ) : (
          <>
            <Header columns={props.columns}></Header>
            <Body data={props.data} columns={props.columns}></Body>
          </>
        )}
      </div>
    );
  },
});
