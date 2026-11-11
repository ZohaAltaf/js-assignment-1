 let weather = prompt("Enter weather type: summer, winter, autumn, spring, rainy");

weather = weather.toLowerCase();

if (weather === "summer") {
document.writeln(`
  <div class="d-flex align-items-center justify-content-center"
  style="height: 100vh; width: 100vw; background:
   linear-gradient(135deg, rgba(255, 165, 0, 0.4), rgba(255, 255, 0, 0.2), rgba(0, 191, 255, 0.2)),
   url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e'); background-size: cover;
   background-position: center; background-repeat: no-repeat;">

  <div class="card" style="width: 18rem;">
  <img src="images/summer-1.gif" class="card-img-top" alt="Summer"  style="height: 200px; width:100%; object-fit: cover;">

  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">Summer</h5>
    <p class="card-text fw-bold" style="text-align: justify; line-height: 1.5;">
    Summer is a hot and sunny season with long days and bright weather, perfect for outdoor activities and holidays.
    </p>
    <a href="#" class="btn btn-dark rounded-pill px-4">See →</a>
  </div>
</div>

</div>
  `);
}

else if(weather === "winter"){
document.writeln(` <div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: linear-gradient(to top, #e6dada, #274046);">

  <div class="card overflow-hidden" style="width: 18rem;">
  <img src="images/winter-1.gif" class="card-img-top" alt="Winter" style="height:200px; width:100%; object-fit: cover;">

  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">Winter</h5>
    <p class="card-text fw-bold" style="text-align: justify; line-height: 1.5;">
    Winter is a cold season with chilly winds and cozy days, often enjoyed with warm clothes and hot drinks.
    </p>
    <a href="#" class="btn btn-dark rounded-pill px-4">See →</a>
  </div>
</div>
</div>
`);
}

else if(weather === "autumn"){
document.writeln(` <div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: linear-gradient( #d1913c, #ffd194);">

  <div class="card" style="width: 18rem;">
  <img src="images/autumn-gif.gif" class="card-img-top" alt="Autumn" style= "height:200px; object-fit:cover;">

  <div class="card-body">
    <h5 class="card-title text-center fw-bold">Autumn</h5>
    <p class="card-text" style="text-align: justify; line-height: 1.5;">
    Autumn is a calm season where leaves change color and fall, giving a peaceful and cool atmosphere.
    </p>
    <a href="#" class="btn btn-dark rounded-pill px-4">See →</a>
  </div>
  </div>
</div>
`);
}

else if(weather === "spring"){
document.writeln(`<div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: linear-gradient( #ffecd2, #fcb69f);">

<div class="card" style="width: 18rem;">
  <img src="images/spring-gif.gif" class="card-img-top" alt="Spring" style= "height:200px; object-fit:cover;">

<div class="card-body">
    <h5 class="card-title text-center fw-bolder">Spring</h5>
    <p class="card-text fw-bold" style="text-align: justify; line-height: 1.5;">
    Spring is a pleasant season when flowers bloom, trees turn green again, and the weather feels fresh and comfortable.
    </p>
    <a href="#" class="btn btn-dark rounded-pill px-4">See →</a>
</div>
</div>
</div>
`);
}

else if (weather === "rainy") {
  document.writeln(` <div class="d-flex align-items-center justify-content-center" style="height: 100vh; width: 100vw; background: linear-gradient(to bottom, #1c1c1c, #2c3e50, #3a6073);">

  <div class="card" style="width: 18rem;">
  <img src="images/rainy-gif.gif" class="card-img-top" alt="rainy Season" style="height: 200px ; object-fit :cover;" >
  <div class="card-body">
    <h5 class="card-title text-center fw-bolder">Rainy</h5>
    <p class="card-text fw-bold" style="text-align: justify; line-height: 1.5;">
   The rainy season brings refreshing rainfall, cool weather, and lush green surroundings after the hot summer months.
</p>
<a href="#" class="btn btn-dark rounded-pill px-4">See →</a>
</div>
</div>
</div>  
`);
}
