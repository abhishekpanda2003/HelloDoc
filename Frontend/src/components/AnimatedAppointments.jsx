import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AnimatedAppointments.css";

const AnimatedItem = ({ children, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      data-index={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.2 }}
      className="appointment-item-wrapper"
    >
      {children}
    </motion.div>
  );
};

function AnimatedAppointments({ appointments }) {
  const [filter, setFilter] = useState("ALL");

  const filteredAppointments =
    filter === "ALL"
      ? appointments
      : appointments.filter(a => a.status === filter);

  return (
    <div className="appointments-container">
      <div className="appointments-filters">
        {["ALL", "CONFIRMED", "APPLIED", "COMPLETED", "CANCELLED"].map(type => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? "active" : ""}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="appointments-list">
        {filteredAppointments.map((appt, index) => (
          <AnimatedItem key={index} index={index}>
            <div className="appointment-item">
              <div>
                <strong>{appt.doctor}</strong>
                <p>
                  {appt.specialty} • {appt.date}
                </p>
              </div>

              <div className="appointment-actions">
                <span className={`status ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </span>
                <button className="view-btn">View</button>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </div>
    </div>
  );
}

export default AnimatedAppointments;
