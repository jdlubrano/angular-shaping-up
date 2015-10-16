// app.js
// Author: Joel Lubrano
// The Angular application

(function() {
  var app = angular.module('store', []);
  
  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '20 sided super-shape',
      canPurchase: true,
      soldOut: true
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "...",
      canPurchase: false
    }
  ];

}());
