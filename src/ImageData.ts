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
      top: "30%",
      left: "20%",
      rotate: -8,
    },
    {
      id: 2,
      src: "https://blog.amigofoods.com/wp-content/uploads/2021/03/tamales-food.jpg",
      top: "30%",
      right: "20%",
      alt: "Food Image 2",
      category: "food",
      rotate: 8,
    },
    {
      id: 3,
      src: "https://cdn.vox-cdn.com/thumbor/wNnraspXZ4FSjYJaMZSKzAZrbiY=/0x0:1080x720/1200x800/filters:focal(451x250:623x422)/cdn.vox-cdn.com/uploads/chorus_image/image/53717877/pupusa.0.jpg",
      alt: "Food Image 1",
      category: "food",
      top: "50%",
      left: "10%",
      rotate: -5,
    }
  ];
  