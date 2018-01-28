var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Clouds Rest",
            image: "https://images.pexels.com/photos/45241/tent-camp-night-star-45241.jpeg?h=350&auto=compress&cs=tinysrgb",
            price: "14.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lobortis odio. Aliquam tempor a sapien ut faucibus. Nunc eu sapien mollis, dignissim elit et, luctus quam. Nunc vehicula, nisl eu cursus dignissim, ligula eros ultrices tortor, ut tincidunt magna purus eget turpis. Nulla aliquet ipsum id semper convallis. Nunc ipsum quam, tempus ut facilisis vel, efficitur a nulla. Pellentesque varius pulvinar nisi dapibus auctor. Duis dapibus maximus magna in semper. Cras maximus lorem eget nisi dictum, et dictum turpis maximus. Fusce elementum at felis vel maximus. Pellentesque purus nulla, tempor et odio a, dignissim semper elit. Etiam pharetra ligula lectus, eget facilisis diam venenatis a. Nam tempor risus ac egestas tincidunt. Suspendisse massa nisl, rutrum ac viverra a, gravida eu ipsum. Fusce tristique consectetur libero, id consectetur turpis."
        },
        {
            name: "Desert Mesa",
            image: "https://images.pexels.com/photos/618848/pexels-photo-618848.jpeg?h=350&auto=compress&cs=tinysrgb",
            price: "14.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lobortis odio. Aliquam tempor a sapien ut faucibus. Nunc eu sapien mollis, dignissim elit et, luctus quam. Nunc vehicula, nisl eu cursus dignissim, ligula eros ultrices tortor, ut tincidunt magna purus eget turpis. Nulla aliquet ipsum id semper convallis. Nunc ipsum quam, tempus ut facilisis vel, efficitur a nulla. Pellentesque varius pulvinar nisi dapibus auctor. Duis dapibus maximus magna in semper. Cras maximus lorem eget nisi dictum, et dictum turpis maximus. Fusce elementum at felis vel maximus. Pellentesque purus nulla, tempor et odio a, dignissim semper elit. Etiam pharetra ligula lectus, eget facilisis diam venenatis a. Nam tempor risus ac egestas tincidunt. Suspendisse massa nisl, rutrum ac viverra a, gravida eu ipsum. Fusce tristique consectetur libero, id consectetur turpis."
        },
        {
            name: "Canyon Floor",
            image: "https://images.pexels.com/photos/176381/pexels-photo-176381.jpeg?h=350&auto=compress&cs=tinysrgb",
            price: "14.99",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lobortis odio. Aliquam tempor a sapien ut faucibus. Nunc eu sapien mollis, dignissim elit et, luctus quam. Nunc vehicula, nisl eu cursus dignissim, ligula eros ultrices tortor, ut tincidunt magna purus eget turpis. Nulla aliquet ipsum id semper convallis. Nunc ipsum quam, tempus ut facilisis vel, efficitur a nulla. Pellentesque varius pulvinar nisi dapibus auctor. Duis dapibus maximus magna in semper. Cras maximus lorem eget nisi dictum, et dictum turpis maximus. Fusce elementum at felis vel maximus. Pellentesque purus nulla, tempor et odio a, dignissim semper elit. Etiam pharetra ligula lectus, eget facilisis diam venenatis a. Nam tempor risus ac egestas tincidunt. Suspendisse massa nisl, rutrum ac viverra a, gravida eu ipsum. Fusce tristique consectetur libero, id consectetur turpis."
        }
    ];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed campgrounds!");
        //Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground");
                    //Create comment
                    Comment.create(
                        {
                            text: "This place is great!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;