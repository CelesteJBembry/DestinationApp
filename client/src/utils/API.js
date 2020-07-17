import axios from "axios";
require("dotenv").config();


// Export an object containing methods we'll use for accessing the location and events
export default {

    fetchDestination: function (city) {
        const triposoUrl = "https://www.triposo.com/api/latest/location.json";
        const queryUrl = `${triposoUrl}?id=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;

        return axios
            .get(queryUrl)
    },

    fetchTour: function (city) {

        const triposoTourUrl = "https://www.triposo.com/api/20200405/tour.json?";
        const tourQueryUrl = `${triposoTourUrl}location_ids=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;

        return axios
            .get(tourQueryUrl)

    }

}



