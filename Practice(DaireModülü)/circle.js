
CircleArea = (radius) => {
    let Area = radius*radius*Math.PI;
    console.log("Dairenin alanı" + Area);

}

CircleCircumference = (radius) => {
    let Circumference = 2*Math.PI*radius;
    console.log("Dairenin çevresi" + Circumference)
}


module.export = { CircleArea, CircleCircumference};
