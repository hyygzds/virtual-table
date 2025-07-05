import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TableCell',
    props: {
        data: { type: Object },
        index: { type: Number, default: 0 },
        column: { type: Object },
    },
    setup(props) {
        return () => <div>{props.data[props.column.key]}</div>;
    },
});
//# sourceMappingURL=Cell.jsx.map