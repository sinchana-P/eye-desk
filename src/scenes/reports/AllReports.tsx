import React from "react";
import "../reports/AllReports.css"
import { FaStar } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { PiCalculatorBold } from "react-icons/pi";

const cardDetails = [
  {
    key: "1",
    title: "Time & activity",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "2",
    title: "Daily totals (Weekly)",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "3",
    title: "Work sessions",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "4",
    title: "Apps & URLs",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "5",
    title: "Manual time edits",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "6",
    title: "Timesheet approvals",
    value: "See team members timesheets and their status",
  },
  {
    key: "7",
    title: "Expenses",
    value: "See how much has been spent on expenses by member and project",
  },
  {
    key: "8",
    title: "Work breaks",
    value: "See how many work breaks team members are taking",
  },
];

const paymentDetails = [
  {
    key: "1",
    title: "Time & activity",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "2",
    title: "Daily totals (Weekly)",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },

];

const BudgetDetails = [
  {
    key: "1",
    title: "Time & activity",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },
  {
    key: "2",
    title: "Daily totals (Weekly)",
    value:
      "See team members time worked,activity levels,and amounts earned per project or to-do",
  },

];

export const CardLayout: React.FC = () => (

  <div className="reports">
    <div className="reports-header-wrapper">
      <div className="reports-header-container">
        <div>
          <p>Reports</p>
        </div>
        <div style={{ cursor: "pointer", display:"flex"}} className="clock">
          <LuClock3
            style={{ width: "20px", height: "20px", color: "#2aa7ff"}}
          /> 
          <p style={{color:"#2aa7ff", fontSize:"medium"}}>Scheduled Reports</p>
        </div>
      </div>
    </div>

    <div className="header">
      <p><span><AiOutlineAlignLeft style={{color:"blue"}}/></span>General</p>
    </div>

    <div className="reports-cards-container">
      {cardDetails.map((card, key) => (
        <div className="reports-each-card" key={key}>
          <div>
            <h5>{card.title} </h5>
            <div>
              <FaStar className="fa-star" />
            </div>
          </div>
          <div>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="header">
      <p><span><MdOutlinePayment style={{color:"red"}}/></span>Payment</p>
    </div>

    <div className="reports-cards-container">
      {paymentDetails.map((card, key) => (
        <div className="reports-each-card" key={key}>
          <div>
            <h5>{card.title} </h5>
            <div>
              <FaStar className="fa-star" />
            </div>
          </div>
          <div>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="header">
      <p> <span><PiCalculatorBold style={{color:"green"}}/></span>Budgets and Limits</p>
    </div>

    <div className="reports-cards-container">
      {BudgetDetails.map((card, key) => (
        <div className="reports-each-card" key={key}>
          <div>
            <h5>{card.title} </h5>
            <div>
              <FaStar className="fa-star" />
            </div>
          </div>
          <div>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  
);

// export default CardLayout;
