export type Artist = {
  slug: string
  name: string
  role: string
  bio: string
  heroImage: string
  gallery: string[]
}

export const topArtists: Artist[] = [
  {
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Textile & Pattern Designer',
    bio: 'Sarah is a visionary textile designer with over 8 years of experience creating stunning patterns and sustainable fabrics. Her work blends traditional techniques with modern aesthetics, resulting in collections featured in major fashion publications and luxury brands worldwide.',
    heroImage: 'https://i.pinimg.com/736x/7e/87/7d/7e877d16d227e922272693c8737a5e86.jpg',
    gallery: [
      'https://i.pinimg.com/736x/33/cf/22/33cf2221957af335432a5f361ec4db3b.jpg',
      'https://i.pinimg.com/736x/5d/aa/66/5daa6611a208867373981e082ee1fecd.jpg',
      'https://i.pinimg.com/1200x/b7/d7/db/b7d7db5c4ee6d06cc0c3193d3f2f0e78.jpg',
      'https://i.pinimg.com/736x/9f/2e/75/9f2e75280d6631a7b1519361f5ecb655.jpg',
      'https://i.pinimg.com/736x/4d/86/c9/4d86c97b756f2d2b6939f258921e66cf.jpg',
      'https://i.pinimg.com/736x/1d/2d/68/1d2d68b95f370fdff17097e129d11b07.jpg',
    ],
  },
  {
    slug: 'marcus-rodriguez',
    name: 'Marcus Rodriguez',
    role: 'Architectural Visualizer',
    bio: 'Marcus is a visionary architect and 3D visualization expert specializing in sustainable design and urban planning. His award-winning projects have transformed city skylines, combining cutting-edge technology with environmental consciousness to create spaces that inspire and endure.',
    heroImage: 'https://i.pinimg.com/736x/78/5a/4a/785a4ab6b38a81c096fa6ec51aa831d1.jpg',
    gallery: [
      'https://i.pinimg.com/736x/3a/8d/5e/3a8d5eec0be96b5fbfe8ada23bc8bb12.jpg',
      'https://i.pinimg.com/1200x/4d/e1/e0/4de1e0750c3f796659e4018b318dfcde.jpg',
      'https://i.pinimg.com/736x/aa/08/7a/aa087aadb1c5e08266087d3721f2f15c.jpg',
      'https://i.pinimg.com/736x/39/b9/e2/39b9e24afa6453ddb414426e92af5aa8.jpg',
      'https://i.pinimg.com/736x/29/96/54/2996545e99c8c47fb8c86a484cfd70cb.jpg',
      'https://i.pinimg.com/1200x/6d/66/31/6d6631cb379406815942a5cd2868158f.jpg',
    ],
  },
  {
    slug: 'elena-petrova',
    name: 'Elena Petrova',
    role: 'Fashion Designer',
    bio: 'Elena is an innovative fashion designer whose collections have graced Paris Fashion Week and Milan Fashion Week. Specializing in eco-friendly luxury wear, she combines bold artistic vision with sustainable practices, creating garments that are as responsible as they are revolutionary.',
    heroImage: 'https://i.pinimg.com/736x/05/fd/c5/05fdc5272339e48e8b2fc1e89605dc62.jpg',
    gallery: [
      'https://i.pinimg.com/736x/ff/5e/ee/ff5eee67c117a4eec596bc47fc143db7.jpg',
      'https://i.pinimg.com/1200x/ea/b3/6e/eab36e70277f186430ba0050b7139a29.jpg',
      'https://i.pinimg.com/736x/a8/e9/fa/a8e9fad84043cc005fe11a7c6a44888c.jpg',
      'https://i.pinimg.com/736x/0a/ff/1a/0aff1a9ef99525bd4734b4a1b4b94801.jpg',
      'https://i.pinimg.com/736x/e8/6e/20/e86e203a8a7d678f76d48f6d1db1f5ac.jpg',
      'https://i.pinimg.com/736x/cd/17/34/cd17349f13aa5258686648994da00395.jpg',
    ],
  },
  {
    slug: 'james-patterson',
    name: 'James Patterson',
    role: 'Digital Illustrator',
    bio: 'James is a celebrated digital artist and illustrator with a passion for storytelling through visuals. His work has been featured in major publishing houses, advertising campaigns, and entertainment projects. Known for his distinctive style and attention to detail that brings narratives to life.',
    heroImage: 'https://i.pinimg.com/736x/53/dd/50/53dd506b01e85c2d4234ddef68d3878c.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/d6/60/73/d66073fb79fbdf14241c530297f7d129.jpg',
      'https://i.pinimg.com/1200x/1f/0b/cb/1f0bcb83ec92337efe451eaed1babf1b.jpg',
      'https://i.pinimg.com/1200x/96/86/da/9686dabe05982ac12260dedf1c65ec45.jpg',
      'https://i.pinimg.com/736x/a8/8a/50/a88a50ccb3b119dbf8eca2b1ed789cb4.jpg',
      'https://i.pinimg.com/736x/39/6a/38/396a3881e940c6c09c8f0c4b27881b55.jpg',
      'https://i.pinimg.com/1200x/6a/a8/74/6aa87443613c35aaedda526179966503.jpg',
    ],
  },
  {
    slug: 'amira-khalil',
    name: 'Amira Khalil',
    role: 'UI/UX Designer',
    bio: 'Amira is a creative UI/UX designer who specializes in crafting intuitive digital experiences for mobile and web platforms. With a background in psychology and design, her work has helped over 50 startups and established companies improve user engagement and satisfaction significantly.',
    heroImage: 'https://i.pinimg.com/736x/3c/2b/e1/3c2be15702750d6ce0d48f9805620193.jpg',
    gallery: [
      'https://i.pinimg.com/1200x/ef/1d/aa/ef1daa2277d8e10eb41c5af8e0b77ea2.jpg',
      'https://i.pinimg.com/736x/8e/92/05/8e92054e1b3a6efd60a9c224351dddc9.jpg',
      'https://i.pinimg.com/736x/99/60/b0/9960b05a989430ae88394c0e3bfee065.jpg',
      'https://i.pinimg.com/736x/96/32/72/9632726e7f1d982429092b0eaae4fcc1.jpg',
      'https://i.pinimg.com/1200x/09/82/d0/0982d04c7dec73b27e144de342abdb17.jpg',
      'https://i.pinimg.com/736x/e7/75/84/e77584f817db8533b4c248dfa515c668.jpg',
    ],
  },
]


