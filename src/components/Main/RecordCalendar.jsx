import { TitleText } from "../../styles/Main/BookStyle";
import { useQuery } from "@tanstack/react-query";
import { recordCalender } from "../../api/mainApis";

export default function RecordCalendar() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["recordsCalender"],
    queryFn: recordCalender,
  });
  if (isError) return <span>{error.message}</span>;
  if (isLoading) return <span>기록 정보를 가져오는 중입니다...</span>;

  const weeks = 53;
  const days = 7;

  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  const getDateData = (date) => {
    return (
      data.data.response.find((data) => data.date === date) || {
        recordCnt: 0,
        commentCnt: 0,
        totalCnt: 0,
      }
    );
  };

  function getColor(recordCnt, commentCnt) {
    const total = recordCnt + commentCnt;
    if (total === 0) return "#e7e7e7";
    if (total <= 1) return "#c6e48b";
    if (total <= 4) return "#7bc96f";
    if (total <= 6) return "#239a3b";
  }

  const accessToken = localStorage.getItem("accessToken");

  return (
    <>
      {accessToken ? (
        <div style={{ margin: "5rem 0" }}>
          <TitleText style={{ margin: "1.3rem 2rem" }}>기록 캘린더</TitleText>
          <table style={{ borderCollapse: "separate", borderSpacing: "2px" }}>
            <thead></thead>
            <tbody>
              {[...Array(days)].map((_, dayIndex) => (
                <tr key={dayIndex} style={{}}>
                  {[...Array(weeks)].map((_, weekIndex) => {
                    const currentDate = new Date(startDate);
                    currentDate.setDate(
                      startDate.getDate() + weekIndex * days + dayIndex
                    );
                    const dateStr = currentDate.toISOString().split("T")[0];

                    if (currentDate > endDate) {
                      return (
                        <td
                          key={weekIndex}
                          style={{
                            width: "17px",
                            height: "17px",
                            backgroundColor: "#f1f1f1",
                          }}
                        ></td>
                      );
                    }

                    const { recordCnt, commentCnt, totalCnt } =
                      getDateData(dateStr);
                    const backgroundColor = getColor(
                      recordCnt,
                      commentCnt,
                      totalCnt
                    );

                    return (
                      <td
                        key={weekIndex}
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor,
                          borderRadius: "8px",
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
      ) : (
        <></>
      )}
    </>
  );
}
