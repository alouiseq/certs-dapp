import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
// import "../node_modules/@openzeppelin/contracts/math/SafeMath.sol";

pragma solidity ^0.8.0;

contract CertsContract is Ownable {
// contract CertsContract {
    uint public ContractBalance;
    // address public owner = msg.sender;
    uint256 public studentCount = 0;
    mapping(uint => Student) public students;

    event funded(address owner, uint funding);
    
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

//   modifier onlyOwner() {
//     require(
//       msg.sender == owner,
//       "This function is restricted to the contract's owner"
//     );
//     _;
//   }

    function addStudent(string memory firstName, string memory lastName) public payable {
        incrementCount();
        students[studentCount] = Student(studentCount, firstName, lastName);
    }

    function incrementCount() internal {
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