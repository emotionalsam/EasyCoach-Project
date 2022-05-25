import React from "react";

function Field({ shots }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "gray",
          height: 500,
          width: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            background: "gray",
            height: 50,
            width: 100,
            border: "2px solid white",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
        <div
          style={{
            background: "gray",
            height: 150,
            width: 300,
            border: "2px solid white",
            borderBottom: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "gray",
              height: 300,
              width: 220,
              margin: "auto",
              border: "2px solid white",
              borderRadius: "50%",
              transform: "translate(3px,31px)",
            }}
          />
          <div
            style={{
              background: "gray",
              height: 150,
              width: 300,
              borderTop: "2px solid white",
              transform: "translateY(-245px)",
            }}
          >
            <div
              style={{
                background: "gray",
                height: 150,
                width: 100,
                borderLeft: "2px solid white",
                borderRight: "2px solid white",
                margin: "auto",
              }}
            >
              <div
                style={{
                  background: "gray",
                  height: 60,
                  width: 96,
                  borderBottom: "2px solid white",
                  margin: "auto",
                }}
              />
            </div>
          </div>
        </div>
        {Object.keys(shots).map((shot) => (
          <div className={`score ${shot}`}>{shots[shot]}</div>
        ))}
      </div>
      <div
        style={{
          background: "gray",
          height: 20,
          width: 70,
          borderTop: "2px solid white",
        }}
      />
    </div>
  );
}

export default Field;
