document.getElementById("button").onclick = function () {

    clear_elements();

    var input = document.getElementById("search_input").value;

    var input2 = "'" + input + "'";

    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + input2 + "&location=boston&limit=50";

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer tWEsui8SRGTz82u2yHiNvD4olIVNTONr2aSZYoJb117rRGa0AQKW8b3_s9HNhFLd2vcbvwMgRtdoOfEL1h76n95IqZgRqPaZws2fR9OUXw7JVEYeE0-8QAWWeXeGXnYx',

        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            // Grab the results from the API JSON return
            var totalresults = data.total;
            // If our results are greater than 0, continue
            if (totalresults > 0) {
                // Display a header on the page with the number of results
                $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
                // Itirate through the JSON array of 'businesses' which was returned by the API
                $.each(data.businesses, function (i, item) {
                    // Store each business's object in a variable
                    var id = item.id;
                    var alias = item.alias;
                    var phone = item.display_phone;
                    var image = item.image_url;
                    var name = item.name;
                    var rating = item.rating;
                    var reviewcount = item.review_count;
                    var address = item.location.address1;
                    var city = item.location.city;
                    var state = item.location.state;
                    var zipcode = item.location.zip_code;
                    // Append our result into our page
                    $('#block' + i).append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:250px;height:250px;"><br>We found <b>' + name + '</b> <br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
                });
            } else {
                // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
                $('#results').append('<h5>We discovered no results!</h5>');
            }
        }
    });
}

var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=active,Alll&location=boston&limit=50&sort_by=rating";

$.ajax({
    url: myurl,
    headers: {
        'Authorization': 'Bearer tWEsui8SRGTz82u2yHiNvD4olIVNTONr2aSZYoJb117rRGa0AQKW8b3_s9HNhFLd2vcbvwMgRtdoOfEL1h76n95IqZgRqPaZws2fR9OUXw7JVEYeE0-8QAWWeXeGXnYx',

    },
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        // Grab the results from the API JSON return
        var totalresults = data.total;
        // If our results are greater than 0, continue
        if (totalresults > 0) {
            // Display a header on the page with the number of results
            $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
            // Itirate through the JSON array of 'businesses' which was returned by the API
            $.each(data.businesses, function (i, item) {
                // Store each business's object in a variable
                var id = item.id;
                var alias = item.alias;
                var phone = item.display_phone;
                var image = item.image_url;
                var name = item.name;
                var rating = item.rating;
                var reviewcount = item.review_count;
                var address = item.location.address1;
                var city = item.location.city;
                var state = item.location.state;
                var zipcode = item.location.zip_code;
                // Append our result into our page
                $('#block' + i).append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:250px;height:250px;"><br>We found <b>' + name + '</b> <br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
            });
        } else {
            // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
            $('#results').append('<h5>We discovered no results!</h5>');
        }
    }
});

