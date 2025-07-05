import { defineComponent } from 'vue';
import TableRow from '../row/Row';
export default defineComponent({
    name: 'TableBody',
    props: {
        data: { type: Object },
        columns: { type: Object },
    },
    setup(props) {
        return () => props.data.map((dataItem, index) => {
            return <TableRow data={dataItem} columns={props.columns} index={index}></TableRow>;
        });
    },
});
//# sourceMappingURL=Body.jsx.map