function album(id){
    $.ajax({
        type: 'GET',
        url: 'https://api.deezer.com/artist/' + id + '/albums',
        data:{
            output: 'jsonp',
        },
            dataType: 'jsonp',
        success: function(data) {

            let albumlist = data.data
            
            document.getElementById('albums').innerHTML = ""

            $("#albums").html(
                albumlist.forEach(element => {
                    document.getElementById('albums').innerHTML += "<tr><td><img src='" + element.cover_small + "' alt='" + element.title + "'></td><td class='titre'>" + element.title + "</td><td>" + element.release_date + "</td></tr>"})
            )
        }
    });
}

function affichage(artist){

$.ajax({
    type: 'GET',
    url: 'https://api.deezer.com/artist/' + artist + '/',
    data:{
        output: 'jsonp',
    },
        dataType: 'jsonp',
    success: function(data) {
        
        let artiste = data.name
        let id = data.id
        let img = data.picture_medium

            $("#resultat").html(
                "<h1 class='nomArtiste'>" + artiste + "</h1>" +
                "<img src='" + img + "' alt='" + artiste + "'>"
            )
            
            album(id)

    },
});
}

$("#search").on('keyup', function (event) {
    if (event.keyCode === 13) {
       search()
    }
 });

function search(){
    const artist = document.querySelector('#search').value
    affichage(artist)
}

    
/*
    let section = 'album'
    let id = '302569'
function album(section, id){
    $.ajax({
        type: 'GET',
        url: 'https://api.deezer.com/' + section + '/' + id + '/',
        data:{
            output: 'jsonp',
        },
            dataType: 'jsonp',
        success: function(data) {
            
            let artiste = data.artist.name
            let titre = data.title
            let img = data.artist.picture_medium
            let genre = data.genres.data[0].name
            let tracklist = data.tracks.data    

            $("#resultat").html(
                "Artiste: " + artiste +
                "<br>Album: " + titre +
                "<br><img src='" + img + "' alt='" + artiste + "'>" +
                "<br>Genre: " + genre +
                "<br>Tracklist: "

            )

            $("#tracklist").html( 
                tracklist.forEach(element => {document.getElementById('tracklist').innerHTML += "<br>" + element.title})
            )
        },
    });
}
*/
