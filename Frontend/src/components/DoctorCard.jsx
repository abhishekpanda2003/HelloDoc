function DoctorCard({ doctor }) {
  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p>{doctor.specialty}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Location: {doctor.location}</p>
      <button>Book Now</button>
    </div>
  );
}

export default DoctorCard;
