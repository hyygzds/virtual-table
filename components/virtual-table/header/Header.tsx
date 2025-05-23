import { defineComponent, PropType } from 'vue'
import { Column } from '../type'

export default defineComponent({
  name: 'TableHeader',
  props: {
    columns: { type: Object as PropType<Array<Column>> },
  },
  setup(props) {
    return (
      <div class="h-table-header">
        {props.columns!.map((column: Column) => {
          return <div key={`header-column-${column.key}`}>{column.name}</div>
        })}
      </div>
    )
  },
})
