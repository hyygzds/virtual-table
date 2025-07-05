import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TableHeader',
    props: {
        columns: { type: Object },
    },
    setup(props) {
        return () => (<div class="h-table-header">
        {(props.columns || []).map((column) => {
                return <div key={`header-column-${column.key}`}>{column.name}</div>;
            })}
      </div>);
    },
});
//# sourceMappingURL=Header.jsx.map