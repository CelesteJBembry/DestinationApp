import axios from "axios";
require("dotenv").config();


// Export an object containing methods we'll use for accessing the location and events
export default {

    getQuestions: function () {
        return axios.get("/api/questions");
    },

    fetchTour: function (city) {

        const triposoTourUrl = "https://www.triposo.com/api/20200405/tour.json?";
        const tourQueryUrl = `${triposoTourUrl}location_ids=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;

        return axios
			//.get(queryUrl)
		.get(tourQueryUrl)

	}
};

// export default {

//     fetchDestination: function (tours) {

//         const triposoTourUrl = "https://www.triposo.com/api/20200405/tour.json?";
//         const tourQueryUrl = `${triposoTourUrl}?location_ids=${city}&account=${process.env.REACT_APP_ACCOUNT}&token=${process.env.REACT_APP_TOKEN}`;


//         return axios
//             .get(tourQueryUrl)
