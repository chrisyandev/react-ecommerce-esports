import Directory from "../../components/directory/directory.component";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Gaming Mice",
      imageUrl:
        "https://resource.logitech.com/content/dam/gaming/en/products/shroud-g303/shroud-g303-gallery-1.png",
    },
    {
      id: 2,
      title: "Mouse Pads",
      imageUrl:
        "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g640/g640-gallery-2-new.png?v=1",
    },
    {
      id: 3,
      title: "Mouse Skates",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0549/2681/products/ModelOFeet.jpg?v=1668638621",
    },
    {
      id: 4,
      title: "Gaming Chairs",
      imageUrl:
        "https://m.media-amazon.com/images/I/61ZgIGTu4nL._AC_SX425_.jpg",
    },
    {
      id: 5,
      title: "Gaming Headsets",
      imageUrl:
        "https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g432/g432-gallery-1.png?v=1",
    },
  ];

  return <Directory categories={categories} />;
}

export default Home;
