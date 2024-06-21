import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private readonly data = [

    {
      "name": "Durev Rewards",
      "image": "https://s.getgems.io/nft/c/662c586748fe045a490b6c3d/0/image.png",
      "description": "By https://durev.app - The Povel Durev Project is hosting an airdrop.",
      "marketplace": "getgems.io",
      "owner": "UQAGseLZvqQCk7PUXFdQ0XYwsZhjjCpuA7hFQeS9uULBtK6A",
      "collection": "Durev Rewards",
      "collectionAddress": "EQB5DKiTTcwZo68-OKeHluTVecy4HCkW_Hoxi1OwJUgNgxW-",
    },

    {
      "name": "Povel Durev # 1377",
      "image": "https://s.getgems.io/nft/c/662eee5e6e239e5bd5d4fc97/0/image.png",
      "description": "1-NFT to'plami dunyodagi eng yaxshi ishtirokchi.",
      "marketplace": "getgems.io",
      "owner": "UQDgfnzT_fsvwWNypzXjpkFnc123Scmt1mQcveWqT5csGcWD",
      "collection": "Povel Durev # 1377",
      "collectionAddress": "EQB8KgdFzgxQeU9GrX77_7RYKngy4fOs-I_DZOHR9IX3qgD-",
    },

    {
      "name": "POVEL DUREV Relax",
      "image": "https://s.getgems.io/nft/c/661f42bbe030c81bc903c1af/0/image.png",
      "description": "POVEL DUREV - А picture is worth a thousand words.",
      "marketplace": "getgems.io",
      "owner": "EQAX0YZvXUc7iOYUeES24tzkcXiHzaMsWZq9IRVMPzOMOu8h",
      "collection": "POVEL DUREV",
      "collectionAddress": "EQAE9hisepqcZkmTa1cOY-gflp81zvQymNff2uTpVSAQGyKa",
    },

    {
      "name": "Povel Durev",
      "image": "https://s.getgems.io/nft/c/66185834d5328f72d3573189/1/image.png",
      "description": "💥DUREV IS ALIVE 💥\n\nTrade Povel Durev here!\nHold these NFTs and get a reward on day X",
      "marketplace": "getgems.io",
      "owner": "UQACUcbBYGq-UQACUcbBYGq-W_zI4xjxSYZrlCw5vcHgR7bV_9ta77LFCabe",
      "collection": "Povel Durev Fun",
      "collectionAddress": "EQDOASgdyX3jn8uh71chKNq8WTauorZeWbVxnQdiKJoKYawe",
    },

    {
      "name": "Povel Durev",
      "image": "https://s.getgems.io/nft/c/66185834d5328f72d3573189/2/image.png",
      "description": "💥DUREV IS ALIVE 💥\n\nTrade Povel Durev here!\nHold these NFTs and get a reward on day X",
      "marketplace": "getgems.io",
      "owner": "UQACUcbBYGq-W_zI4xjxSYZrlCw5vcHgR7bV_9ta77LFCabe",
      "collection": "Povel Durev Fun",
      "collectionAddress": "EQDOASgdyX3jn8uh71chKNq8WTauorZeWbVxnQdiKJoKYawe",
    },

    {
      "name": "Povel Durev",
      "image": "https://s.getgems.io/nft/c/66185834d5328f72d3573189/3/image.png",
      "description": "💥DUREV IS ALIVE 💥\n\nTrade Povel Durev here!\nHold these NFTs and get a reward on day X",
      "marketplace": "getgems.io",
      "owner": "UQACUcbBYGq-W_zI4xjxSYZrlCw5vcHgR7bV_9ta77LFCabe",
      "collection": "Povel Durev Fun",
      "collectionAddress": "EQDOASgdyX3jn8uh71chKNq8WTauorZeWbVxnQdiKJoKYawe",
    },

  ];

  getData(): any[] {

    const updatedData = this.data.map(item => ({
      ...item,
      initialPrice: (Math.random() * (2 - 0.001) + 0.001).toFixed(3),
      totalCopies: Math.max(1, Math.floor(Math.random() * 30)),
    }));

    return updatedData;

  }

}