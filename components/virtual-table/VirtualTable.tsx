import { defineComponent, PropType } from 'vue';
import { Column } from './type';
import Header from './header/Header';
import Body from './body/Body';
import './table.css';

export default defineComponent({
  name: 'HVirtualTable',
  props: {
    data: { type: Object },
    columns: { type: Object as PropType<Array<Column>> },
  },
  setup(props, { emit, slots }) {
    return (
      <div>
        <Header></Header>
        <Body></Body>
      </div>
    );
  },
});
