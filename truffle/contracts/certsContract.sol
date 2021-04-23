import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.0;

contract CertsContract is Ownable {
    uint public ContractBalance;
    uint256 public studentCount = 0;
    mapping(uint => StudentCert) public students;

    event funded(address owner, uint funding);
    // event certAdded(StudentCert student);
    event certAdded(uint studeintId, string firstName, string lastName, string university, string program, string description, string date);
    
    struct StudentCert {
        uint _studentId;
        string _firstName;
        string _lastName;
        string _university;
        string _program;
        string _description;
        string _date;
    }

    function addStudentCert(string memory firstName, string memory lastName, string memory university, string memory program, string memory description, string memory date) public payable {
        incrementCount();
        ContractBalance += msg.value;
        students[studentCount] = StudentCert(studentCount, firstName, lastName, university, program, description, date);
        // emit certAdded(students[studentCount]);
        emit certAdded(studentCount, firstName, lastName, university, program, description, date);
    }

    // function incrementCount() internal {
    function incrementCount() public {
        studentCount += 1;
    }
    
    // Function to get the Balance of the Contract
    function getBalance() public view returns (uint) {
        return ContractBalance;
    }

    // Fund the Contract
    function fundContract() public payable onlyOwner {
        require(msg.value != 0);
        ContractBalance = ContractBalance + msg.value;
        emit funded(msg.sender, msg.value);
        assert(ContractBalance == address(this).balance);
    }
}