import { FC } from "react";
import { UserProps } from "../../pages/Home/Home";
import DoughnutCard from "../DoughnutCard";

type TableProps = {
  users: UserProps[];
  selectedDay: number;
};

const Table: FC<TableProps> = ({ users, selectedDay }) => (
  <table className='table'>
    <thead>
      <tr>
        <th>ATHLETE</th>
        <th>SCORE</th>
      </tr>
    </thead>
    <tbody>
      {users &&
        users.map((user, index) => (
          <tr key={`${user.username}-key-${index}`}>
            <td>{user.username}</td>
            <td>
              <DoughnutCard percentage={user.day[selectedDay].score} />
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default Table;
