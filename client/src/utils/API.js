import axios from "axios";
import("dotenv").config();

// Export an object containing methods we'll use for accessing the location and events
export default {
    fetchDestination: function () {
        return axios
            .get("https://www.triposo.com/api/latest/location.json?id=Houston")

            .then(res => {
                const destination = res.data;
                return {
                    data: data
                };
            })

    }
};
