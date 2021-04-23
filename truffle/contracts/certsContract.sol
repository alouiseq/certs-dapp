import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

pragma solidity ^0.8.0;

contract CertsContract is Ownable {
    uint public ContractBalance;
    uint256 public studentCount = 0;
    mapping(uint => StudentCert) public students;

    event funded(address owner, uint funding);
    // event certAdded(StudentCert student);
    event certAdded(uint studeintId, string student, string university, string program, string cert, string date);
    
    struct StudentCert {
        uint _studentId;
        string student;
        string _university;
        string _program;
        string _cert;
        string _date;
    }

    function addStudentCert(string memory student, string memory university, string memory program, string memory cert, string memory date) public payable {
        incrementCount();
        ContractBalance += msg.value;
        students[studentCount] = StudentCert(studentCount, student, university, program, cert, date);
        // emit certAdded(students[studentCount]);
        emit certAdded(studentCount, student, university, program, cert, date);
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