import { arrayOfObjects } from "./data";
import { TableRow } from "./tableRow";

const TableComponent = () => {
  return (
    <>
      <table style={{ width: "400px" }}>
        <tbody>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {arrayOfObjects.map((eachArray) => {
            return (
                <TableRow data={eachArray} />
            
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TableComponent;
