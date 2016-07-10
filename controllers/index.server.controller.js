exports.render = function(req, res) {
  res.render('index' , {
    title: 'Hello Hell-o',
    law: {
        "name": "The_2_Coasting_Vessels_Act",
        "sections": [
	        			{
	        				"section" : {
		        				"article" : "Extent",
		        				"description" : "This Act extends in the first instance to the territories which, immediately before the 1st November,  were comprised in the States of Bombay, Saurashtra and Kutch, but the Central Government may, by notification in the Official Gazette, extend it to any other State or part of a State which has a sea-coast.",
		        				"simplified" : "In which we try to explain formidable legalese using everyday words."
	        				}
	        			}, 
	                    {
	                    	"section" : {
		                     	"article" : "Rules as to coasting and other vessels belonging to any citizen of India",
		                     	"description" : {}
	                    	}
	                    }, 
	                    {
	                    	"section" : {
		                     	"article" : "Marking or branding vessels with name of place and number",
		                     	"description" : {}
	                    	}
	                    },
	                    {	"section" : { 
		                     	"article" : "Registry of name, number and burthen",
		                     	"description" : {}
		                     }
	                    },
	                    {
	                    	"section" : {
		                     	"article" : "Marking or branding vessels with name of place and number",
		                     	"description" : {}
	                    	}
	                    },
	                    {	
	                    	"section" : {
		                     	"article" : "Owners to apply for registry",
		                     	"description" : {}
	                    	}
	                    },
	                    {
	                    	"section" : {
		                     	"article" : "Officers to perform duty of marking and branding",
		                     	"description" : {}
	                    	}
	                    },
	                    {
	                    	"section" : {
		      	             	"article" : "Sealing certificate",
		      	             	"description" : {}
		      	            }
	                    },
	                    {
	                    	"section" : {
	                     	"article" : "Fees for certificate",
	                     	"description" : {}
	                    	}
	                    },
	                    {
	                    	"section" : {
		                     	"article" : "Fees to be credited to Government",
		                     	"description" : {}
	                    	}
	                    },
	                    {	"section" : {
		                    	"article" : "Production of certificate on demand",
		                    	"description" : {}
	                    	}
	                    },
	                    {	"section" : {
		                     	"article" : "Penalty for neglect to comply with rules",
		                     	"description" : {}
	                    	}
	                    }
                    ]
    }
  })
};
