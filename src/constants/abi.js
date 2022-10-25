export const TWITTERCONTRACT_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      }
    ],
    "name": "AddTweet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "comment",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "commentId",
        "type": "string"
      }
    ],
    "name": "CommentTweet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "tweetId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isDeleted",
        "type": "bool"
      }
    ],
    "name": "DeleteComment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isDeleted",
        "type": "bool"
      }
    ],
    "name": "DeleteTweet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "likeStatus",
        "type": "bool"
      }
    ],
    "name": "LikeTweet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "username",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "bio",
        "type": "string"
      }
    ],
    "name": "UploadProfile",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "tweetText",
        "type": "string"
      },
      {
        "internalType": "bool",
        "name": "isDeleted",
        "type": "bool"
      }
    ],
    "name": "addTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      }
    ],
    "name": "changeLikeTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "commentText",
        "type": "string"
      }
    ],
    "name": "commentTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "commentId",
        "type": "string"
      }
    ],
    "name": "deleteComment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isDeleted",
        "type": "bool"
      }
    ],
    "name": "deleteTweet",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllTweets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "username",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "tweetText",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isDeleted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "likeCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "commentCount",
            "type": "uint256"
          }
        ],
        "internalType": "struct TwitterContract.Tweet[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      }
    ],
    "name": "getLikesTweet",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "likeOwner",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "isLiked",
            "type": "bool"
          }
        ],
        "internalType": "struct TwitterContract.Like[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tweetId",
        "type": "uint256"
      }
    ],
    "name": "getTweetComments",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "id",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "commentOwner",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "commentText",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isDeleted",
            "type": "bool"
          }
        ],
        "internalType": "struct TwitterContract.Comment[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "username",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "bio",
            "type": "string"
          }
        ],
        "internalType": "struct TwitterContract.User",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "getUserTweets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "username",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "tweetText",
            "type": "string"
          },
          {
            "internalType": "bool",
            "name": "isDeleted",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "likeCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "commentCount",
            "type": "uint256"
          }
        ],
        "internalType": "struct TwitterContract.Tweet[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "username",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bio",
        "type": "string"
      }
    ],
    "name": "uploadProfile",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];