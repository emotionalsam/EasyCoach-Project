import { useState, useEffect } from "react";
import "./App.css";
import { Table } from "antd";
import "antd/dist/antd.css";
import Chart from "react-apexcharts";

import Upload from "./components/Upload";
import Field from "./components/Field";

import FieldData from "./field.json";

function App() {
  const [data, setData] = useState();
  const [filter, setFilter] = useState([]);
  const [removedFilter, setRemovedFilter] = useState([]);
  const { Column } = Table;

  const handleFilterClick = (type) => {
    setFilter((prev) => prev.filter((el) => el !== type));
    setRemovedFilter((prev) => [...prev, type]);
  };

  const handleRemoveFilterClick = (type) => {
    setRemovedFilter((prev) => prev.filter((el) => el !== type));
    setFilter((prev) => [...prev, type]);
  };

  const config = {
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: true,
    },
  };

  useEffect(() => {
    setFilter([...Array(data?.titles?.length).keys()].slice(3));
  }, [data]);

  return (
    <div className="App">
      <Upload setData={setData} />
      <div className="filter_container">
        {data?.rowData?.length > 0 && (
          <>
            {/* choose what column to display */}
            <div className="filter_buttons_container">
              {data?.titles?.map(
                (each, i) =>
                  filter.includes(i) && (
                    <button
                      className="blue"
                      onClick={() => handleFilterClick(i)}
                    >
                      {each}
                    </button>
                  )
              )}
            </div>
            {/* return the filtered columns */}
            <div className="filter_buttons_container">
              {data?.titles?.map(
                (each, i) =>
                  removedFilter.includes(i) && (
                    <button
                      className="red"
                      onClick={() => handleRemoveFilterClick(i)}
                    >
                      {each}
                    </button>
                  )
              )}
            </div>
          </>
        )}
      </div>
      <Table
        pagination={false}
        size="small"
        className="table-striped-rows"
        bordered
        dataSource={data?.rowData?.filter(
          (_, i) => filter.includes(i) || i === 0 || i === 1 || i === 2
        )}
      >
        {data?.titles?.map(
          (title, i) =>
            (filter.includes(i) || i === 0 || i === 1 || i === 2) && (
              <Column title={title} dataIndex={title} key={title} />
            )
        )}
      </Table>
      {data && (
        <div className="donut-charts">
          <div>
            <h1>Average</h1>
            <Chart
              options={config}
              series={data?.averageArr ?? []}
              type="donut"
              width="380"
            />
          </div>
          <div>
            <h1>Sum</h1>
            <Chart
              options={config}
              series={data?.sumArr ?? []}
              type="donut"
              width="380"
            />
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        {FieldData.map((fData, i) => (
          <>
            <Field key={fData.id} shots={fData.Shots} />
            {i === 0 && (
              <div
                style={{ margin: "0px 50px", fontSize: 25, fontWeight: "bold" }}
              >
                %
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
