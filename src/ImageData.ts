export interface ImageData {
    id: number;
    src: string;
    alt: string;
    top?: string;
    left?: string;
    right?: string;
    category: string;
    rotate: number;
  }
  
  export const foodImages: ImageData[] = [
    {
      id: 1,
      src: "https://cdn.vox-cdn.com/thumbor/wNnraspXZ4FSjYJaMZSKzAZrbiY=/0x0:1080x720/1200x800/filters:focal(451x250:623x422)/cdn.vox-cdn.com/uploads/chorus_image/image/53717877/pupusa.0.jpg",
      alt: "Food Image 1",
      category: "food",
      top: "22%",
      left: "19%",
      rotate: -7,
    },
    {
      id: 2,
      src: "https://blog.amigofoods.com/wp-content/uploads/2021/03/tamales-food.jpg",
      top: "23%",
      right: "19%",
      alt: "Food Image 2",
      category: "food",
      rotate: 6,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1640720707320-af5502f2a3f5?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF0aW4lMjBmb29kfGVufDB8fDB8fHww",
      alt: "Food Image 3",
      category: "food",
      top: "63%",
      left: "15%",
      rotate: -5,
    },{
      id: 4,
      src: "https://images.unsplash.com/photo-1609525313344-a56b96f20718?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJnZW50aW5hJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Food Image 4",
      category: "food",
      top: "65%",
      right: "15%",
      rotate: 6,
    }


  ];
  
  export const sightImages: ImageData[] = [
    {
      id: 1,
      src: "https://cdn.hswstatic.com/gif/s1/mq_travel/gettyimages-980118472.jpg",
      alt: "Sights Image 1",
      category: "sights",
      top: "23%",
      left: "20%",
      rotate: -8,
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/qjn0ijgf4i5oxj7gqgrl",
      top: "25%",
      right: "20%",
      alt: "Sights Image 2",
      category: "sights",
      rotate: 5,
    },
    {
      id: 3,
      src: "https://lp-cms-production.imgix.net/2022-03/shutterstockRF_455082646.jpg",
      alt: "Sights Image 3",
      category: "sights",
      top: "63%",
      left: "18%",
      rotate: -8,
    },
    {
      id: 4,
      src: "https://media.istockphoto.com/id/1137146624/photo/cityscape-of-antigua-city-guatemala.jpg?s=612x612&w=0&k=20&c=WN7tj13rN12RcARY3PTFfofkIJV_AcGB6M9Rz8w-Xbg=",
      alt: "Sights Image 4",
      category: "sights",
      top: "62%",
      right: "15%",
      rotate: 6,
    }
  ];

  export const nightEmojis: ImageData[] = [
    {
      id: 1,
      src: "💎",
      alt: "Diamond",
      category: "nightlife",
      top: "23%",
      left: "20%",
      rotate: -8,
    },
    {
      id: 2,
      src: "🪩",
      top: "25%",
      right: "20%",
      alt: "Mirror ball",
      category: "nightlife",
      rotate: 5,
    },
    {
      id: 3,
      src: "🎱",
      alt: "Billiards ball",
      category: "nightlife",
      top: "63%",
      left: "18%",
      rotate: -8,
    },
    {
      id: 4,
      src: "💫",
      alt: "Shooting Star",
      category: "nightlife",
      top: "62%",
      right: "15%",
      rotate: 6,
    }
  ];