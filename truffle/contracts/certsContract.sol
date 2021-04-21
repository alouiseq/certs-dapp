// import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
// import "../node_modules/@openzeppelin/contracts/math/SafeMath.sol";

pragma solidity ^0.8.0;

contract CertsContract {
    uint256 public studentCount = 0;
    mapping(uint => Student) public students;
    
    struct Student {
        uint _id;
        string _firstName;
        string _lastName;
    }

    struct StudentCert {
        uint _studentId;
        string _university;
        string _program;
        string _description;
        string _date;
    }

    function addStudent(string memory firstName, string memory lastName) public {
        incrementCount();
        students[studentCount] = Student(studentCount, firstName, lastName);
    }

    function incrementCount() internal {
        studentCount += 1;
    }

    // Fund the Contract
    // function fundContract() public payable onlyOwner {
    //     require(msg.value != 0);
    //     ContractBalance = ContractBalance.add(msg.value);
    //     emit funded(msg.sender, msg.value);
    //     assert(ContractBalance == address(this).balance);
    // }
}