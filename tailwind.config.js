/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html" , "./*.html"],
  theme: {
    extend: {
      colors : {
        current: 'currentColor',
        transparent: 'transparent',
        'primary' : '#00B207',
        'SoftPrimary' : "#2C742F",
        "Warning" : "#FF8A00",
        "Danger" : "#EA4B48",
        "grays6" : "#666666",
        "grays3" : "#333333",
        "grays9" : "#999999",
        "bordercolor" : "#B1BBC8",
        "pagecolor" : "#f5f5f5",
        "green1" : "#29CC39",
        "orange1" : "#FF6633",
        "orangedark" : "#E64B17",
        "blue" : "#33BFFF",
        "people" : "#8833FF",
        "graylight" : "#E6E6E6" 
        
      },
      backgroundImage:{
        'offer1' : 'url(../image/Rectangle54.png)',
        'offer2' : 'url(../image/54.png)',
        'offer3' : 'url(../image/23.png)',
        "location" : "url(../image/Breadcrumbs.png)"
      },
      screens :{
        "xd" : "450px"
      }
    },
  },
  plugins: [],
}

