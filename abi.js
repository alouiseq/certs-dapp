window.abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "studeintId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "student",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "university",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "program",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "cert",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "date",
        type: "string",
      },
    ],
    name: "certAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "funding",
        type: "uint256",
      },
    ],
    name: "funded",
    type: "event",
  },
  {
    inputs: [],
    name: "ContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "studentCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "students",
    outputs: [
      {
        internalType: "uint256",
        name: "_studentId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "student",
        type: "string",
      },
      {
        internalType: "string",
        name: "_university",
        type: "string",
      },
      {
        internalType: "string",
        name: "_program",
        type: "string",
      },
      {
        internalType: "string",
        name: "_cert",
        type: "string",
      },
      {
        internalType: "string",
        name: "_date",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "student",
        type: "string",
      },
      {
        internalType: "string",
        name: "university",
        type: "string",
      },
      {
        internalType: "string",
        name: "program",
        type: "string",
      },
      {
        internalType: "string",
        name: "cert",
        type: "string",
      },
      {
        internalType: "string",
        name: "date",
        type: "string",
      },
    ],
    name: "addStudentCert",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
  {
    inputs: [],
    name: "incrementCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "fundContract",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
];
