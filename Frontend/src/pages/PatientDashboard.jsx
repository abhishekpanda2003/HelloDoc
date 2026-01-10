import AnimatedAppointments from "../components/AnimatedAppointments";

function PatientDashboard() {
  const patientName = "Abhishek";

  const appointments = [
    {
      doctor: "Dr. James Anderson",
      specialty: "Dermatologist",
      date: "22 Aug",
      status: "CONFIRMED",
    },
    {
      doctor: "Dr. Maria Hernandez",
      specialty: "Pediatrician",
      date: "29 Aug",
      status: "APPLIED",
    },
    {
      doctor: "Dr. Sarah Williams",
      specialty: "Cardiologist",
      date: "10 Aug",
      status: "COMPLETED",
    },
    {
      doctor: "Dr. Alex Smith",
      specialty: "Neurologist",
      date: "02 Aug",
      status: "CANCELLED",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-scroll">

        {/* GREETING */}
        <div className="dashboard-card" style={{ marginBottom: "24px" }}>
          <h3>
            Hello, {patientName} <span role="img" aria-label="wave">👋</span>
          </h3>
          <p style={{ color: "#64748b", marginTop: "6px" }}>
            Here’s a quick look at your health activity
          </p>
        </div>

        {/* NEXT APPOINTMENT */}
        <div className="dashboard-card" style={{ marginBottom: "24px" }}>
          <h3 className="dashboard-card-title">Your next appointment</h3>

          <div className="appointment-item">
            <div>
              <strong>Dr. Sarah Williams</strong>
              <p>Cardiologist • Tomorrow, 10:30 AM</p>
            </div>
            <span className="status confirmed">CONFIRMED</span>
          </div>
        </div>

        {/* ALL APPOINTMENTS */}
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Appointments</h3>
          <AnimatedAppointments appointments={appointments} />
        </div>

      </div>
    </div>
  );
}

export default PatientDashboard;
