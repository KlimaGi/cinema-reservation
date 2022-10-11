const movies = [
  {
    id: 1,
    img: "https://tse4.mm.bing.net/th?id=OIP.9a5P4PqvspifShIhWbw-ogAAAA&pid=Api&P=0",
    title: 'The Devil All The Time',
    description: 'Starring Tom Holland and Robert Pattinson, this thriller sees menacing characters come across a young man committed to protecting his loved ones in a small town post World War II. Corruption and turbulence are at the core of this film, taking its viewers on one hell of a bumpy ride.',
    seats: [],
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShS3_F5yoC5i3HrX827jLZRJFXdT7G2MOx1Q&usqp=CAU",
    title: 'I See You',
    description: "If you love Helen Hunt's then prepare yourself for this psychological thriller. A 12-year-old boy goes missing and the case's investigator Greg Harper is struggling issues at home with his wife, Jackie (Hunt) and son Connor. However, Jackie and Greg's family soon finds itself tormented by unexplainable events that may be linked to the child's disappearance. One watch of this trailer and you'll be clicking 'play film' immediately.",
    seats: [],
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWXrzKx_-HMcTi75YRPfnc8JdZ3iLuFZiWg&usqp=CAU",
    title: 'The Gift',
    description: "A psychological thriller film written, co-produced, and directed by actor Joel Edgerton, The Gift sees couple Simon (Jason Bateman) and Robyn (Rebecca Hall) meet Gordo (Edgerton), from Simon’s past, who exposes a pretty terrifying secret which causes Robyn to question how much she knows about her beloved.",
    seats: [],
  }
]

for (let i = 0; i < 40; i++) {
  movies[0].seats.push(null)
  movies[1].seats.push(null)
  movies[2].seats.push(null)
}

const carSchema = require('../schemas/carSchema');

async function addCar({ car }) {
  const newCar = new carSchema({ car })

  const carData = await newCar.save();
  console.log('carData', carData);
}

module.exports = {
  indexInfo: (req, res) => {
    res.send({ movies });
  },
  reserve: (req, res) => {
    const { cell: cellIndex, movie: movieIndex } = req.params;

    movies[movieIndex].seats[cellIndex] = true;

    res.send({ movies });
  },
  carInfo: (req, res) => {
    console.log('req--', req.body);
    addCar(req.body);
    res.send(req.body);
  }


}