(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
	this.checkCity = function(){
		products.city === "Dublin";
	};
	
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  var gems = [{
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Multimedia Technology", code: "CA448"},
	  courses: [ "Computer Applications","Multimedia"]

    }, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Computer Graphics", code: "CA456"},
	  courses: [ "Computer Applications"]
	  
    }, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Software Quality", code: "CA422"},
	  courses: [ "Computer Applications","Enterprise Computing"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Operations Research", code: "CA440"},
	  courses: [ "Computer Applications"]
	  
    }, {
      city: 'Dublin',
	  college: "DCU",
	  id: {name: "Systems Analysis", code: "CA236"},
	  courses: [ "Computer Applications","Enterprise Computing"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Compiler Constructions", code: "CA426"},
	  courses: [ "Computer Applications"]
	  
    }, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Software Patterns and Metrics", code: "CA416"},
	  courses: [ "Computer Applications"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Business Game", code: "CA160"},
	  courses: [ "Computer Applications, Business Studies, Enterprise Computing"]
	  
    }, {
      city: 'Dublin',
	  college: "DCU",
	  id: {name: "Human Computer Interaction", code: "CA423"},
	  courses: [ "Computer Applications","Enterprise Computing"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Computer Programming 1", code: "CA165"},
	  courses: [ "Computer Applications"]
	  
    }, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Operating Systems", code: "CA316"},
	  courses: [ "Computer Applications"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Cryptography", code: "CA470"},
	  courses: [ "Computer Applications"]
	  
    }, {
      city: 'Dublin',
	  college: "DCU",
	  id: {name: "linear Algebra", code: "CA230"},
	  courses: [ "Computer Applications","Enterprise Computing"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
      id: {name: "Logic", code: "CA223"},
	  courses: [ "Computer Applications"]
	  
    }, {
      city: 'Dublin',
	  college: "DCU",
	  id: {name: "Computability and Complexity", code: "CA367"},
	  courses: [ "Computer Applications","Enterprise Computing"]
	  
	}, {
	  city: 'Dublin',
	  college: "DCU",
	  id: {name: "Artificial Intelligence", code: "CA345"},
	  courses: [ "Computer Applications"]
	  
    }];
})();
