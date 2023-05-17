import React from "react";
import "./map.css";
import { Circle, MapContainer, TileLayer, Popup } from "react-leaflet";
import axios from "axios";
import numeral from "numeral";
import { useQuery } from "@tanstack/react-query";

const MapChart = ({ center, zoom }: any) => {
  const { data } = useQuery(["dataByCountries"], async () => {
    const res = await axios.get(`https://disease.sh/v3/covid-19/countries`);

    return res;
  });

  return (
    <>
      <div className="map">
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* {showDataOnMap(data,"cases")} */}
          {data?.data.map((country: any) => {
            console.log(country);
            return (
              <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={"CC1034"}
                fillColor={"CC1034"}
                fillOpacity={0.4}
                radius={Math.sqrt(country["cases"]) * 100}
              >
                <Popup>
                  <div className="info-container">
                    <div
                      style={{
                        backgroundImage: `url(${country.countryInfo.flag})`,
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>

                    <p className="font-bold text-xl mb-2">{country.country}</p>

                    <div>
                      Total Cases: {numeral(country.cases).format("0,0")}
                    </div>
                    <div>
                      Active Cases: {numeral(country.active).format("0,0")}
                    </div>
                    <div>
                      Recovered: {numeral(country.recovered).format("0,0")}
                    </div>
                    <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
                  </div>
                </Popup>
              </Circle>
            );
          })}
        </MapContainer>
      </div>
    </>
  );
};

export default MapChart;
