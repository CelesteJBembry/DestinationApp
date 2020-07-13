import axios from "axios";
import("dotenv").config();
const triposoUrl = "https://www.triposo.com/api/latest/location.json";

// Export an object containing methods we'll use for accessing the location and events
export default {
    fetchDestination: function () {
        return axios
            .get('${triposoUrl}?id=Houston&account=${[process.env.REACT_APP_ACCOUNT]}&token=${[process.env.REACT.APP.TOKEN]}')

            .then(res => {
                const destination = res.data;
                return {
                    data: data
                };
            })

    }
};
