import { Dashboard } from "../lib/Dashboard";
import { ListWidget } from "../widgets/ListWidget";

export default class SampleDashboard extends Dashboard {
  rowHeights() {
    return "1fr";
  }

  columnWidths() {
    return "4fr 6fr";
  }

  dashboardLayout() {
    return (
      <>
        <ListWidget />
      
      </>
    );
  }
}
