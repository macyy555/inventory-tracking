// const withMT = require("@material-tailwind/react/utils/withMT");
import withMT from "@material-tailwind/react/utils/withMT";
import autoprefixer from 'autoprefixer'
 
export default withMT({
  content: ["./index.html", 
            "./src/**/*.{vue,js,ts,jsx,tsx}", 
            ],
  theme: {
    extend: {},
  },
  plugins: [autoprefixer],
});