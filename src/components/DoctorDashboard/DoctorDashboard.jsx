import React from "react"
import SearchBar from "../SearchBar/SearchBar"

const DoctorDashboard = () => {
  return (
    <div className="dashboard">
      <div className="header">
        <p className="title">All patients</p>
        <SearchBar />
      </div>
    </div>
  )
}

export default DoctorDashboard
