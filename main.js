
const stations = ["Museum", "St James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

const html = document.querySelector('main');
const ul = document.querySelector('ul');

let caseInsensitive = function (string) {
    // for two worded stations
    if (string.includes(" ")) {
        let twoWordString = string.split(' ');
        let twoWordStringCaseInsensitive = twoWordString.map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        return twoWordStringCaseInsensitive.join(" ");
    // for single worded stations
    } else {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
}


let travelToAndFrom = function (start, end) {
    let startIndex = (stations.indexOf(start));
    let endIndex = (stations.indexOf(end));

    // error message for invalid stations
    if (!stations.includes(start) || !stations.includes(end)) {
        return html.innerHTML = "You did not enter a valid station.";
    
    // logging station list (travelling from start to end of the line)
    } else if (endIndex > startIndex){
        let stationList = stations.slice(startIndex, (endIndex + 1));
        let stopsBetween = (endIndex - startIndex) - 1;

        // alter wording for single 'stop'
        if (stopsBetween === 1) {
            html.innerHTML = `To go from '${start}' to '${end}' - you'll need to go through ${stopsBetween} stop`;
            const li = document.createElement('li');
            stationList.forEach(station => {
                li.innerHTML = `- ${station}`;
                ul.appendChild(li);
            })
        // alter wording for multiple 'stops'
        } else {
            html.innerHTML = `To go from '${start}' to '${end}' - you'll need to go through ${stopsBetween} stops`;
            stationList.forEach(station => {
                let li = document.createElement('li');
                li.innerHTML = `- ${station}`;
                ul.appendChild(li);
            }) 
        }

    // logging stations list (travelling in reverse)
    } else if (startIndex > endIndex) {
        let stationList = stations.slice(endIndex, (startIndex + 1));
        let stationListReverse = [...stationList].reverse();
        let stopsBetweenReverse = ((startIndex - endIndex) - 1);
            
        // alter wording for single 'stop'
        if (stopsBetweenReverse === 1) {
            html.innerHTML = `To go from '${start}' to '${end}' - you'll need to go through ${stopsBetweenReverse} stop`;
            stationListReverse.forEach(station => {
                let li = document.createElement('li');
                 li.innerHTML = `- ${station}`;
                ul.appendChild(li);
            })
        // alter wording for multiple 'stops'
        } else {
            html.innerHTML = `To go from '${start}' to '${end}' - you'll need to go through ${stopsBetweenReverse} stops`;
            stationListReverse.forEach(station => {
                let li = document.createElement('li');
                li.innerHTML = `- ${station}`;
                ul.appendChild(li);
            })
        }        
    }
}


travelToAndFrom(caseInsensitive('NEWtown'), caseInsensitive('st JAMES'));




