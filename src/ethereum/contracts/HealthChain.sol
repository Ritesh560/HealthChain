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
    mapping(string => Record[]) public illness_record_map; //illness to records map
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
    function addIllness(string memory ill_id, string memory illnessName) public {
        Illness memory newIllness ;
        newIllness.ill_id = ill_id;
        newIllness.name = illnessName;
        illnuses[ill_id] = newIllness;
        Illness[] memory curr_illnuses = patients_illness_map[msg.sender];
        Illness[] memory new_ills = new Illness[](curr_illnuses.length+1);
        for(uint i =0;i<curr_illnuses.length;i++){
            new_ills[i] = curr_illnuses[i];
        }
        new_ills[curr_illnuses.length] = newIllness;
    }
    function addRecord(string memory name , string memory url , string memory upload_date , string memory ill_id)public view{
        Record memory newRec;
        newRec.name = name;
        newRec.url = url;
        newRec.upload_date = upload_date;
        Record[] memory curr_reports = illness_record_map[ill_id];
        Record[] memory new_reports = new Record[](curr_reports.length+1);
        for(uint i =0;i<curr_reports.length;i++){
            new_reports[i] = curr_reports[i];
        }
        new_reports[curr_reports.length] = newRec;
    }    
    function getRecords(string memory ill_id)public view returns(Record[] memory){
        return illness_record_map[ill_id];
    }
}
