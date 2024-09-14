import { useEffect, useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";

export default function RecordCalendar() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance("/calender/combined-cnt");
        setUserData(response.data.response);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  console.log(userData);

  const weeks = 53;
  const days = 7;

  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  const getDateData = (date) => {
    return userData.find((data) => data.date === date) || { recordCnt: 0, commentCnt: 0 , totalCnt: 0};
  };

  function getColor(recordCnt, commentCnt) {
    const total = recordCnt + commentCnt;
    if (total === 0) return "#e7e7e7";
    if (total <= 1) return "#c6e48b";
    if (total <= 4) return "#7bc96f";
    if (total <= 6) return "#239a3b";
  }

  return (
    <div style={{padding: '30px 0'}}>
      <table style={{display: 'flex', justifyContent: 'center'}}>
        <tbody>
          {[...Array(days)].map((_, dayIndex) => (
            <tr key={dayIndex}>
              {[...Array(weeks)].map((_, weekIndex) => {
                const currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + (weekIndex * days) + dayIndex);
                const dateStr = currentDate.toISOString().split("T")[0];

                if (currentDate > endDate) {
                  return <td key={weekIndex} style={{ width: "17px", height: "17px", backgroundColor: "#f1f1f1" }}></td>;
                }

                const { recordCnt, commentCnt, totalCnt } = getDateData(dateStr);
                const backgroundColor = getColor(recordCnt, commentCnt, totalCnt);

                return (
                  <td
                    key={weekIndex}
                    style={{
                      width: "25px",
                      height: "20px",
                      backgroundColor,
                      border: "1px solid #c0bfbf",
                    }}
                    title={`날짜: ${dateStr}\n기록: ${recordCnt}\n댓글: ${commentCnt}\n전체: ${totalCnt}`}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
