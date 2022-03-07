export default function DataTile({ temperature, pressure, humidity }) {
  return (
    <div>
      <h3>Temperatura</h3>
      <p className="temperature">{temperature} C</p>
      <h3>Ciśnienie</h3>
      <p className="pressure">{pressure} hPa</p>
      <h3>Wilgotność</h3>
      <p className="humidity">{humidity} %</p>
    </div>
  );
}
