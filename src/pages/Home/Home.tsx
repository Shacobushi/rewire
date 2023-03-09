import { useState, useEffect } from "react";
import DateContainer from "../../components/DateContainer";
import Footer from "../../components/Footer";
import Table from "../../components/Table";
import data from "../../data/users.json";

type Day = {
  timestamp: number;
  score: number;
};

export type UserProps = {
  username: string;
  day: Day[];
};

const Home = () => {
  const [users, setUsers] = useState<UserProps[]>();
  const [days, setDays] = useState<number[]>();
  const [selectedDay, setSelectedDay] = useState<number>(0);

  useEffect(() => {
    // I've used an use effect to emulate the API call
    const userList = Object.entries(data).map((user) => ({
      username: user[0],
      day: Object.keys(user[1]).map((d, index) => ({
        timestamp: Number(Object.keys(user[1])[index]),
        score: Object.values(user[1])[index].sc,
      })),
    }));

    setUsers(userList);
    setDays(userList[0].day.map((day) => day.timestamp));
  }, []);

  const switchDay = (direction: "previous" | "next") => {
    if (direction === "previous") {
      if (selectedDay === 0) {
        return;
      }
      return setSelectedDay(selectedDay - 1);
    } else {
      if (days && selectedDay === days.length - 1) {
        return;
      }
      setSelectedDay(selectedDay + 1);
    }
  };
  return (
    <div className='home'>
      {users && days && (
        <>
          <DateContainer
            selectedDay={selectedDay}
            switchDay={switchDay}
            days={days}
          />
          <Table users={users} selectedDay={selectedDay} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
