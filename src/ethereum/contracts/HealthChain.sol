// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract HealthChain {
    struct Record {
        string name;
        string url;
        string upload_date;
    }
    
    struct Illness {
        string ill_id;
        string name;
    }
    
    struct Patient {
        string name;
        uint age;
        address wallet_address;
        string gender;
    }
    
    struct Doctor {
        string name;
        uint age;
        string gender;
        address wallet_address;
        string hospital_name;
        address[] patients;
    }
    
    mapping(address => Patient) public patients;//all patients
    mapping(address => Doctor) public doctors;//all doctors
    mapping(string => Illness) public illnuses;//all illnuses
    mapping(address => Illness[]) public patients_illness_map;//patients illnuses

    // Doctor functions
    function createDoctor(string memory name , uint age , string memory gender, string memory hospital_name) public {
        Doctor memory newDoc;
        newDoc.name = name;
        newDoc.wallet_address = msg.sender;
        newDoc.age = age;
        newDoc.gender = gender;
        newDoc.hospital_name = hospital_name;
        doctors[msg.sender] = newDoc;
    }
    function getAllPatients(address of_doctor) public view returns (Patient[] memory) {
        Doctor memory curr_doctor = doctors[of_doctor];
        Patient[] memory doctorPatients = new Patient[](curr_doctor.patients.length);
        for (uint i = 0; i < curr_doctor.patients.length; i++) {
            doctorPatients[i] = patients[curr_doctor.patients[i]];
        }
        return doctorPatients;
    }
    
    function getPatientsIllness(address patient_address) public view returns (Illness[] memory) {
        return patients_illness_map[patient_address];
    }

    // Patient functions
    function createPatient(string memory name, uint age, string memory gender) public {
        Patient memory newPatient;
        newPatient.name = name;
        newPatient.age = age;
        newPatient.wallet_address = msg.sender;
        newPatient.gender = gender;
        patients[msg.sender] = newPatient;
    }

    function getPatient() public view returns (Patient memory) {
        return patients[msg.sender];
    }
    
    function getIllnesses() public view returns (Illness[] memory) {
        return patients_illness_map[msg.sender];
    }
    
    // Add illness for a patient
    function addIllnessRecord(string memory ill_id, string memory illnessName) public {
        Illness memory newIllness ;
        newIllness.ill_id = ill_id;
        newIllness.name = illnessName;
        illnuses[ill_id] = newIllness;
    }
    
    
}
