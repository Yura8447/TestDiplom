const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Жінкам
  const women_titles = [
    "Black-pink sneakers",
    "Black-pink sneakers"
  ];
  const women_imgs = [
    "https://images.pexels.com/photos/4498555/pexels-photo-4498555.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4498555.jpg&fm=jpg",
    "https://images.pexels.com/photos/4498555/pexels-photo-4498555.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4498555.jpg&fm=jpg"
  ];

  //--------------------Accessories
  const accessories_titles = [
    
    "Simple bag"
  ];

  const accessories_imgs = [
    
    "https://p0.pxfuel.com/preview/963/699/697/bag-blue-handbag-white.jpg"
  ];

  //--------------------Men
  const men_titles = [
    "orange sneakers",
    "orange sneakers",
  ];

  const men_imgs = [
    "https://images.pexels.com/photos/9400770/pexels-photo-9400770.jpeg?cs=srgb&dl=pexels-sneep-crew-9400770.jpg&fm=jpg",
    "https://images.pexels.com/photos/9400770/pexels-photo-9400770.jpeg?cs=srgb&dl=pexels-sneep-crew-9400770.jpg&fm=jpg",
  ];

  //--------------------Children
  const children_titles = [
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
    "red sneakers",
  ];
  const children_imgs = [
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
    "https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg",
  ];

  //--------------------Large Handags

 /* const largeHandbags_titles = [
    "Elegant Shiny Brown Leather Handbag",
    "Black Leather Handbag with Golden Chains",
    "Elegant Black Leather Handbag",
    "Stylish Blue Handbag with its Purse",
    "A set of Two Elegant Handbags",
    "Practical Blue Leather Handbag with its Purse",
    "Simple Black Leather Handbag",
    "Golden Leather Handbag",
    "Shiny Black Leather Handbag",
    "Gray and Yellow Flowery Shoulder Bag",
    "Blue and Brown Leather Handbag with Shoulder Strap",
  ];
  const largeHandbags_imgs = [
    "https://c.pxhere.com/photos/a8/b7/handbag_purse_fashion_bag_female_style_women_elegance-703150.jpg!d",
    "https://c.pxhere.com/photos/b6/5c/handbag_purse_fashion_bag_female_women_accessory_modern-703145.jpg!d",
    "https://c.pxhere.com/photos/4b/82/handbag_purse_fashion_bag_female_style_women_lady-703156.jpg!d",
    "https://images.unsplash.com/photo-1564422170194-896b89110ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://images.unsplash.com/photo-1564222256577-45e728f2c611?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://p1.pxfuel.com/preview/680/478/429/online-shopping-lisaswardrobe-handbags-shopping.jpg",
    "https://p1.pxfuel.com/preview/762/878/334/handbag-black-gold.jpg",
    "https://p1.pxfuel.com/preview/550/178/484/bag-handbag-haberdashery.jpg",
    "https://p1.pxfuel.com/preview/5/396/904/package-briefcase-leather-bags.jpg",
    "https://p1.pxfuel.com/preview/843/210/542/vera-bradley-purse-handbag-shoulder-bag.jpg",
    "https://p1.pxfuel.com/preview/57/634/392/purse-bag-handbag-fashion.jpg",
  ];

  //-----------------------Purses
  const purses_titles = [
    "Hot Pink Leather Purse",
    "Glittery Black Purse with Golden Strap",
    "Practical Black Leather Purse",
    "Red Leather Pouche with Free Earrings",
    "Lavender Leather Purse",
    "White and Black Snakeskin Purse",
    "Dark Brown Simple Purse",
    "Red Kipling Pouche",
    "Biege Kipling Pouche",
  ];
  const purses_imgs = [
    "https://c.pxhere.com/photos/c2/fc/bag_fashion_style-518806.jpg!d",
    "https://images.unsplash.com/photo-1564222195116-8a74a96b2c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://c.pxhere.com/photos/cb/9e/wallet_black_clutch_purse_leather_fashion_style_accessory-952715.jpg!d",
    "https://c.pxhere.com/photos/63/90/purse_handbag_fashion_bag_style_design_leather_accessory-780266.jpg!d",
    "https://c.pxhere.com/photos/2d/da/wallet_purple_wallet_purple_money_purse_billfold_lavender_fashion-863005.jpg!d",
    "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://www.publicdomainpictures.net/pictures/60000/velka/leather-purse-isolated-background.jpg",
    "https://c.pxhere.com/photos/94/29/bag_handbag_purse_pink_red_fashion_glamour_accessory-952105.jpg!d",
    "https://c.pxhere.com/photos/9b/57/bag_purse_handbag_fashion_style_accessory_white-1336949.jpg!d",
  ];

  //-----------------Totes

  const totes_titles = [
    "Plain White Cotton Tote",
    "Elegant Red Leather Tote",
    "Handmade Embroided White Tote with Red Roses",
    "Multicolored White Tote",
    "Owl White Cotton Tote",
    "Simple Grey Zipped Tote",
    "Earth Positive Tote Bag",
    "Deep Purple Handstamped Tote",
    "White Cotton Tote with Drawings",
    "Біжи карл, біжи",
    "Yellow and Green Bold Tote",
  ];
  const totes_imgs = [
    "https://p1.pxfuel.com/preview/1021/986/529/bag-cotton-cotton-bag-textile-wall-white.jpg",
    "https://p1.pxfuel.com/preview/741/996/910/handbag-fashion-fashionable-woman.jpg",
    "https://p1.pxfuel.com/preview/58/205/88/shop-bag-bags-sale.jpg",
    "https://p1.pxfuel.com/preview/367/279/652/bag-bag-elephant-cloth-bag.jpg",
    "https://p0.pikrepo.com/preview/627/393/white-blue-and-red-owl-print-tote-bag.jpg",
    "https://farm5.staticflickr.com/4022/4714518639_8d9e06be13_b.jpg",
    "https://live.staticflickr.com/3538/3674472019_727d8c4669.jpg",
    "https://live.staticflickr.com/5161/5342130557_7fa8cc5935_b.jpg",
    "https://p1.pxfuel.com/preview/368/540/34/bag-cotton-natural-cotton-bag-advertising-royalty-free-thumbnail.jpg",
    "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?cs=srgb&dl=pexels-pixabay-235922.jpg",
    "https://p1.pxfuel.com/preview/844/198/547/bag-burlap-advertising.jpg",
  ];*/

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 1, max: 2 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(women_titles, women_imgs, "Жіноче");
  await seedProducts(men_titles, men_imgs, "Чоловіче");
  await seedProducts(accessories_titles, accessories_imgs, "Аксесуари");
  await seedProducts(children_titles, children_imgs, "Дитяче");
  /*await seedProducts(largeHandbags_titles,largeHandbags_imgs,"Large Handbags");
  await seedProducts(purses_titles, purses_imgs, "Purses");
  await seedProducts(totes_titles, totes_imgs, "Totes");*/

  await closeDB();
}

seedDB();
