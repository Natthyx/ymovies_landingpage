const movies = [
    {
        id: 1,
        quality: "HD",
        // img: "https://picsum.photos/200/300",
        img : "https://img.ymovies.cc/resize/182x274/c3/69/c3697f53f903ddeb948f34cd439edbc9/c3697f53f903ddeb948f34cd439edbc9.jpg",
        title : "Argyile",
        cover : "https://mylifefm.com/wp-content/uploads/2024/02/Argylle-Movie-banner.jpg",
        desc : "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family...",
        type : "movie",
        genre : ["action","drama"]
    },
    {
        id : 2,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/13/37/13374a19fa43d75da533e108c68da3df/13374a19fa43d75da533e108c68da3df.jpg",
        title : "Ricky Stanicky",
        cover : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYpivo0eGVSbGsoseFdx8ExB-DPTpQvRfBb4dyiv5gaw&s",
        type : "movie",
        genre : ["action","drama"]
    },
    {
        id : 3,
        quality: "TS",
        img : "https://img.ymovies.cc/resize/182x274/1b/2e/1b2e7f907e0eabd02ddca00c9a3ca2a4/1b2e7f907e0eabd02ddca00c9a3ca2a4.jpg",
        title : "Dune: Part Two",
        genre : ["action","drama"],
        type : "movie",
    },
    {
        id : 4,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/9b/dc/9bdc5b3d6ae522646fd9e45ccb2e68b4/9bdc5b3d6ae522646fd9e45ccb2e68b4.jpg",
        title : "Poor Things",
        type : "movie",
        genre : ["action","drama"]
    },
    {
        id : 5,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/57/68/576899c7db56f47fa48dbdab100d9edb/576899c7db56f47fa48dbdab100d9edb.jpg",
        title : "Dune",
        type : "series",
        eps : "EP 20",
        genre : ["action","drama"]
    },
    {
        id : 6,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/dd/74/dd7419883c453b2b3a45aca7a6ad1cbb/dd7419883c453b2b3a45aca7a6ad1cbb.jpg",
        title : "Spaceman",
        type : "series",
        eps : "EP 20",
        genre : ["horror","comedy"],
        country : ["United State","United Kingdom"]
    },
    {
        id : 7,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/99/b8/99b8439a9e89ddb99526c2e9707a95a0/99b8439a9e89ddb99526c2e9707a95a0.jpg",
        title : "Anyone But You",
        type : "series",
        eps : "EP 20",
        genre : ["comedy","drama"]
    },
    {
        id : 8,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/62/4d/624da3679000613c554103de16f6296e/624da3679000613c554103de16f6296e.jpg",
        title : "Wonka",
        type : "series",
        eps : "EP 20"
    },
    {
        id : 9,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/b5/6a/b56a5aee9715743bb34b728e52b6bea0/b56a5aee9715743bb34b728e52b6bea0.jpg",
        title : "Oppenheimer",
        type : "series",
        eps : "EP 20",
        country : ["United State","United Kingdom"]
    },
    {
        id : 10,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/0e/bd/0ebd980ae8d7bb27c5cfcec1ac2719c9/0ebd980ae8d7bb27c5cfcec1ac2719c9.jpg",
        title : "The Thundermans Return",
        country : ["us","United Kingdom"],
        type : "movie",
    },
    {
        id : 11,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/ff/08/ff086911161038d7d7e933705a15b4cb/ff086911161038d7d7e933705a15b4cb.jpg",
        title : "Code 8 Part II",
        country : ["United State","United Kingdom"],
        type : "movie",
    },
    {
        id : 12,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/b2/a2/b2a2078a74e2e3b53693554ce3fbdd64/b2a2078a74e2e3b53693554ce3fbdd64.jpg",
        title : "Barbie",
        type : "movie",
    },    
    {
        id : 13,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/c9/cf/c9cf48c076459bb3993b781972667cb4/c9cf48c076459bb3993b781972667cb4.jpg",
        title : "Mean Girls",
        type : "movie",
    },
    {
        id : 14,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/c8/d6/c8d6c2c484c27d452667319847c50c2d/c8d6c2c484c27d452667319847c50c2d.jpg",
        title : "The Beekeeper",
        type : "movie",
    },
    {
        id : 15,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/72/a2/72a241dad98940029994fbe42b5a85ae/72a241dad98940029994fbe42b5a85ae.jpg",
        title : "Aquaman and the lost kingdom",
        type : "movie",
    },
    {
        id:16,
        quality: "HD",
        img : "https://img.ymovies.cc/resize/182x274/02/f1/02f10c6ed2e6b83550d6642cd181359b/02f10c6ed2e6b83550d6642cd181359b.jpg",
        title : "Megamind vs the Doom",
        type : "movie",
    },
]

export default movies