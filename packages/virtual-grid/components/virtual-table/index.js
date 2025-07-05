import { withInstall } from '../common/with-install';
import HVirtualTable from './VirtualTable';
import TableColumn from './column/Column';
export * from './type';
const HTableColumn = withInstall(TableColumn);
export { HVirtualTable, HTableColumn };
export default withInstall(HVirtualTable);
//# sourceMappingURL=index.js.map