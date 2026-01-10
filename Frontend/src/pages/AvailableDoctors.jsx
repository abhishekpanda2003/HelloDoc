import { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import SpecialtyFilter from "../components/SpecialtyFilter";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Williams",
    specialty: "cardiologist",
    experience: 12,
    location: "New York",
    image: "https://images.pexels.com/photos/532483/pexels-photo-532483.jpeg",
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    specialty: "dermatologist",
    experience: 8,
    location: "Los Angeles",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg",
  },
  {
    id: 3,
    name: "Dr. Maria Hernandez",
    specialty: "pediatrician",
    experience: 9,
    location: "Chicago",
    image: "https://images.pexels.com/photos/3985150/pexels-photo-3985150.jpeg",
  },
];

function AvailableDoctors() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchSpecialty =
      active === "all" || doctor.specialty === active;

    const matchSearch =
      doctor.name.toLowerCase().includes(search.toLowerCase());

    const matchLocation =
      doctor.location.toLowerCase().includes(location.toLowerCase());

    return matchSpecialty && matchSearch && matchLocation;
  });

  return (
    <div className="dashboard-page">
      {/* PAGE CONTROLS (NO TITLE HERE) */}
      <div className="dashboard-sticky">
        <div className="page-header-row">
          <div /> {/* empty left column – title comes from Layout */}
          <div className="page-header-actions">
            <input
              type="text"
              placeholder="Search doctor..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <input
              type="text"
              placeholder="Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <SpecialtyFilter active={active} setActive={setActive} />
      </div>

      {/* CONTENT */}
      <div className="dashboard-scroll">
        <div className="doctor-list">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p>No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AvailableDoctors;
