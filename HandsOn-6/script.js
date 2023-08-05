const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timeTable = {
  Monday: {
    9: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    10: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    11: {
      subject: "Chemistry",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
    13: {
      subject: "English Litrature",
      teacher: "Mayur Pandey",
      time: "1 hour",
    },
    14: {
      subject: "Hindi Vyakaran",
      teacher: "Sony Desai",
      time: "1 hour",
    },
    15: {
      subject: "PT",
      teacher: "Sonu Tyagi",
      time: "1 hour",
    },
  },
  Tuesday: {
    9: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    10: {
      subject: "Hindi Sahitya",
      teacher: "Ramesh Jha",
      time: "1 hour",
    },
    11: {
      subject: "Environtal Studies",
      teacher: "Rakesh Prakash",
      time: "1 hour",
    },
    13: {
      subject: "Biology",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
    14: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    15: {
      subject: "Physics Practical",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
  },
  Wednesday: {
    9: {
      subject: "Chemistry",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
    10: {
      subject: "English Grammar",
      teacher: "Aditi Upasane",
      time: "1 hour",
    },
    11: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    13: {
      subject: "English Litrature",
      teacher: "Mayur Pandey",
      time: "1 hour",
    },
    14: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    15: {
      subject: "Chemistry Practical",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
  },
  Thursday: {
    9: {
      subject: "Biology",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
    10: {
      subject: "Hindi Sahitya",
      teacher: "Ramesh Jha",
      time: "1 hour",
    },
    11: {
      subject: "Chemistry",
      teacher: "Vedanti Joshi",
      time: "1 hour",
    },
    13: {
      subject: "Maths",
      teacher: "Brijesh Mishra",
      time: "1 hour",
    },
    14: {
      subject: "Physics",
      teacher: "Sumit Yadav",
      time: "1 hour",
    },
    15: {
      subject: "Biology Practical",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
  },
  Friday: {
    9: {
      subject: "English Litrature",
      teacher: "Mayur Pandey",
      time: "1 hour",
    },
    10: {
      subject: "Hindi Sahitya",
      teacher: "Ramesh Jha",
      time: "1 hour",
    },
    11: {
      subject: "English Grammar",
      teacher: "Aditi Upasane",
      time: "1 hour",
    },
    13: {
      subject: "Biology",
      teacher: "Kuldeep Narayan",
      time: "1 hour",
    },
    14: {
      subject: "Hindi Vyakaran",
      teacher: "Sony Desai",
      time: "1 hour",
    },
    15: {
      subject: "PT",
      teacher: "Sonu Tyagi",
      time: "1 hour",
    },
  },
};

const App = () => (
  <table border="1">
    <caption>School time-table of a class 12th Student.</caption>
    <thead>
      <tr>
        <th></th>
        <th>9am-10am</th>
        <th>10am-11am</th>
        <th>11am-12noon</th>
        <th>12noon-1pm</th>
        <th>1pm-2pm</th>
        <th>2pm-3pm</th>
        <th>3pm-4pm</th>
      </tr>
    </thead>

    <tbody>
      {Object.keys(timeTable).map((day, index) => (
        <tr key={index}>
          <th>{day}</th>
          {Object.keys(timeTable[day]).map((hour, index) => {
            if (index == 3) {
              return (
                <>
                  <td key={index}>Break</td>
                  <td key={index}>{timeTable[day][hour].subject}</td>
                </>
              );
            } else return <td key={index}>{timeTable[day][hour].subject}</td>;
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
